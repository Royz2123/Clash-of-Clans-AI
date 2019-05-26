from board import GameBoard, create_obj_from_index, BUILDINGS_MAP
from buildings import *
from random import random, randint
from constants import *
from simulator import *
import generate_army
from generate_base import *
import util


class ArmyGenetics:
    """
    This class manages all of the functions necessery in order to run GA.
    """

    def __init__(self, army=None, buildings=MAIN_BOARD):
        if army is None:
            army = generate_army.generate_random_army()

        self._army = army
        self._game_board = GameBoard(buildings)
        self._sim = Simulator(self._game_board)
        self._fit = 0
        self.calc_fitness()

    """
    create_individual method that will be used in GA
    """

    def create_individual(self):
        return ArmyGenetics(army=generate_army.generate_random_army())

    def run(self):
        return self.sim.run(self.run())

    """
    Our fitness function, currently linear.
    """

    def calc_fitness(self):
        outcome = self.sim.run(self._army)
        self._fit = 2 * outcome["percent"] + 0.3 * outcome["stars"] + outcome["gold"] + outcome["elixir"]

    def get_fitness(self):
        return self._fit

    """
    Our mutation function.
    """

    def mutation(self, mutation_rate):
        new_army = []
        for troop in self._army:
            if random.random() > mutation_rate:
                new_army.append(troop)
            else:
                x, y = troop.get_pos()
                dx, dy = DIRECTIONS[random.randint(0, len(DIRECTIONS))]
                new_loc = (x + dx, y +dy)
                if util.in_margins(new_loc):
                    troop.set_pos(new_loc)
                new_army.append(troop)

        self._army = new_army
        self.calc_fitness()
