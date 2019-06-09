from board import GameBoard, create_obj_from_index, BUILDINGS_MAP
from buildings import *
from random import random, randint
from constants import *
from simulator import *
from generate_army import *
import generate_base
import game_object


SAVE_FOLDER = "./optimize_viz/genetics/board_genetics/"


class BoardGenetics:
    MAXIMIZE_FITNESS = False
    DEFAULT_MODE = DESTORYER

    """
    This class manages all of the functions necessery in order to run GA.
    """

    def __init__(self, armies, level=4, mode=DEFAULT_MODE, game_board=None):
        self._armies = armies

        if game_board is None:
            self._game_board = GameBoard(generate_base.generate_random_base_by_level(level=level))
        else:
            self._game_board = game_board

        self._sim = Simulator(self._game_board)
        self._mode = mode
        self.calc_fitness()

    def get_gb(self):
        return self._game_board

    def set_armies(self, armies):
        self._armies = armies

    def minimize_fitness(self):
        return True

    def run(self, army):
        return self._sim.run(army)

    """
    Our fitness function, currently linear.
    """

    def calc_fitness(self):
        self._fit = 0
        try:
            for army in self._armies:
                outcome = self.run(army)

                # calculate fitness
                if self._mode == REGULAR:
                    self._fit += 2 * outcome["percent"] + 0.3 * outcome["stars"] + outcome["gold"] + outcome["elixir"]
                elif self._mode == DESTORYER:
                    self._fit += 2 * outcome["percent"] + 0.3 * outcome["stars"]
                elif self._mode == GOLD_DIGGER:
                    self._fit += outcome["gold"]
                elif self._mode == ELIXIR_LOVER:
                    self._fit += outcome["elixir"]
                elif self._mode == GOLD_DIGGER:
                    self._fit += outcome["gold"] + outcome["elixir"]

        except Exception as e:
            print(e)
            self._fit = 0
        self._fit /= len(self._armies)
        print(self._fit)

    def get_fitness(self):
        return self._fit

    def viz(self, index, viz_mode=True):
        if viz_mode:
            path = SAVE_FOLDER + "%04d.png" % index
            board_viz.viz_board(game_board=self._game_board, army=self._armies[0], path=path)
            self._game_board.update_viz()

    """
    Our mutation function.
    """
    def mutation(self, only_second=False):
        if not only_second:
            for i in range(random.randint(1, 5)):
                self.mutation_step_1()
        for i in range(random.randint(1, 2)):
            self.mutation_step_2()
        self.calc_fitness()

    # Swaps 2 random buildings of size 3
    def mutation_step_2(self):
        buildings = self._game_board.get_buildings()
        buildings = [b for b in buildings if b.get_size() == 3]
        i1, i2 = random.randint(0, len(buildings) - 1), random.randint(0, len(buildings) - 1)

        x, y = buildings[i1].get_pos()
        buildings[i1].set_pos(buildings[i2].get_pos())
        buildings[i2].set_pos((x, y))

    def mutation_step_1(self):
        # getting buildings and buildings that are not empty
        buildings = self._game_board.get_buildings()

        # running through all the non empty buildings and try to replace them
        # with other buildings in the same size (including emptys)
        index = random.randint(3, len(buildings) - 1)
        building = buildings[index]

        # try swapping the building
        moved = False
        i = 0
        while i < 20:
            i += 1
            x, y = util.gen_board_location(BOARD_SIZE - building.get_size() + 1)
            g = Building(pos=(x, y), size=building.get_size())

            # check for building at that location
            has_overlap = any([b.overlap(g) for b in buildings[:index] + buildings[index + 1:]])

            # if building exists
            if not has_overlap:
                # swap between buildings if are the same size
                building.set_pos((x, y))
                break

        # add new buildings
        # self._game_board.update_viz()


