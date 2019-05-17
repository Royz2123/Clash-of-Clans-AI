
class Troop(object):

    def __init__(self, hp=1, dps = 1, td=False, pos=(0,0)):
        self._hp = hp
        self._dps = dps
        self._target_defense = td
        self._pos = pos
        self._attacking = None

    def is_alive(self):
        self._hp > 0

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

    def distance(self, other):
        return abs(self._pos[0] - other.get_pos()[0]) + abs(self._pos[1] - other.get_pos()[1])

    def get_targets(self, board):
        targets = []
        if self._target_defense:
            targets = board.get_defensive_buildings()
            if not len(targets):
                targets = board.get_buildings()
        else:
            targets = board.get_buildings()
        return targets


