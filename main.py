import board
import simulator
import generate_base
import generate_army
import board_viz

from constants import *

from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
from matplotlib import cm
from matplotlib.ticker import LinearLocator, FormatStrFormatter
import numpy as np

MAIN_BOARD = generate_base.generate_main_base()


def plot_single_barb_mat(armies):
    # Make data.
    X = []
    Y = []
    Z = []

    gb = board.GameBoard(generate_base.generate_main_base())
    sim = simulator.Simulator(gb)

    for army in armies:
        stats = sim.run(army)
        x, y = army[0].get_pos()

        X.append(x)
        Y.append(y)
        Z.append(stats["percent"])

    # plot 3d
    fig = plt.figure()
    ax = fig.gca(projection='3d')

    # Plot the surface.
    surf = ax.scatter(X, Y, Z, cmap=cm.coolwarm,
                           linewidth=0, antialiased=False)
    plt.show()


def main():
    gb = board.GameBoard(generate_base.generate_main_base())
    army, titles = generate_army.generate_random_army()

    # visualize
    board_viz.viz_board(gb, army)
    gb.update_viz()

    # create simulator
    sim = simulator.Simulator(gb)
    stats = sim.run(army, viz=True)
    print(stats)


if __name__ == "__main__":
    plot_single_barb_mat(generate_army.generate_barb_matrix())
    #main()