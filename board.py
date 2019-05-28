from buildings import *
import numpy as np
from constants import *

# dictionary for our buildings
# Has to be from 0 to n
# 0 is Empty BUILDINGS_MAP[-1]=Wall
BUILDINGS_MAP = {
    Empty: 0,
    Cannon: 1,
    ArcherTower: 2,
    TownHall: 3,
    Labratory: 4,
    Mortar: 5,
    Builder: 6,
    ElixirStorage: 7,
    GoldStorage: 8,
    GoldCollector: 9,
    ElixirCollector: 10,
    Barracks: 11,
    ClanCastle: 12,
    ArmyCamps: 13,
    Wall: 14
}

BUILDINGS_MAP_NAME = {
    "empty" : Empty,
    "cannon" : Cannon,
    "archer" : ArcherTower,
    "townhall" : TownHall,
    "labratory": Labratory,
    "mortar": Mortar,
    "builder": Builder,
    "elixerstorage": ElixirStorage,
    "goldstorage": GoldStorage,
    "gold": GoldCollector,
    "elixer": ElixirCollector,
    "barracks": Barracks,
    "castle": ClanCastle,
    "army": ArmyCamps,
    "wall": Wall
}


def create_obj_from_index(search_index):
    for obj, index in BUILDINGS_MAP.items():
        if index == search_index:
            return obj
    return None


def create_obj_from_name(name):
    if name in BUILDINGS_MAP_NAME.keys():
        return BUILDINGS_MAP_NAME[name]
    return None


OBJECTS = [create_obj_from_index(i)(pos=(0, 0), level=1) for i in range(len(QUANTS))]


class GameBoard(object):
    BIGGEST_BUILDING_SIZE = 5
    HTML_FILE = "./visualize/index.html"
    EYECATCHER_START = "<!--EYECATCHERSTART-->"
    EYECATCHER_END = "<!--EYECATCHEREND-->"

    """
         This method generates random buildings permutation
         """

    DEFAULT_BASE = [Cannon((1, 0))]

    def __init__(self, buildings):
        self._buildings = buildings
        self._orig_buildings = [b for b in buildings]
        self.add_emptys()

    def calc_hp(self):
        return sum([building.get_hp() for building in self.get_non_wall_buildings()])

    def calc_gold(self):
        return sum([building.get_gold() for building in self.get_non_wall_buildings()])

    def calc_elixir(self):
        return sum([building.get_elixir() for building in self.get_non_wall_buildings()])

    def get_titles(self):
        s = []
        count = {}
        for building in self.get_non_wall_orig_buildings():
            # update building count
            if building.__class__ not in count.keys():
                count[building.__class__] = 0
            count[building.__class__] += 1

            # add to desc list
            s.append("%s_%d" % (building.get_name(), count[building.__class__]))
        return ",".join(s)

    def has_townhall(self):
        return any([b.__class__ == TownHall for b in self._buildings])

    def add_emptys(self):
        board = np.zeros((BOARD_SIZE, BOARD_SIZE))
        for building in self._buildings:
            for x, y in building.get_loc_list():
                board[x][y] = BUILDINGS_MAP[building.__class__]

        for size in range(1,GameBoard.BIGGEST_BUILDING_SIZE+1):
            for i in range(BOARD_SIZE-size):
                for j in range(BOARD_SIZE-size):
                    if (board[i:i+size,j:j+size]==BUILDINGS_MAP.get(Empty)).all():
                        self._buildings.append(Empty(size=size,pos=(i,j)))

    def get_defensive_buildings(self):
        return [b for b in self._buildings if b.is_defensive()]

    def html_repr(self):
        html_repr = ""
        for building in self.get_real_buildings():
            html_repr += "%s\n" % building.create_html()
        return html_repr

    def is_legal(self):
        for b1 in self.get_real_buildings()[:]:
            for b2 in self.get_real_buildings()[:]:
                if b1 != b2 and b1.overlap(b2):
                    print("OVERLAP! ", b1, b2)
                    if b1.__class__ == Wall and b2.__class__ == Wall:
                        self._buildings.remove(b1)
                    else:
                        return False
        return True


    def update_viz(self):
        new_content = ""
        with open(GameBoard.HTML_FILE, "r") as f:
            content = f.read()
            before, next = content.split(GameBoard.EYECATCHER_START)
            mid, after = next.split(GameBoard.EYECATCHER_END)

            new_content += "%s%s\n%s\n\t\t\t\t%s%s" % (
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

    def get_real_buildings(self):
        return [b for b in self._buildings if b.__class__ != Empty]

    def get_non_wall_buildings(self):
        return [b for b in self._buildings if b.__class__ not in [Wall, Empty]]

    def get_non_wall_orig_buildings(self):
        return [b for b in self._orig_buildings if b.__class__ not in [Wall, Empty]]

    def get_walls(self):
        return [b for b in self._buildings if b.__class__ == Wall]

    def get_building_from_pos(self, pos):
        buildings = [b for b in self._buildings if pos == b.get_pos()]
        if len(buildings):
            return buildings[0]
        else:
            return None

    def destroy_building(self, building):
        self._buildings.remove(building)


if __name__ == "__main__":
    board = GameBoard()
    board.update_viz()
