import random
import numpy as np

from troops import *
from constants import *
import util

TROOPS = [
    Barbarian,
    Archer,
    Giant
]

DEFAULT_QUANTS = [13, 13, 7]
DEFAULT_LEVELS = [4, 4, 3]


def generate_random_army(quants=DEFAULT_QUANTS, levels=DEFAULT_LEVELS):
    army = []
    titles = []
    for i in range(len(quants)):
        for j in range(quants[i]):
            x, y = util.gen_location()
            army.append(TROOPS[i](pos=(x, y), level=levels[i]))
            titles.append("%s_%d_x" % (army[-1].get_name(), j))
            titles.append("%s_%d_y" % (army[-1].get_name(), j))
    return army, ",".join(titles)


# Generate army from pandas. Need to add quants and levels from the titles
def generate_army_from_row(row, quants=DEFAULT_QUANTS, levels=DEFAULT_LEVELS):
    army = []
    curr_index = 0
    for i in range(len(quants)):
        for j in range(quants[i]):
            x, y = int(row[curr_index]), int(row[curr_index + 1])
            army.append(TROOPS[i](pos=(x, y), level=levels[i]))
            curr_index += 2
    return army


# Generate a single super barb at every spot
def generate_barb_matrix():
    armies = []
    for x in range(-MARGIN, BOARD_SIZE + MARGIN):
        for y in range(-MARGIN, BOARD_SIZE + MARGIN):
            if util.in_margins((x, y)):
                super_troop = Barbarian((x, y))
                super_troop.set_hp(1000)
                armies.append([super_troop])
    return armies





def generate_army_by_level(townhall_level):
    QUANTS_LVL_2_EASY = [8, 8, 2]
    QUANTS_LVL_2_HARD = [10, 10, 2]

    QUANTS_LVL_0_TEST = [0, 30, 0]
    QUANTS_LVL_0_LVLS = [1, 1, 1]

    if townhall_level == 2:
        return generate_random_army(quants=[0, 10, 3], levels=[2, 2, 1])
    elif townhall_level == 0:
        return generate_random_army(quants=[0, 30, 0], levels=[1, 1, 1])
    else:
        return generate_random_army(quants=[13, 13, 7], levels=[4, 4, 3])


