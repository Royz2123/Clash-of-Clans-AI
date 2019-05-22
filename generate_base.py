import board
import random
from constants import *


def generate_random_base(quants, levels):
    buildings = []
    for i in range(1, len(quants)):
        for j in range(quants[i]):
            while True:
                size = board.create_obj_from_index(i)(pos=(0, 0), level=1).get_size()
                x, y = tuple(random.sample(range(0, BOARD_SIZE - size), 2))
                curr_obj = board.create_obj_from_index(i)(pos=(x, y), level=levels[i])
                if not any([curr_obj.overlap(other) for other in buildings]):
                    break
            buildings.append(curr_obj)
    return buildings


def generate_surrounded_base_3():
    QUANTS = [0, 2, 1, 1, None, 1]
    LEVELS = [0, 3, 2, 3, 3, 1]

    buildings = []
    for i in range(1, len(QUANTS)):
        if i == 4:
            for x in range(BOARD_SIZE):
                for y in range(BOARD_SIZE):
                    if x == 0 or y == 0 or x == BOARD_SIZE -1 or y == BOARD_SIZE - 1:
                        curr_obj = board.create_obj_from_index(i)(pos=(x, y), level=LEVELS[i])
                        buildings.append(curr_obj)

        else:
            for j in range(QUANTS[i]):
                while True:
                    size = board.create_obj_from_index(i)(pos=(0, 0), level=1).get_size()
                    x, y = tuple(random.sample(range(1, BOARD_SIZE - size), 2))
                    curr_obj = board.create_obj_from_index(i)(pos=(x, y), level=LEVELS[i])
                    if not any([curr_obj.overlap(other) for other in buildings]):
                        break
                buildings.append(curr_obj)
    return buildings


def generate_random_base_3():
    QUANTS = [0, 2, 1, 1, 50, 1]
    LEVELS = [0, 3, 2, 3, 3, 1]
    return generate_random_base(QUANTS, LEVELS)



"""
MAIN BASE WE ARE TRAINING ON
"""
from buildings_ron import *
def generate_main_base():
    army1=ArmyCamps(pos=(0,4),level=3)
    army2=ArmyCamps(pos=(0,10),level=3)
    elixir1=ElixirCollector(pos=(3,16),level=6)
    elixir2=ElixirCollector(pos=(12,16),level=6)
    elixir3=ElixirCollector(pos=(12,16),level=6)

    pass



