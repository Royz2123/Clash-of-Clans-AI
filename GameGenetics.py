from board import GameBoard, create_obj_from_index
from random import random, randint


class GameGenetics:
    def __init__(self, buildings=None, quants=[0, 2, 1, 1, 50, 1],
                 levels=[0, 3, 2, 3, 3, 1]):
        self.game_board = GameBoard(buildings)
        self.quants = quants
        self.levels = levels

    def create_individual(self):
        buildings = []
        for i in range(1, len(self.quants)):
            for j in range(self.quants[i]):
                while True:
                    x, y = tuple(
                        random.sample(range(0, GameBoard.BOARD_SIZE), 2))
                    curr_obj = create_obj_from_index(i)(pos=(x, y),
                                                        level=self.levels[i])
                    if not any(
                            [curr_obj.overlap(other) for other in buildings]):
                        break
                buildings.append(curr_obj)
        return GameGenetics(buildings=buildings)

    def fitness(self):
        outcome = self.game_board.run()
        percent = outcome[0]
        elix = outcome[1]
        gold = outcome[2]
        dark = outcome[3]
        starts = outcome[4]
        return percent + elix / 7500 + gold / 7500 + dark / 750 + starts * 35

    def switch_buildings(self, mutation_rate):
        buildings = self.game_board.get_buildings()
        for i in range(len(buildings)):
            if random() < mutation_rate:
                build1 = buildings[i]
                same_size = [build for build in buildings if
                             create_obj_from_index(
                                 build[2]).get_size() ==
                             create_obj_from_index(
                                 build1[2]).get_size()]
                chosen_index = randint(0, len(same_size))
                build2 = same_size[chosen_index]
                buildings[i].set_pos(build2.get_pos())
                buildings[chosen_index].set_pos(build1.get_pos())
        self.game_board.set_buildings(buildings)

    def move_buildings_to_empty(self, mutationRate):
        buildings = self.game_board.get_buildings()
        emptys = self.game_board.get_emptys()
        for i in range(len(buildings)):
            if (random() < mutationRate):
                try:
                    real_emptys = [empty for empty in emptys if
                                   emptys.get_size() == buildings[
                                       i].get_size()]
                    chosen_index = randint(0, len(real_emptys))
                    empty = real_emptys[chosen_index]
                    building = buildings[i]
                    buildings[i].set_pos(empty.get_pos())
                    emptys[chosen_index].set_pos(building.get_pos())
                except:
                    print("no empty good places")
        self.game_board.set_emptys(emptys)
        self.game_board.set_buildings(buildings)

    def mutation(self, MR_switch, MR_empty):
        self.switch_buildings(MR_switch)
        self.move_buildings_to_empty(MR_empty)

    def get_vector(self):
        return lst_2D_2_1D(self.game_board.get_board())


def lst_1D_to_2D(l, n):
    return [l[i:i + n] for i in range(0, len(l), n)]


def lst_2D_2_1D(sqr):
    """
    This function takes 2D array and transforms it to 1D array
    :param sqr: the 2D array that should be changed
    :return: the 1D transformed array
    """
    if type(sqr[0]) == int:
        return sqr
    l = []
    for i in range(len(sqr)):
        for j in range(len(sqr[i])):
            l.append(sqr[i][j])
    return l
