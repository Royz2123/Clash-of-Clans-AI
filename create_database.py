import numpy as np

import board
from constants import *
import simulator
import generate_base
import generate_army
import board_viz


DB_SIZE = 2
DATABASES = "./databases/"
TYPES = 3


def get_writable_army(army):
    s = []
    for troop in army:
        x, y = troop.get_pos()
        s.append(str(x))
        s.append(str(y))
    return ",".join(s)


def create_db(size=DB_SIZE):
    with open(DATABASES + "X_" + str(size) + ".csv", "a+") as f_army:
        with open(DATABASES + "Y_" + str(size) + ".csv", "a+") as f_res:
            # write headers
            f_res.write(board.GameBoard(generate_base.generate_main_base()).get_titles() + ",total" + "\n")
            f_army.write(generate_army.generate_random_army()[1] + "\n")

    # Run "size" simulations
    # using the same main base for all simulations - no problem with 1 simulator
    main_board = board.GameBoard(generate_base.generate_main_base())
    sim = simulator.Simulator(main_board)
    for i in range(size):
        print("Current Row:\t", i)
        army, titles = generate_army.generate_random_army()

        stats = sim.run(army, save_end_state=True, debug=False)

        # Open and write in files for every iteration. Append.
        with open(DATABASES + "X_" + str(size) + ".csv", "a+") as f_army:
            with open(DATABASES + "Y_" + str(size) + ".csv", "a+") as f_res:
                f_army.write(get_writable_army(army) + "\n")
                f_res.write(stats["end_state"] + "\n")

    print("Finished DB of size:\t", size)


if __name__ == "__main__":
    create_db(10000)


