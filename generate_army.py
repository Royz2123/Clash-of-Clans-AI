import random
import numpy as np

from troops import *
from constants import *

TROOPS = [
    Barbarian,
    Archer,
    Giant
]

DEFAULT_QUANTS = [13, 13, 10]
DEFAULT_LEVELS = [4, 4, 3]

# starting distance from base. Must be positive
INNER_MARGIN = 1


def gen_location():
    x = np.random.randint(BOARD_SIZE + 2*MARGIN, size=1)[0] - MARGIN
    y = np.random.randint(MARGIN - INNER_MARGIN, size=1)[0] - MARGIN

    if np.random.randint(2, size=1)[0]:
        y += BOARD_SIZE + INNER_MARGIN + MARGIN

    if np.random.randint(2, size=1)[0]:
        x, y = y, x

    return x, y


def generate_random_army(quants=DEFAULT_QUANTS, levels=DEFAULT_LEVELS):
    army = []
    titles = []
    for i in range(len(quants)):
        for j in range(quants[i]):
            x, y = gen_location()
            army.append(TROOPS[i](pos=(x, y), level=levels[i]))
            titles.append("%s_%d_x" % (army[-1].get_name(), j))
            titles.append("%s_%d_y" % (army[-1].get_name(), j))
    return army, ", ".join(titles)
