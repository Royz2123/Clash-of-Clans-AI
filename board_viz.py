import matplotlib.pyplot as plt

from constants import *


import matplotlib.pyplot as plt

from constants import *


def draw_list(lst, color='r'):
    for (x, y) in lst:
        circle = plt.Circle((y, x), 0.2, color=color)
        plt.gcf().gca().add_artist(circle)


def viz_path2(result, graph, targets):
    draw_list(result)
    draw_list(graph.barriers, color='b')
    draw_list(targets, color='g')

    plt.xlim(-MARGIN, BOARD_SIZE + MARGIN)
    plt.ylim(-MARGIN, BOARD_SIZE + MARGIN)
    plt.gca().invert_yaxis()
    plt.show()


def viz_board(game_board, army):
    buildings = [b.get_pos() for b in game_board.get_real_buildings()]
    army = [b.get_pos() for b in army]

    draw_list(buildings, color='y')
    draw_list(army, color='c')

    plt.xlim(-MARGIN, BOARD_SIZE + MARGIN)
    plt.ylim(-MARGIN, BOARD_SIZE + MARGIN)
    plt.gca().invert_yaxis()
    plt.show()


def viz_path(result, graph, targets):
    for (x, y) in result:
        circle = plt.Circle((y, x), 0.2, color='r')
        plt.gcf().gca().add_artist(circle)

    for (x, y) in graph.barriers:
        circle = plt.Circle((y, x), 0.2)
        plt.gcf().gca().add_artist(circle)

    for (x, y) in targets:
        if not (x, y) in graph.barriers:
            circle = plt.Circle((y, x), 0.2, color='g')
            plt.gcf().gca().add_artist(circle)

    plt.xlim(-MARGIN, BOARD_SIZE + MARGIN)
    plt.ylim(-MARGIN, BOARD_SIZE + MARGIN)
    plt.gca().invert_yaxis()
    plt.show()


