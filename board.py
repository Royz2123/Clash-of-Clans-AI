import buildings
import army

class GameBoard(object):

    BOARD_SIZE = 20
    BUILDING_DICT = {
        0 :
    }


    def __init__(self):
        self._board = []
        for i in range(GameBoard.BOARD_SIZE):
            self._board.append([0] * GameBoard.BOARD_SIZE)

    def get_board(self):
        return self._board

    def run(self, army):
        return 0
