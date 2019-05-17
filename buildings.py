

class Building(object):
    def __init__(self, hp=1, dps=1, splash=False, level=1, pos=(0, 0), radius_level=0, name="archer", size=3, gold=0, elixir=0, dark=0):
        self._hp = hp
        self._dps = dps
        self._splash = splash
        self._level = level
        self._pos = pos
        self._radius_level = radius_level
        self._name = name
        self._size = size
        self._gold = gold
        self._elixir = elixir
        self._dark = dark

        # create loc list
        self._loc_list = []
        for i in range(self._size):
            for j in range(self._size):
                self._loc_list.append((self._pos[0] + i, self._pos[1] + j))

    def get_size(self):
        return self._size

    def set_size(self,size):
        self._size=size

    def get_pos(self):
        return self._pos

    def get_hp(self):
        return self._hp

    def set_hp(self, hp):
        self._hp = hp

    def distance(self, other):
        return abs(self._pos[0] - other.get_pos()[0]) + abs(self._pos[1] - other.get_pos()[1])

    def set_pos(self,pos):
        self._pos=pos

    def get_name(self):
        return self._name

    def get_loc_list(self):
        return self._loc_list

    def is_defensive(self):
        return self._dps > 0

    def overlap(self, other):
        return len(set(self.get_loc_list()) & set(other.get_loc_list()))

    def create_html(self):
        return (
            '<div class ="coc-b coc-%s b-l%d" id="b-0" '
            + ' style="left: %dpx; visibility: visible; top: %dpx;" >'
            + ' <span class ="bi" > </span>'
            + ' <span class ="radius level-%d" style="opacity: 0.195;" > </span>'
            + ' <span class ="level-s level-u" > </span> '
            + ' <span class ="level-s level-n" > %d </span> '
            + ' <span class ="level-s level-d" > </span>'
            + ' <span class ="coc-drag-arr" style="" > </span > </div >'
        ) % (
            self._name,
            self._level,
            self._pos[1] * 20,
            self._pos[0] * 20,
            self._radius_level,
            self._level,
        )


class Cannon(Building):
    HPS = [0, 400, 450, 500, 550, 590, 610, 630, 660, 690, 750, 900, 1080]
    DPS = [0, 9, 11, 15, 19, 25, 31, 40, 48, 56, 65, 75, 86, 86]

    def __init__(self, pos, level=7):
        super(Cannon, self).__init__(
            pos=pos,
            name="cannon",
            hp=Cannon.HPS[level],
            dps=Cannon.DPS[level],
            level=level,
            radius_level=level
        )


class Archer(Building):
    HPS = [0, 400, 450, 500, 550, 590, 610, 630, 660, 690, 750, 900, 1080]
    DPS = [0, 11, 15, 19, 25, 30, 35, 42, 48, 56, 65, 75, 86, 98]

    def __init__(self, pos, level=7):
        super(Archer, self).__init__(
            pos=pos,
            name="archer",
            hp=Archer.HPS[level],
            dps=Archer.DPS[level],
            level=level,
            radius_level=level
        )


class TownHall(Building):
    HPS = [0, 1500, 1600, 1850, 2100, 2400, 2800, 3200, 3900, 4600, 5500, 6800, 0, 0]

    def __init__(self, pos, level=7):
        super(TownHall, self).__init__(
            pos=pos,
            name="townhall",
            hp=TownHall.HPS[level],
            dps=0,
            level=level,
            radius_level=level,
            size=4
        )

class Wall(Building):
    HPS = [0, 300, 500, 700, 900, 1400, 2e3, 2500, 3e3, 4e3, 5500, 7e3, 0, 0]

    def __init__(self, pos, level=7):
        super(Wall, self).__init__(
            pos=pos,
            name="wall",
            hp=Wall.HPS[level],
            dps=0,
            level=level,
            size=1
        )

    def create_html(self):
        return (
            '<div id="wall-39-17" class="wall lvl%d w3" '
            + 'style="left: %dpx; top: %dpx; display: block;"></div>\n'
        ) % (
           self._level,
           self._pos[1] * 20,
           self._pos[0] * 20,
        )


class Mortar(Building):
    HPS = [0, 400, 450, 500, 550, 590, 610, 640, 0, 0, 0, 0, 0, 0]
    DPS = [0, 4, 5, 6, 7, 8, 9, 11, 13]

    def __init__(self, pos, level=7):
        super(Mortar, self).__init__(
            pos=pos,
            name="mortar",
            hp=Mortar.HPS[level],
            dps=Mortar.DPS[level],
            level=level,
            radius_level=level
        )

class Empty(Building):

    def __init__(self,size_,pos):
        super(Empty, self).__init__(size=size_)
