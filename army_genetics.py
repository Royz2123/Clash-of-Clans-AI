from board import GameBoard, create_obj_from_index, BUILDINGS_MAP
from buildings import *
from random import random, randint
from constants import *
from simulator import *
import generate_army
import generate_base
import board_viz
import util

MAIN_BOARD = generate_base.generate_main_base()


class ArmyGenetics:
    """
    This class manages all of the functions necessery in order to run GA.
    """
    DEFAULT_MODE = ELIXIR_LOVER

    def __init__(self, army=None, buildings=MAIN_BOARD, mode=DEFAULT_MODE):
        if army is None:
            army, titles = generate_army.generate_random_army()

        self._army = army
        self._game_board = GameBoard(buildings)
        self._sim = Simulator(self._game_board)
        self._fit = 0
        self._mode = mode

        # calculate fitness once when created
        self.calc_fitness()

    """
    create_individual method that will be used in GA
    """

    def run(self):
        return self._sim.run(self._army)

    """
    Our fitness function, currently linear.
    """

    def calc_fitness(self):
        outcome = self.run()

        # calculate fitness
        if self._mode == REGULAR:
            self._fit = 2 * outcome["percent"] + 0.3 * outcome["stars"] + outcome["gold"] + outcome["elixir"]
        elif self._mode == DESTORYER:
            self._fit = 2 * outcome["percent"] + 0.3 * outcome["stars"]
        elif self._mode == GOLD_DIGGER:
            self._fit = outcome["gold"]
        elif self._mode == ELIXIR_LOVER:
            self._fit = outcome["elixir"]
        elif self._mode == GOLD_DIGGER:
            self._fit = outcome["gold"] + outcome["elixir"]

    def get_fitness(self):
        return self._fit

    def viz(self):
        board_viz.viz_board(game_board=self._game_board, army=self._army, viz=True)


    """
    Our mutation function.
    """

    def mutation(self):
        print("Mutating Army!")
        self.mutation2()

    def mutation2(self):
        self._army[random.randint(0, len(self._army) - 1)].set_pos(util.gen_location())
        self.calc_fitness()

    def mutation1(self, mutation_rate):
        new_army = []
        for troop in self._army:
            if random.random() > mutation_rate:
                new_army.append(troop)
            else:
                x, y = troop.get_pos()
                dx, dy = DIRECTIONS[random.randint(0, len(DIRECTIONS) - 1)]
                new_loc = (x + dx, y + dy)
                if util.in_margins(new_loc):
                    troop.set_pos(new_loc)
                new_army.append(troop)

        self._army = new_army
        self.calc_fitness()
