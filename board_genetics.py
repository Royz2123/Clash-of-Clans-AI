from board import GameBoard, create_obj_from_index, BUILDINGS_MAP
from buildings import *
from random import random, randint
from constants import *
from simulator import *
from generate_army import *
from generate_base import *


class BoardGenetics:
    """
    This class manages all of the functions necessery in order to run GA.
    """

    def __init__(self, buildings=None):
        if buildings is None:
            self.quants = QUANTS
            self.levels = LEVELS
            buildings = GameBoard.create_buildings(self.quants, self.levels)
        else:
            self.quants = [0] * len(BUILDINGS_MAP)
            self.levels = [0] * len(BUILDINGS_MAP)
            for building in buildings:
                index = BUILDINGS_MAP[building.__class__]
                self.quants[index] += 1
                self.levels[index] = building.get_level()

        self.game_board = GameBoard(buildings)
        self.sim = Simulator(self.game_board)
        self._fit=SMALL_NUMBER
        self.calc_fitness()


    def run(self):
        army, titles = generate_random_army()
        return self.sim.run(army)

    """
    Our fitness function, currently linear.
    """

    def calc_fitness(self):
        outcome = self.run()
        self._fit = 2 * outcome["percent"] + 0.3 * outcome["stars"] + outcome["gold"] + outcome["elixir"]

    def get_fitness(self):
        return self._fit

    def viz(self, index):
        self.game_board.update_viz()

    """
    Our mutation function.
    """

    def mutation(self,mutation_rate):
        # getting buildings and buildings that are not empty
        buildings = self.game_board.get_buildings()
        non_emptys = [building for building in buildings if
                      building.__class__ != Empty]
        # running through all the non empty buildings and try to replace them
        # with other buildings in the same size (including emptys)
        for i in range(len(non_emptys)):
            if random.random() < mutation_rate:
                build1 = buildings[i]
                same_size = [build for build in buildings if
                             build.get_size() == build1.get_size()]
                chosen_index = randint(0, len(same_size)-1)
                build2 = same_size[chosen_index]
                buildings[i].set_pos(build2.get_pos())
                # avoiding overlap
                buildings[buildings.index(same_size[chosen_index])].set_pos(build1.get_pos())
        self.game_board.set_buildings(buildings)
        self.sim.set_game_board(self.game_board)
        self.calc_fitness()
        self.game_board.add_emptys()


def lst_1D_to_2D(l, n):
    return [l[i:i + n] for i in range(0, len(l), n)]


def lst_2D_2_1D(sqr):
    """
    This function takes 2D array and transforms it to 1D array
    :param sqr: the 2D array that should be changed
    :return: the 1D transformed array
    """
    if type(sqr[0]) == int:
        return sqr
    l = []
    for i in range(len(sqr)):
        for j in range(len(sqr[i])):
            l.append(sqr[i][j])
    return l
