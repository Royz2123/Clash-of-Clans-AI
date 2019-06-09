from board import GameBoard, create_obj_from_index, BUILDINGS_MAP
from buildings import *
from random import random, randint
from constants import *
from simulator import *
import generate_army
import generate_base
import board_viz
import util
import numpy as np
import traceback

MAIN_BOARD = generate_base.generate_main_base()
SAVE_FOLDER = "./optimize_viz/genetics/army_genetics/"


class ArmyGenetics:
    MAXIMIZE_FITNESS = True

    """
    This class manages all of the functions necessery in order to run GA.
    """
    DEFAULT_MODE = DESTORYER

    def __init__(self, level=4, mode=DEFAULT_MODE, game_board=None):
        self._army, titles = generate_army.generate_army_by_level(townhall_level=level)

        if game_board is None:
            self._game_board = GameBoard(generate_base.generate_base_by_level(level))
        else:
            self._game_board = game_board

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

    def get_army(self):
        return self._army

    """
    Our fitness function, currently linear.
    """

    def calc_fitness(self):
        try:
            outcome = self.run()

            # calculate fitness
            if self._mode == REGULAR:
                self._fit = 2 * outcome["percent"] + 0.3 * outcome["stars"] + outcome["gold"] + outcome["elixir"]
            elif self._mode == DESTORYER:
                self._fit = outcome["percent"]
            elif self._mode == GOLD_DIGGER:
                self._fit = outcome["gold"]
            elif self._mode == ELIXIR_LOVER:
                self._fit = outcome["elixir"]
            elif self._mode == RESOURCEFUL:
                self._fit = outcome["gold"] + outcome["elixir"]

        except Exception as e:
            print(e)
            traceback.print_exc()
            self._fit = 0

        print(self._fit)

    def minimize_fitness(self):
        return False

    def get_fitness(self):
        return self._fit

    def viz(self, index, viz_mode=True):
        if viz_mode:
            path = SAVE_FOLDER + "%04d.png" % index
            # self._game_board.update_viz()
            # print([t.get_pos() for t in self._army])
            board_viz.viz_board(game_board=self._game_board, title="Generation: %d" % index, army=self._army, viz=False, path=path)
        if self._mode == DESTORYER and self._fit == 2.9:
            self._sim = Simulator(self._game_board)
            self._sim.run(self._army)

    """
    Our mutation function.
    """

    def mutation(self):
        if random.random() > 0.3:
            self.mutation2()
        else:
            self.mutation1()

    def mutation3(self):
        new_army = []
        for troop in self._army:
            if random.random() > 0.3:
                new_army.append(troop)
            else:
                x, y = troop.get_pos()
                while True:
                    dx, dy = tuple(np.random.normal(loc=0.0, scale=3.0, size=2))

                    if util.in_margins((x + int(dx), y + int(dy))):
                        troop.set_pos((x + int(dx), y + int(dy)))
                        break
                new_army.append(troop)

        self._army = new_army
        self.calc_fitness()

    def mutation2(self):
        self._army[random.randint(0, len(self._army) - 1)].set_pos(util.gen_location())
        self.calc_fitness()

    def mutation1(self):
        new_army = []
        for troop in self._army:
            if random.random() < 0.1:
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
