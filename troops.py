import game_object


class Troop(game_object.GameObject):

    def __init__(self, hp=1, name="Troop", dps=1, size=1, td=False, pos=(0,0), level=1, range=0):
        super(Troop, self).__init__(pos, size)
        self._name = name
        self._hp = hp
        self._dps = dps
        self._target_defense = td
        self._pos = pos
        self._attacking = None
        self._level = level
        self._range = range

    def __repr__(self):
        return "Name: %s HP: %d DPS: %d" % (self._name, self._hp, self._dps)

    def is_alive(self):
        return self._hp > 0

    def set_hp(self, hp):
        self._hp = hp

    def get_hp(self):
        return self._hp

    def get_range(self):
        return self._range

    def get_attacking(self):
        return self._attacking

    def set_attacking(self, status):
        self._attacking = status

    def get_pos(self):
        return self._pos

    def set_pos(self, pos):
        self._pos = pos

    def get_dps(self):
        return self._dps

    def get_targets(self, board):
        targets = []
        if self._target_defense:
            targets = board.get_defensive_buildings()
            if not len(targets):
                targets = board.get_non_wall_buildings()
        else:
            targets = board.get_non_wall_buildings()
        return targets


class Barbarian(Troop):
    HPS = [0, 45, 54, 65, 78, 95, 110, 125]
    DPS = [0, 8, 11, 14, 18, 23, 26, 30]

    def __init__(self, pos, level=3):
        super(Barbarian, self).__init__(
            pos=pos,
            name="barbarian",
            hp=Barbarian.HPS[level],
            dps=Barbarian.DPS[level],
            level=level,
        )


class Archer(Troop):
    HPS = [0, 20, 23, 28, 33, 40, 44, 48]
    DPS = [0, 7, 9, 12, 16, 20, 22, 25]

    def __init__(self, pos, level=3):
        super(Archer, self).__init__(
            pos=pos,
            name="archer",
            hp=Archer.HPS[level],
            dps=Archer.DPS[level],
            level=level,
            range=2.5
        )


class Giant(Troop):
    HPS = [0, 300, 360, 430, 520, 670, 880, 880]
    DPS = [0, 11, 14, 19, 24, 31, 40, 40]

    def __init__(self, pos, level=3):
        super(Giant, self).__init__(
            pos=pos,
            name="giant",
            hp=Giant.HPS[level],
            dps=Giant.DPS[level],
            level=level,
            td=True
        )
