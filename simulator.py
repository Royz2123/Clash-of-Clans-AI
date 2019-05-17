import board
import pathfinding

class Simulator(object):

    DELTA_TIME = 0.1

    def __init__(self, game_board):
        self._game_board = game_board
        self._path_finder = pathfinding.AStarGraph(game_board)

    def run(self, army):
        pass

    def run_troop(self):
        pass
