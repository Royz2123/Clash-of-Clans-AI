import numpy as np

import board
from constants import *
import simulator
import generate_base
import generate_army
import board_viz


MAIN_BASE = generate_base.generate_random_base()
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


def main():
    with open(DATABASES + "X_" + str(DB_SIZE) + ".csv", "w+") as f_army:
        with open(DATABASES + "Y_" + str(DB_SIZE) + ".csv", "w+") as f_res:
            # write headers
            f_res.write(board.GameBoard(MAIN_BASE).get_titles() + "\n")
            f_army.write(generate_army.generate_random_army()[1] + "\n")

            for i in range(DB_SIZE):
                main_board = board.GameBoard(MAIN_BASE)
                sim = simulator.Simulator(main_board)
                army, titles = generate_army.generate_random_army()

                stats = sim.run(army, save_end_state=True)

                f_army.write(get_writable_army(army) + "\n")
                f_res.write(stats["end_state"] + "\n")


if __name__ == "__main__":
    main()