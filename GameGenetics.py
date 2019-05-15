import GameBoard
from random import random, choice


class GameGenetics:
    def __init__(self, board=None):
        self.game_board = GameBoard(board)

    def fitness(self):
        outcome=self.game_board.run()
        percent=outcome[0]
        elix=outcome[1]
        gold=outcome[2]
        dark=outcome[3]
        starts=outcome[4]
        return percent+elix/7500+gold/7500+dark/750+starts*35

    def switch_buildings(self,mutationRate):
        board = self.game_board.get_buildings_positions()
        for i in range(len(board)):
            for j in range(i, len(board)):
                if (random() < mutationRate):
                    tmp = board[i]
                    board[i] = board[j]
                    board[j] = tmp
        return board

    def move_buildings_to_empty(self,mutationRate):
        board= self.game_board.get_buildings_positions()
        emptys=self.game_board.get_emptys_buildings()
        for i in range(len(board)):
            if (random()<mutationRate):
                board[i]=choice(emptys)
        return board

    def move_walls(self,mutationRate):
        board=self.game_board.get_walls()
        emptys=self.game_board.get_emptys_positions()
        for i in range(len(board)):
            if (random()<mutationRate):
                board[i]=choice(emptys)
        return board

    def mutation(self,MR_buildings_switch,MR_buildings_empty,MR_walls):
        self.switch_buildings(MR_buildings_switch)
        self.move_buildings_to_empty(MR_buildings_empty)
        self.move_walls(MR_walls)

    def get_vector(self):
        return lst_2D_2_1D(self.game_board.get_board())


def lst_1D_to_2D(l,n):
    return [l[i:i + n] for i in range(0, len(l), n)]

def lst_2D_2_1D(sqr):
    """
    This function takes 2D array and transforms it to 1D array
    :param sqr: the 2D array that should be changed
    :return: the 1D transformed array
    """
    if type(sqr[0])==int:
        return sqr
    l=[]
    for i in range(len(sqr)):
        for j in range(len(sqr[i])):
            l.append(sqr[i][j])
    return l



