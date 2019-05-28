from board import GameBoard, create_obj_from_index, BUILDINGS_MAP
from buildings import *
from random import random, randint
from constants import *
from simulator import *
from generate_army import *
import generate_base


SAVE_FOLDER = "./optimize_viz/genetics/board_genetics/"


class BoardGenetics:
    MAXIMIZE_FITNESS = False
    DEFAULT_MODE = DESTORYER

    """
    This class manages all of the functions necessery in order to run GA.
    """

    def __init__(self, army, level=4, mode=DEFAULT_MODE):
        self._army = army
        self._game_board = GameBoard(generate_base.generate_random_base_by_level(level=level))
        self._sim = Simulator(self._game_board)
        self._fit = SMALL_NUMBER
        self._mode = mode
        self.calc_fitness()

    def minimize_fitness(self):
        return True

    def run(self):
        return self._sim.run(self._army)

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
                self._fit = 2 * outcome["percent"] + 0.3 * outcome["stars"]
            elif self._mode == GOLD_DIGGER:
                self._fit = outcome["gold"]
            elif self._mode == ELIXIR_LOVER:
                self._fit = outcome["elixir"]
            elif self._mode == GOLD_DIGGER:
                self._fit = outcome["gold"] + outcome["elixir"]

        except Exception as e:
            print(e)
            self._fit = 0

        print(self._fit)

    def get_fitness(self):
        return self._fit

    def viz(self, index, viz_mode=True):
        if viz_mode:
            path = SAVE_FOLDER + "%04d.png" % index
            board_viz.viz_board(game_board=self._game_board, army=self._army, viz=False, path=path)
            self._game_board.update_viz()

    """
    Our mutation function.
    """

    def mutation(self):
        # getting buildings and buildings that are not empty
        buildings = self._game_board.get_buildings()
        non_emptys = [building for building in buildings if
                      building.__class__ != Empty]
        # running through all the non empty buildings and try to replace them
        # with other buildings in the same size (including emptys)
        for i in range(len(non_emptys)):
            if random.random() < MUTATION_RATE:
                build1 = buildings[i]
                same_size = [build for build in buildings if
                             build.get_size() == build1.get_size()]
                chosen_index = randint(0, len(same_size)-1)
                build2 = same_size[chosen_index]
                buildings[i].set_pos(build2.get_pos())
                # avoiding overlap
                buildings[buildings.index(same_size[chosen_index])].set_pos(build1.get_pos())
        self._game_board.set_buildings(buildings)
        self._sim.set_game_board(self._game_board)
        self.calc_fitness()
        self._game_board.add_emptys()

