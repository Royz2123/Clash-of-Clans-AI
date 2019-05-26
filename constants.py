import generate_base

MAIN_BOARD = generate_base.generate_main_base()

BOARD_SIZE = 28
MARGIN = 20
QUANTS = [0, 2, 2, 1, 1, 1, 2, 2, 2, 4, 4, 3, 1, 2, 75]
LEVELS = [0, 4, 3, 4, 1, 1, 3, 6, 6, 6, 6, 5, 1, 3, 4]
SMALL_NUMBER = 0.000001
MUTATION_RATE = 0.9
MUTATION_CHANGE = 0.1

DIRECTIONS = [(1, 0), (-1, 0), (0, 1), (0, -1), (1, 1), (-1, -1), (-1, 1), (1, -1)]

