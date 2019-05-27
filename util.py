from constants import *
import numpy as np


def in_margins(pos):
    return any([
        (coord >= -MARGIN and coord <= 0)
        or (coord >= BOARD_SIZE and coord <= BOARD_SIZE + MARGIN)
        for coord in pos
    ])


def list_from_pairs(pairs):
    return [item for pair in pairs for item in pair]


def pairs_from_list(lst):
    return [(lst[2*i], lst[2*i + 1]) for i in range(len(lst) // 2)]


def gen_location():
    x = np.random.randint(BOARD_SIZE + 2*MARGIN, size=1)[0] - MARGIN
    y = np.random.randint(MARGIN - INNER_MARGIN, size=1)[0] - MARGIN

    if np.random.randint(2, size=1)[0]:
        y += BOARD_SIZE + INNER_MARGIN + MARGIN

    if np.random.randint(2, size=1)[0]:
        x, y = y, x

    return x, y


