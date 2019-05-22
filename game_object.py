class GameObject(object):
    def __init__(self, pos=(0,0), size=3):
        self._pos = pos
        self._size = size

        # create loc list
        self._loc_list = []
        for i in range(self._size):
            for j in range(self._size):
                self._loc_list.append((self._pos[0] + i, self._pos[1] + j))

    def overlap_list(self,loc_list):
        return len(set(self._loc_list) & set(loc_list))

    def overlap(self, other):
        return len(set(self._loc_list) & set(other.get_loc_list()))

    def distance_l2(self, other):
        return (self._pos[0] - other.get_pos()[0])**2 + (self._pos[1] - other.get_pos()[1])**2

    def in_range_l2(self, other, dist):
        return self.distance_l2(other) <= dist**2

    def distance_l1(self, other):
        return abs(self._pos[0] - other.get_pos()[0]) + abs(self._pos[1] - other.get_pos()[1])
