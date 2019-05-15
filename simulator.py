import board

class Simulator(object):

    DELTA_TIME = 0.1

    def __init__(self, game_board):
        self._board = game_board.get_board()
        self._buildings = game_board.get_buildings()

    def run(self, army):
        pass

    def run_troop(self):
        pass