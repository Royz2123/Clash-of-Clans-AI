import numpy as np

import board
from constants import *
import simulator
import generate_base
import generate_army
import board_viz
import sys
import random


DB_SIZE = 2
DATABASES = "./databases/finished/th"
TYPES = 3


def get_writable_army(army):
    s = []
    for troop in army:
        x, y = troop.get_pos()
        s.append(str(x))
        s.append(str(y))
    return ",".join(s)


def create_db(size=DB_SIZE, townhall_level=4):
    # using the same main base for all simulations - no problem with 1 simulator
    game_board = board.GameBoard(generate_base.generate_base_by_level(townhall_level))
    sim = simulator.Simulator(game_board)

    # Create filepaths
    seed = random.randint(1, 10000)
    x_path = DATABASES + str(townhall_level) + "/X_" + str(size) + "_TH_LVL_" + str(townhall_level) + "_" + str(seed) + ".csv"
    y_path = DATABASES + str(townhall_level) + "/Y_" + str(size) + "_TH_LVL_" + str(townhall_level) + "_" + str(seed) + ".csv"

    # Write Headers
    with open(x_path, "a+") as f_army:
        with open(y_path, "a+") as f_res:
            # write headers
            f_res.write(game_board.get_titles() + ",total" + "\n")
            f_army.write(generate_army.generate_army_by_level(townhall_level)[1] + "\n")

    # Run "size" simulations
    for i in range(size):
        print("Current Row:\t", i)
        army, titles = generate_army.generate_army_by_level(townhall_level)
        stats = sim.run(army, save_end_state=True, debug=False)

        # Open and write in files for every iteration. Append.
        with open(x_path, "a") as f_army:
            with open(y_path, "a") as f_res:
                f_army.write(get_writable_army(army) + "\n")
                f_res.write(stats["end_state"] + "\n")

    print("Finished DB of size:\t", size)


if __name__ == "__main__":
    size=10000
    th_level=2
    if len(sys.argv) >= 2:
        size = int(sys.argv[1])
    if len(sys.argv) >= 3:
        th_level = int(sys.argv[2])

    print("Creating Database: ", size, th_level)
    create_db(size=size, townhall_level=th_level)


