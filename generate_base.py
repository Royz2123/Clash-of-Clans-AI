import board
import random
from constants import *


def create_obj_from_index(search_index):
    for obj, index in BUILDINGS_MAP.items():
        if index == search_index:
            return obj
    return None

def generate_random_base(quants, levels):
    buildings = []
    # adding all types of buildings
    for i in range(1, len(quants)):
        # adding each one the amount of times nessecrry
        for j in range(quants[i]):
            # choosing random position until done.
            # TODO: implemnt overlap with x,y only.
            x=0
            while True:
                x+=1
                print(x)
                # choosing random positions on the board
                size = create_obj_from_index(i)(pos=(0, 0), level=1).get_size()
                x, y = tuple(
                    random.sample(range(0, BOARD_SIZE - size), 2))
                # creating our building
                curr_obj = create_obj_from_index(i)(pos=(x, y),
                                                    level=levels[i])
                if not any(
                        [curr_obj.overlap(other) for other in buildings]):
                    break
            buildings.append(curr_obj)
    return buildings


def generate_random_base_3():
    QUANTS = [0, 2, 1, 1, 50, 1]
    LEVELS = [0, 3, 2, 3, 3, 1]
    return generate_random_base(QUANTS, LEVELS)
