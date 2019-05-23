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
    return ", ".join(s)


def create_db(size=DB_SIZE):
    with open(DATABASES + "X_" + str(size) + ".csv", "w+") as f_army:
        with open(DATABASES + "Y_" + str(size) + ".csv", "w+") as f_res:
            # write headers
            f_res.write(board.GameBoard(generate_base.generate_main_base()).get_titles() + "\n")
            f_army.write(generate_army.generate_random_army()[1] + "\n")

            for i in range(size):
                print("Current Row:\t", i)
                main_board = board.GameBoard(generate_base.generate_main_base())
                sim = simulator.Simulator(main_board)
                army, titles = generate_army.generate_random_army()

                stats = sim.run(army, save_end_state=True, debug=True)

                f_army.write(get_writable_army(army) + "\n")
                f_res.write(stats["end_state"] + "\n")
    print("Finished DB of size:\t", size)


if __name__ == "__main__":
    create_db(1)
    create_db(10)
    create_db(100)
    create_db(1000)
    create_db(10000)


