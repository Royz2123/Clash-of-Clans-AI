from buildings import *
BOARD_SIZE = 20
MARGIN = 10
QUANTS=[2,1,1,1,1]
LEVELS=[ 3, 2, 3, 3, 1]

# dictionary for our buildings
# Has to be from 1 to n
BUILDINGS_MAP = {
    Cannon: 1,
    ArcherTower: 2,
    TownHall: 3,
    Wall: 4,
    Mortar: 5,
    Empty: 6
}