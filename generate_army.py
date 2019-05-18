import random

from troops import *
from constants import *

TROOPS = [
    Barbarian,
    Archer,
    Giant
]

DEFAULT_QUANTS = [10, 10, 5]
DEFAULT_LEVELS = [3, 3, 2]
DEFAULT_RECT = [BOARD_SIZE + 2, 0, BOARD_SIZE + MARGIN, BOARD_SIZE]


def generate_random_army(quants=DEFAULT_QUANTS, levels=DEFAULT_LEVELS, rect=DEFAULT_RECT):
    army = []
    for i in range(len(quants)):
        for j in range(quants[i]):
            x = random.sample(range(rect[0], rect[2]), 1)[0]
            y = random.sample(range(rect[1], rect[3]), 1)[0]
            army.append(TROOPS[i](pos=(x, y), level=levels[i]))
    print(army)
    return army
