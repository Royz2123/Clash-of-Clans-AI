from buildings import *
import numpy as np

# dictionary for our buildings
# Has to be from 1 to n
BUILDINGS_MAP = {
    Cannon: 1,
    ArcherTower: 2,
    TownHall: 3,
    Wall: 4,
    Mortar: 5,
    Empty: 6
}


def create_obj_from_index(search_index):
    for obj, index in BUILDINGS_MAP.items():
        if index == search_index:
            return obj
    return None

class GameBoard(object):
    BIGGEST_BUILDING_SIZE = len(BUILDINGS_MAP)
    BOARD_SIZE = 50
    HTML_FILE = "./visualize/index.html"
    EYECATCHER_START = "<!--EYECATCHERSTART-->"
    EYECATCHER_END = "<!--EYECATCHEREND-->"

    DEFAULT_BASE = [Cannon((1, 0))]

    def __init__(self, buildings=[Mortar((0, 0))]):
        self._buildings = buildings
        self.add_emptys()


    def add_emptys(self):
        board=np.zeros((GameBoard.BOARD_SIZE,GameBoard.BOARD_SIZE))
        for building in self._buildings:
            for x, y in building.get_loc_list():
                board[x][y] = BUILDINGS_MAP[building.__class__]

        for size in range(1,GameBoard.BIGGEST_BUILDING_SIZE+1):
            for i in range(GameBoard.BOARD_SIZE-size):
                for j in range(GameBoard.BOARD_SIZE-size):
                    if (board[i:i+size][j:j+size]==BUILDINGS_MAP.get(Wall)).all():
                        self._buildings.append(Empty(size_=size,pos_=(i,j)))

    def get_defensive_buildings(self):
        return [b for b in self._buildings if b.is_defensive()]

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

    def set_buildings(self, board):
        self._buildings = board

    def get_buildings(self):
        return self._buildings

    def get_non_wall_buildings(self):
        return [b for b in self._buildings if b.__class__ != Wall]


    def get_walls(self):
        return [b for b in self._buildings if b.__class__ == Wall]

    def get_building_from_pos(self, pos):
        buildings = [b for b in self._buildings if pos == b.get_pos()]
        if len(buildings):
            return buildings[0]
        else:
            print("Building doesnt exist")
            return None

    def destroy_building(self, building):
        self._buildings.remove(building)

    def run(self, army):
        return 0


if __name__ == "__main__":
    board = GameBoard()
    board.update_viz()
