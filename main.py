import board
import simulator
import generate_base
import generate_army
import board_viz
import base_from_html

from constants import *

from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
from matplotlib import cm
from matplotlib.ticker import LinearLocator, FormatStrFormatter
import numpy as np

MAIN_BOARD = generate_base.generate_main_base()


def plot_single_barb_mat_3d(armies):
    # Make data.
    X = []
    Y = []
    Z = []

    gb = board.GameBoard(base_from_html.html_to_game_board("bases/base_th4_2.html"))
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


def plot_single_barb_mat(armies):
    # Make data.
    mat = np.zeros((BOARD_SIZE + 2 * MARGIN, BOARD_SIZE + 2 * MARGIN))

    gb = board.GameBoard(generate_base.generate_main_base())
    sim = simulator.Simulator(gb)

    for army in armies:
        stats = sim.run(army)
        x, y = army[0].get_pos()
        mat[x + MARGIN][y + MARGIN] = stats["percent"]

    # plot 3d
    plt.title("Attacking Heatmap of 1 super soldier")
    plt.xlabel("X")
    plt.ylabel("Y")
    plt.imshow(mat)
    plt.show()


def main():
    gb = board.GameBoard(generate_base.generate_base_by_level(2))
    army, titles = generate_army.generate_army_by_level(2)

    # visualize
    board_viz.viz_board(gb, army)
    gb.update_viz()

    # create simulator
    sim = simulator.Simulator(gb)
    stats = sim.run(army, viz=True)
    print(stats)


if __name__ == "__main__":
    # plot_single_barb_mat(generate_army.generate_barb_matrix())
    main()