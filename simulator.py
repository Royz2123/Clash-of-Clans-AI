import board
import pathfinding
import copy
import board_viz

class Simulator(object):
    MAX_PATH_FOR_TROOP = 10

    def __init__(self, game_board):
        self._game_board = game_board
        self._iteration = 0

    def run(self, army):
        # Create state for both army and base
        base_state = copy.deepcopy(self._game_board)
        army_state = copy.deepcopy(army)
        board_graph = pathfinding.AStarGraph(base_state)
        self._iteration = 0

        while len(army_state) and len(base_state.get_buildings()):
            # army advances
            for troop in army_state:
                if troop.get_attacking() is None:
                    pos, reached = self.troop_step(troop, base_state, board_graph)
                    if reached:
                        troop.set_attacking(base_state.get_building_from_pos(pos))
                    else:
                        troop.set_pos(pos)

                # attack if turn
                if troop.get_attacking() is not None:
                    target = troop.get_attacking()
                    if target.get_hp() > 0:
                        target.set_hp(target.get_hp() - troop.get_dps())
                    if target.get_hp() <= 0:
                        troop.set_attacking(None)
                        try:
                            print("Destroyed building")
                            base_state.destroy_building(target)
                        except Exception as e:
                            print(e)

            # base attacks back
            for building in self._game_board.get_buildings():
                if building.is_defensive() and len(army_state):
                    army_state = building.attack(army_state)

            # print stats
            print("Iteration ", self._iteration, ": Army Size - ", len(army_state))
            base_state.update_viz()

    def troop_step(self, troop, base_state, board_graph):
        targets_loc = [t.get_pos() for t in troop.get_targets(base_state)]
        result, cost = pathfinding.AStarSearch(troop.get_pos(), targets_loc, board_graph)
        board_viz.viz_path(result, board_graph, targets_loc)

        # Attack nearest wall if no path to target
        if len(result) == 0 or len(result) > Simulator.MAX_PATH_FOR_TROOP:
            targets_loc = [t.get_pos() for t in base_state.get_walls()]
            result, cost = pathfinding.AStarSearch(troop.get_pos(), targets_loc, board_graph)
            board_viz.viz_path(result, board_graph, targets_loc)

        if len(result) == 1:
            return result[0], True
        else:
            return result[1], False
