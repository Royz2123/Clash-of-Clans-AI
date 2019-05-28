from constants import *
import numpy as np


def in_margins(pos):
    return any([
        (coord > -MARGIN and coord < -INNER_MARGIN)
        or (coord > BOARD_SIZE + INNER_MARGIN and coord < BOARD_SIZE + MARGIN)
        for coord in pos
    ])


def list_from_pairs(pairs):
    return [item for pair in pairs for item in pair]


def pairs_from_list(lst):
    return [(lst[2*i], lst[2*i + 1]) for i in range(len(lst) // 2)]


def gen_location():
    while True:
        x, y = tuple(np.random.randint(BOARD_SIZE + 2*MARGIN, size=2) - MARGIN)

        """
        #y = np.random.randint(BOARD_SIZE + 2*MARGIN, size=1)[0] - MARGIN

        if np.random.randint(2, size=1)[0]:
            y += BOARD_SIZE + INNER_MARGIN + MARGIN

        if np.random.randint(2, size=1)[0]:
            x, y = y, x
        """

        if in_margins((x, y)):
            return x, y


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
