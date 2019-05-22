import board
import pathfinding
import copy
import board_viz
import random
import os


class Simulator(object):
    MAX_PATH_FOR_TROOP = 25
    ATTACK_PATH = "./attacks/"

    def __init__(self, game_board):
        self._game_board = game_board
        self._plans = {}
        self._iteration = 0
        self._orig_hp = game_board.calc_hp()

    def run(self, army, save_end_state=False, viz=False):
        # Create state for both army and base
        base_state = copy.deepcopy(self._game_board)
        army_state = copy.deepcopy(army)

        if viz:
            attack_name = "Attack_%d" % random.sample(range(1, 10000), 1)[0]
            attack_path = Simulator.ATTACK_PATH + attack_name + "/"
            os.mkdir(attack_path)

        board_graph = pathfinding.AStarGraph(base_state)
        self._iteration = 0

        while len(army_state) and len(base_state.get_non_wall_buildings()):
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
                    if target in base_state.get_buildings():
                        if target.get_hp() > 0:
                            target.take_damage(troop.get_dps())
                        if target.get_hp() <= 0:
                            troop.set_attacking(None)
                            base_state.destroy_building(target)
                    else:
                        troop.set_attacking(None)

            # base attacks back
            for building in base_state.get_buildings():
                if building.is_defensive() and len(army_state):
                    army_state = building.attack(army_state)

            # print stats
            self._iteration += 1

            if viz:
                print("Iteration ", self._iteration, ": Army Size - ", len(army_state))
                base_state.update_viz()
                board_viz.viz_board(base_state, army_state, attack_path + "%04d.png" % self._iteration)

        # return run stats
        percent = (self._orig_hp - base_state.calc_hp()) / self._orig_hp
        th_destroyed = not base_state.has_townhall()
        stats = {
            "base_won": len(base_state.get_non_wall_buildings()) != 0,
            "percent": percent,
            "stars": th_destroyed + (percent >= 0.5) + (percent >= 1),
            "elixir": self._game_board.calc_elixir(),
            "gold": self._game_board.calc_gold(),
        }
        print(stats)

        if viz:
            board_viz.create_video(attack_path)

        if save_end_state:
            stats["end_state"] = ", ".join([str(max(0, b.get_percent())) for b in base_state.get_non_wall_orig_buildings()])
        return stats

    def set_game_board(self,board):
        self._game_board=board

    def troop_step(self, troop, base_state, board_graph):
        # check if already has a valid cached plan
        if (
            self._plans.get(troop) is not None
            and base_state.get_building_from_pos(self._plans.get(troop)[-1]) is not None
        ):
            result = self._plans.get(troop)
            result = result[1:]
            self._plans[troop] = result
        else:
            targets_loc = [t.get_pos() for t in troop.get_targets(base_state)]
            result, cost = pathfinding.Dijkstra(troop.get_pos(), targets_loc, board_graph)

            # Attack nearest wall if no path to target
            if len(result) == 0 or len(result) > Simulator.MAX_PATH_FOR_TROOP:
                targets_loc = [t.get_pos() for t in base_state.get_walls()]
                result, cost = pathfinding.Dijkstra(troop.get_pos(), targets_loc, board_graph)

            # show path
            # board_viz.viz_path(result, board_graph, targets_loc)

            # cache this plan
            self._plans[troop] = result

        if len(result) <= troop.get_range() + 1:
            self._plans[troop] = None
            return result[-1], True
        else:
            return result[0], False
