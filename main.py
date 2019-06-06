import board
import simulator
import generate_base
import generate_army
import board_viz
import base_from_html
import util

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
    gb = board.GameBoard(base_from_html.html_to_game_board("bases/base_th4_1.html"))
    row3 = [-11.0,
 -8.0,
 11.0,
 -3.0,
 -5.0,
 9.0,
 8.0,
 -1.0,
 9.0,
 -5.0,
 6.0,
 9.0,
 11.0,
 10.0,
 11.0,
 8.0,
 -20.0,
 11.0,
 10.0,
 10.0,
 8.0,
 -3.0,
 8.0,
 -5.0,
 8.0,
 8.0,
 -0.0,
 -12.0,
 10.0,
 9.0,
 8.0,
 8.0,
 -14.0,
 8.0,
 8.0,
 8.0,
 -0.0,
 -4.0,
 9.0,
 -6.0,
 -20.0,
 -4.0,
 -1.0,
 -0.0,
 8.0,
 -0.0,
 8.0,
 9.0,
 10.0,
 10.0,
 8.0,
 -0.0,
 -6.0,
 6.0,
 7.0,
 -0.0,
 10.0,
 13.0,
 -0.0,
 10.0,
 7.0,
 7.0,
 8.0,
 9.0,
 6.0,
 10.0,
 -2.0,
 11.0,
 10.0,
 8.0,
 10.0,
 11.0,
 10.0,
 9.0,
 9.0,
 9.0]
    army = generate_army.generate_army_from_row(
        row=row3,
        quants=[13, 13, 5]
    )

    # visualize
    board_viz.viz_board(gb, army)
    gb.update_viz()

    # create simulator
    sim = simulator.Simulator(gb)
    stats = sim.run(army, viz=True, save_end_state=True)
    print(stats)


def check_adv():
    row1 = [  1,  33, -16,  -7, -15, -12,   0,  -9,  43,  32, -11,  -2,  29,
        12, -20,  36,  23,  -2,  35,  14,   5,  37,  44, -11,  -9,   2,
       -15,  -8,  -9,  35,   3,  -5,  -5,  43,  47,  26,  15,  30,  42,
       -12,  18, -10,  -5,  43,  30,  16, -12,  43,  37,   2,   2, -15,
       -11,  -7, -14,  -2,  17,  -6,  32,   7,  -9,  -5]
    grads1 = [-1., -1.,  1.,  1., -1., -1.,  1.,  1., -1., -1.,  1.,  1.,  0.,
        0.,  1., -1., -1.,  1.,  1., -1.,  1., -1.,  1.,  1.,  1., -1.,
       -1.,  1., -1., -1.,  1., -1.,  1., -1.,  1., -1., -1.,  1.,  1.,
       -1., -1.,  1., -1., -1.,  0.,  0., -1.,  1., -1., -1., -1.,  1.,
       -1., -1.,  1., -1.,  1.,  1.,  1., -1.,  1.,  1.
    ]
    row = [0,  -3,  47, -11,  46, -11, -10,   5,   0,  36,  39,  -9,  -5,
        41,  34, -15, -15,   6,  38,  -5,  -6,  -8,  38,  -5,  -5,  39,
        -4,  44,  27,  45,  47,   6,  21, -18,  -4,  46, -16,  32,  35,
        45,  30,   6, -20,  -1,   3,  -4,   5,  30, -10, -13,  32,   2,
       -15,  30,  41, -19,   6,  -4,  36,  11,  44,  39]
    grads = [-1., -1., -1.,  1.,  1., -1.,  1., -1., -1.,  1.,  1.,  1., -1.,
       -1.,  1., -1.,  1., -1.,  1., -1.,  1., -1., -1.,  1.,  1., -1.,
       -1., -1., -1., -1.,  1.,  1., -1., -1., -1., -1., -1., -1.,  1.,
        1.,  1., -1.,  1.,  1.,  1.,  1., -1.,  1., -1., -1.,  1., -1.,
       -1.,  1.,  1.,  1., -1., -1.,  1.,  1., -1.,  1.]
    row2=[-4.0, -5.0, 43.0, -7.0, 49.0, -15.0, -6.0, 1.0, -4.0, 36.0, 41.0, -5.0, -9.0, 37.0, 38.0, -19.0, -13.0, 2.0, 42.0, -9.0, -8.0, -12.0, 36.0, -1.0, -1.0, 37.0, -8.0, 40.0, 23.0, 41.0, 49.0, 6.0, 17.0, -19.0, -8.0, 42.0, -19.0, 28.0, 39.0, 49.0, 32.0, 4.0, -18.0, 3.0, 1.0, -1.0, 1.0, 34.0, -14.0, -17.0, 34.0, -2.0, -19.0, 34.0, 45.0, -15.0, 2.0, -8.0, 34.0, 13.0, 46.0, 43.0]
    row3=[21.0, -5.0, 34.0, 25.0, 48.0, 44.0, 4.0, 35.0, 19.0, 45.0, 41.0, 11.0, 1.0, 33.0, -12.0, 5.0, 44.0, -19.0, 6.0, -10.0, -7.0, 10.0, 40.0, -3.0, 14.0, 32.0, 33.0, 8.0, 11.0, -9.0, 29.0, 45.0, -3.0, -11.0, 41.0, 3.0, 24.0, -10.0, 19.0, 37.0, 40.0, 19.0, 10.0, 41.0, 4.0, -19.0, 35.0, 30.0, -6.0, 22.0, -3.0, 7.0, 40.0, 30.0, 32.0, 41.0, 16.0, -3.0, -7.0, 27.0, 47.0, -3.0, 9.0, 44.0, -19.0, 19.0, -2.0, 20.0, -18.0, 25.0, -5.0, 39.0, 42.0, 22.0, 48.0, 31.0]

    army = generate_army.generate_army_from_row(
        row = row3,
        quants = [13, 13, 5]
    )
    # arrows = util.pairs_from_list(grads)
    board_viz.viz_board(army=army, arrows=[], viz=True)


if __name__ == "__main__":
    # plot_single_barb_mat(generate_army.generate_barb_matrix())
    main()
