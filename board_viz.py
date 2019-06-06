import matplotlib.pyplot as plt

from constants import *
from  buildings import *
import simulator
import generate_base
import generate_army

from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
from matplotlib import cm
from matplotlib.ticker import LinearLocator, FormatStrFormatter
import numpy as np

from constants import *
import os
import cv2

MAIN_BOARD = generate_base.generate_main_base()


def draw_list(lst, color='r'):
    for (x, y) in lst:
        circle = plt.Circle((y, x), 0.2, color=color)
        plt.gcf().gca().add_artist(circle)


def get_color_from_letter(letter):
    DEFAULT_COLORS = ["b", "g", "r", "c", "m", "y", "k"]
    return DEFAULT_COLORS[ord(letter) % len(DEFAULT_COLORS)]

def viz_path2(result, graph, targets):
    draw_list(result)
    draw_list(graph.barriers, color='b')
    draw_list(targets, color='g')

    plt.xlim(-MARGIN, BOARD_SIZE + MARGIN)
    plt.ylim(-MARGIN, BOARD_SIZE + MARGIN)
    plt.gca().invert_yaxis()
    plt.show()


def plot_army(army):
    for troop in army:
        x, y = troop.get_pos()
        letter = troop.get_name()[0]
        text = plt.text(y, x, letter)
        plt.gcf().gca().add_artist(text)
        circle = plt.Circle((y, x), 0.2, color=get_color_from_letter(letter))
        plt.gcf().gca().add_artist(circle)


def plot_board(game_board):
    for building in game_board.get_real_buildings():
        x, y = building.get_pos()
        name = building.get_name()[:2]

        if building.__class__ != Wall:
            text = plt.text(y, x, name)
            plt.gcf().gca().add_artist(text)

        circle = plt.Rectangle((y, x), height=0.5, width=0.5, color=get_color_from_letter(name[1]))
        plt.gcf().gca().add_artist(circle)


def plot_arrows(army, arrows):
    for troop, vec in zip(army, arrows):
        x, y = troop.get_pos()
        dx, dy = tuple(vec)
        arrow = plt.arrow(y, x, dy, dx, head_width=0.5, head_length=1, fc='k', ec='k')
        plt.gcf().gca().add_artist(arrow)


def viz_board(game_board=None, army=None, title=None, path=None, viz=False, arrows=[]):
    # Plot army and board
    if army is not None:
        plot_army(army)

    if game_board is not None:
        plot_board(game_board)

    if arrows is not None:
        plot_arrows(army, arrows)

    if title is not None:
        plt.title(title, fontsize=18, fontdict=FONTDICT)

    plt.xlim(-MARGIN, BOARD_SIZE + MARGIN)
    plt.ylim(-MARGIN, BOARD_SIZE + MARGIN)
    plt.gca().invert_yaxis()

    if path is not None:
        plt.savefig(fname=path)
    if viz:
        plt.show()
    plt.close()


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


def create_video(path):
    print(path)
    w, h, d = cv2.imread(path + os.listdir(path)[0]).shape
    out = cv2.VideoWriter(path + 'output.avi', cv2.VideoWriter_fourcc('M', 'J', 'P', 'G'), 5, (h, w))

    for file in os.listdir(path):
        filepath = path + file
        out.write(cv2.imread(filepath))
    out.release()
    cv2.destroyAllWindows()


# create_video("./optimize_viz/genetics/army_genetics/bag_r2/")