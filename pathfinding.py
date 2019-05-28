from __future__ import print_function

import board
import main
from constants import *
import heapq

import board_viz


class AStarGraph(object):
    # Define a class board like grid with two barriers

    def __init__(self, game_board):
        self.barriers = []
        self._game_board = game_board
        self.set_barriers()

    def set_barriers(self):
        self.barriers = [wall.get_pos() for wall in self._game_board.get_walls()]

    def heuristic(self, start, goal):
        return 0
        # Use Chebyshev distance heuristic if we can move one square either
        # adjacent or diagonal
        D = 1
        D2 = 1
        dx = abs(start[0] - goal[0])
        dy = abs(start[1] - goal[1])
        return D * (dx + dy) + (D2 - 2 * D) * min(dx, dy)

    def get_vertex_neighbours(self, pos):
        n = []
        # Moves allow link a chess king
        for dx, dy in DIRECTIONS:
            x2 = pos[0] + dx
            y2 = pos[1] + dy
            if (
                x2 < -MARGIN or x2 > BOARD_SIZE + MARGIN
                or y2 < -MARGIN or y2 > BOARD_SIZE + MARGIN
            ):
                continue
            n.append((x2, y2))
        return n

    def move_cost(self, a, b):
        if b in self.barriers:
            return 20  # high cost to move through walls
        return 1  # Normal movement cost


"""
def AStarSearch(start, targets, graph):
    # remove every barrier that is in the targets
    graph.set_barriers()
    graph.barriers = list(set(graph.barriers) - set(targets))

    G = {}  # Actual movement cost to each position from the start position
    F = {}  # Estimated movement cost of start to end going via this position

    # Initialize starting values
    G[start] = 0
    F[start] = graph.heuristic(start, targets)

    closedVertices = set()
    openVertices = set([start])
    cameFrom = {}

    while len(openVertices) > 0:
        # Get the vertex in the open list with the lowest F score
        current = None
        currentFscore = None
        for pos in openVertices:
            if current is None or F[pos] < currentFscore:
                currentFscore = F[pos]
                current = pos

        # Check if we have reached the goal
        if current in targets:
            # Retrace our route backward
            path = [current]
            while current in cameFrom:
                current = cameFrom[current]
                path.append(current)
            path.reverse()

            # cut path at barrier if passes through
            final_path = []
            for loc in path:
                final_path.append(loc)
                if loc in graph.barriers:
                    break
            return final_path, F[current]  # Done!

        # Mark the current vertex as closed
        openVertices.remove(current)
        closedVertices.add(current)

        # Update scores for vertices near the current position
        for neighbour in graph.get_vertex_neighbours(current):
            if neighbour in closedVertices:
                continue  # We have already processed this node exhaustively
            candidateG = G[current] + graph.move_cost(current, neighbour)

            if neighbour not in openVertices:
                openVertices.add(neighbour)  # Discovered a new vertex
            elif candidateG >= G[neighbour]:
                continue  # This G score is worse than previously found

            # Adopt this G score
            cameFrom[neighbour] = current
            G[neighbour] = candidateG
            H = graph.heuristic(neighbour, targets)
            F[neighbour] = G[neighbour] + H

    print("A* failed to find a solution")
    return [], 0
"""


def Dijkstra(start, targets, graph):
    graph.set_barriers()
    graph.barriers = list(set(graph.barriers) - set(targets))

    G = {}  # Actual movement cost to each position from the start position

    # Initialize starting values
    G[start] = 0

    closedVertices = list()

    # create priority queue of open veritces
    openVertices = []
    heapq.heappush(openVertices, (0, start))

    cameFrom = {}

    while len(openVertices) > 0:
        # Get the vertex in the open list with the lowest F score
        cost, current = heapq.heappop(openVertices)

        # Check if we have reached the goal
        if current in targets:
            # Retrace our route backward
            path = [current]
            while current in cameFrom:
                current = cameFrom[current]
                path.append(current)
            path.reverse()

            # cut path at barrier if passes through
            final_path = []
            for loc in path:
                final_path.append(loc)
                if loc in graph.barriers:
                    break
            return final_path, G[loc]  # Done!

        # Mark the current vertex as closed
        closedVertices.append(current)

        # Update scores for vertices near the current position
        for neighbour in graph.get_vertex_neighbours(current):
            if neighbour in closedVertices:
                continue  # We have already processed this node exhaustively
            candidateG = G[current] + graph.move_cost(current, neighbour)

            if (
                neighbour not in G.keys()
                or (
                    neighbour in G.keys()
                    and candidateG < G[neighbour]
                )
            ):
                heapq.heappush(openVertices, (candidateG, neighbour))
                cameFrom[neighbour] = current
                G[neighbour] = candidateG
    print("shouldnt be here ever")
    return [], 0



if __name__ == "__main__":
    gb = board.GameBoard(main.generate_random_base_3())
    graph = AStarGraph(gb)
    print(graph.barriers)
    start = (0, 0)
    targets = [(1, 7), (7, 7), (7, 1)]
    result, cost = AStarSearch(start, targets, graph)
    board_viz.viz_path(result, graph, targets)