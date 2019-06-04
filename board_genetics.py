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

    def __init__(self, army, level=4, mode=DEFAULT_MODE):
        self._army = army
        self._game_board = GameBoard(generate_base.generate_random_base_by_level(level=level))
        self._sim = Simulator(self._game_board)
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
            board_viz.viz_board(game_board=self._game_board, army=self._army, path=path)
            self._game_board.update_viz()

    """
    Our mutation function.
    """

    def mutation(self):
        # getting buildings and buildings that are not empty
        buildings = self._game_board.get_buildings()
        new_buildings = []

        # running through all the non empty buildings and try to replace them
        # with other buildings in the same size (including emptys)
        for i in range(len(buildings)):
            building = buildings[i]
            curr_state = new_buildings + buildings[i:]

            if False: #random.random() > MUTATION_RATE:
                new_buildings.append(building)
            else:
                # try swapping the building
                moved = False
                i = 0
                while not moved and i < 20:
                    i += 1
                    x, y = util.gen_board_location(BOARD_SIZE - building.get_size())
                    g = Building(pos=(x, y), size=building.get_size())

                    # check for building at that location
                    has_overlap = any([b.overlap(g) for b in curr_state])
                    # print([b.overlap(g) for b in curr_state])

                    # if building exists
                    if not has_overlap:
                        # swap between buildings if are the same size
                        building.set_pos((x, y))
                        moved = True

                new_buildings.append(building)

        # add new buildings
        self._game_board = GameBoard(buildings=new_buildings)
        self._sim = Simulator(self._game_board)
        self.calc_fitness()

