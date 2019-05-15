import re

from buildings import *


BUILDINGS_MAP = {
    Cannon: 1,
    Archer: 2,
    TownHall: 3,
    Wall: 4,
    Mortar: 5,

}

def get_obj_from_index(search_index):
    for obj, index in BUILDINGS_MAP.items():  # for name, age in dictionary.iteritems():  (for Python 2.x)
        if index == search_index:
            return obj
    return None


class GameBoard(object):
    BOARD_SIZE = 50
    HTML_FILE = "./visualize/index.html"
    EYECATCHER_START = "<!--EYECATCHERSTART-->"
    EYECATCHER_END = "<!--EYECATCHEREND-->"

    DEFAULT_BASE = [Cannon((1, 0))]

    def __init__(self, buildings=[Mortar((0, 0))]):
        self._board = []
        for i in range(GameBoard.BOARD_SIZE):
            self._board.append([0] * GameBoard.BOARD_SIZE)

        self._buildings = buildings

        # update board with buildings
        for building in self._buildings:
            x, y = building.get_pos()
            for i in range(building.get_size()):
                for j in range(building.get_size()):
                    self._board[x + i][y + j] = BUILDINGS_MAP[building.__class__]

        print(self._board)

    def html_repr(self):
        html_repr = ""
        for building in self._buildings:
            html_repr += "%s\n" % building.create_html()
        return html_repr

    def update_viz(self):
        new_content = ""
        with open(GameBoard.HTML_FILE, "r") as f:
            content = f.read()
            before, next = content.split(GameBoard.EYECATCHER_START)
            mid, after = next.split(GameBoard.EYECATCHER_END)

            new_content += "%s%s\n%s\n\t\t\t\t%s\n%s" % (
                before,
                GameBoard.EYECATCHER_START,
                self.html_repr(),
                GameBoard.EYECATCHER_END,
                after
            )

        with open(GameBoard.HTML_FILE, "w") as f:
            f.write(new_content)
        return

    def set_buildings_positions(self,board):
        self.buildings_positions=board

    def set_board(self,board):
        self._board=board

    #TODO:
    # can be optimized by returning the changed walls from GameBoard.move_walls
    def set_walls(self,walls):
        # adding walls
        for index in walls:
            self._board[index[0]][index[1]]=GameBoard.WALLS
        # removing not walls
        for i in range(GameBoard.BOARD_SIZE):
            for j in range(GameBoard.BOARD_SIZE):
                if self._board[i][j]==GameBoard.WALLS and (i,j) not in walls:
                    self._board[i][j]=GameBoard.EMPTY_CELL


    # list of tuples that are the locations of the empty cells on the board
    def get_empty_positions(self):
        indices=[]
        for i in range(GameBoard.BOARD_SIZE):
            for j in range(GameBoard.BOARD_SIZE):
                pass


    def get_walls_positions(self):
        return 0

    # list of tuples that are the top-left corner position
    # of any block of 3x3 which is empty
    def get_empty_buildings(self):
        return 0

    # list of tuples that are the locations of all the walls on the board
    def get_walls_positions(self):
        return 0

    # list of tuples that are the top-left corner position
    # of all the buildings on the _board
    def get_buildings_positions(self):
        return 0

    def get_board(self):
        return self._board

    def run(self, army):
        return 0



if __name__ == "__main__":
    board = GameBoard()
    board.update_viz()