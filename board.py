class GameBoard(object):

    BOARD_SIZE = 20
    BUILDING_DICT = {

    }


    def __init__(self):
        self._board = []
        for i in range(GameBoard.BOARD_SIZE):
            self._board.append([0] * GameBoard.BOARD_SIZE)
    
    def get_empty_positions(self):
        return 0
    
    def get_empty_buildings(self):
        return 0
    
    def get_walls_positions(self):
        return 0
    
    def get_buildings_positions(self):
        return 0

    def get_board(self):
        return self._board

    def run(self, army):
        return 0
