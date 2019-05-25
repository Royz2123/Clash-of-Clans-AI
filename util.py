from constants import *


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
