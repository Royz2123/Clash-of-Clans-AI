class GameBoard(object):

    BOARD_SIZE = 20
    BUILDING_DICT = {

    }


    def __init__(self):
        self._board = []
        for i in range(GameBoard.BOARD_SIZE):
            self._board.append([0] * GameBoard.BOARD_SIZE)
    # list of tuples that are the locations of the empty cells on the board
    def get_empty_positions(self):
        return 0
    # list of tuples that are the top-left corner position 
    # of any block of 3x3 which is empty
    def get_empty_buildings(self):
        return 0
    # list of tuples that are the locations of all the walls on the board
    def get_walls_positions(self):
        return 0

    # list of tuples that are the top-left corner position 
    # of all the buildings on the board
    def get_buildings_positions(self):
        return 0

    def get_board(self):
        return self._board

    def run(self, army):
        return 0
