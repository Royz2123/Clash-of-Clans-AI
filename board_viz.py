import matplotlib.pyplot as plt

from constants import *


def draw_list(lst, color='r'):
    for (x, y) in lst:
        circle = plt.Circle((y, x), 0.2, color=color)
        plt.gcf().gca().add_artist(circle)

def viz_path(result, graph, targets):
    draw_list(result)
    draw_list(result, color='b')
    draw_list(result, color='g')

    plt.xlim(-MARGIN, BOARD_SIZE + MARGIN)
    plt.ylim(-MARGIN, BOARD_SIZE + MARGIN)
    plt.gca().invert_yaxis()
    plt.show()


def viz_board(game_board, army):
    buildings = [b.get_pos() for b in game_board.get_buildings()]
    army = [b.get_pos() for b in army]

    draw_list(buildings, color='y')
    draw_list(army, color='c')

    plt.xlim(-MARGIN, BOARD_SIZE + MARGIN)
    plt.ylim(-MARGIN, BOARD_SIZE + MARGIN)
    plt.gca().invert_yaxis()
    plt.show()




