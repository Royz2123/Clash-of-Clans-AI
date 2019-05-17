from board import GameBoard, create_obj_from_index,BUILDINGS_MAP
from buildings import *
from random import random, randint
from constants import *


class GameGenetics:
    """
    This class manages all of the functions necessery in order to run GA.
    """

    def __init__(self, buildings=None):
        if buildings is None:
            buildings=self.create_buildings()
        self.quants=[0]*len(quants)
        self.levels=[0]*len(levels)
        for building in buildings:
            index=BUILDINGS_MAP[building.__class__]
            self.quants[index]+=1
            self.levels[index]=building.get_level()

        self.game_board = GameBoard(buildings)


    """
    This method generates random buildings permutation
    """
    def create_buildings(self):
        buildings = []
        # adding all types of buildings
        for i in range(1, len(self.quants)):
            # adding each one the amount of times nessecrry
            for j in range(self.quants[i]):
                # choosing random position until done.
                #TODO: implemnt overlap with x,y only.
                while True:
                    # choosing random positions on the board
                    x, y = tuple(
                        random.sample(range(0, BOARD_SIZE), 2))
                    # creating our building
                    curr_obj = create_obj_from_index(i)(pos=(x, y),
                                                        level=self.levels[i])
                    if not any(
                            [curr_obj.overlap(other) for other in buildings]):
                        break
                buildings.append(curr_obj)
        return buildings

    """
    create_individual method that will be used in GA
    """
    def create_individual(self):
        return GameGenetics(buildings=self.create_buildings())

    """
    Our fitness function, currently linear.
    """
    def fitness(self):
        outcome = self.game_board.run()
        percent = outcome[0]
        elix = outcome[1]
        gold = outcome[2]
        dark = outcome[3]
        starts = outcome[4]
        return 1/(percent + elix / 7500 + gold / 7500 + dark / 750 + starts * 35)

    """
    Our mutation function.
    """
    def mutation(self, mutation_rate):
        # getting buildings and buildings that are not empty
        buildings = self.game_board.get_buildings()
        non_emptys = [building for building in buildings if
                      building.__class__ != Empty]
        # running through all the non empty buildings and try to replace them
        # with other buildings in the same size (including emptys)
        for i in range(len(non_emptys)):
            if random() < mutation_rate:
                build1 = buildings[i]
                same_size = [build for build in buildings if build.get_size()==build1.get_size()]
                chosen_index = randint(0, len(same_size))
                build2 = same_size[chosen_index]
                buildings[i].set_pos(build2.get_pos())
                buildings[chosen_index].set_pos(build1.get_pos())
        self.game_board.set_buildings(buildings)



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
