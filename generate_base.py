import board
import random
from buildings import *
from constants import *

import base_from_html


def generate_random_base(quants=QUANTS, levels=LEVELS):
    buildings = []

    for i in range(1, len(quants)):
        if i != board.BUILDINGS_MAP[Wall]:
            for j in range(quants[i]):
                while True:
                    size = board.OBJECTS[i].get_size()
                    x, y = tuple(random.sample(range(0, BOARD_SIZE - size - 1), 2))
                    curr_obj = board.create_obj_from_index(i)(pos=(x, y), level=levels[i])
                    if not any([curr_obj.overlap(other) for other in buildings]):
                        break
                buildings.append(curr_obj)

    # Only walls, put in later
    i = board.BUILDINGS_MAP[Wall]
    for j in range(quants[i]):
        while True:
            size = board.OBJECTS[i].get_size()
            x, y = tuple(random.sample(range(0, BOARD_SIZE - size - 1), 2))
            curr_obj = board.create_obj_from_index(i)(pos=(x, y), level=levels[i])
            if not any([curr_obj.overlap(other) for other in buildings]):
                break
        buildings.append(curr_obj)

    return buildings


"""
def generate_random_base():
    buildings = []
    for i in range(1, len(QUANTS)):
        if i == 4:
            for x in range(BOARD_SIZE):
                for y in range(BOARD_SIZE):
                    if x == 0 or y == 0 or x == BOARD_SIZE -1 or y == BOARD_SIZE - 1:
                        curr_obj = board.create_obj_from_index(i)(pos=(x, y), level=LEVELS[i])
                        buildings.append(curr_obj)

        else:
            for j in range(QUANTS[i]):
                while True:
                    size = board.create_obj_from_index(i)(pos=(0, 0), level=1).get_size()
                    x, y = tuple(random.sample(range(1, BOARD_SIZE - size), 2))
                    curr_obj = board.create_obj_from_index(i)(pos=(x, y), level=LEVELS[i])
                    if not any([curr_obj.overlap(other) for other in buildings]):
                        break
                buildings.append(curr_obj)
    return buildings


"""



def generate_random_base_3():
    QUANTS = [0, 2, 1, 1, 50, 1]
    LEVELS = [0, 3, 2, 3, 3, 1]
    return generate_random_base(QUANTS, LEVELS)


def generate_base_by_level(level=4, subindex=0):
    if level == 2:
        return base_from_html.html_to_game_board(html_file="bases/base_2_th2.html")
    else:
        return generate_main_base()


"""
MAIN BASE WE ARE TRAINING ON
"""
def generate_main_base():
    armys=[]
    elixirs=[]
    walls=[]
    barrackses=[]
    archers=[]
    elixir_storages=[]
    gold_storages=[]
    cannons=[]
    golds=[]
    mortars=[]
    builders=[]
    armys.append(ArmyCamps(pos=(0,4),level=3))
    armys.append(ArmyCamps(pos=(0,10),level=3))
    elixirs.append(ElixirCollector(pos=(3,16),level=6))
    elixirs.append(ElixirCollector(pos=(12,16),level=6))
    for i in range(5,16):
        walls.append(Wall(pos=(5,i),level=4))
    barrackses.append(Barracks(pos=(6,2),level=5))
    barrackses.append(Barracks(pos=(7,16),level=5))
    archers.append(ArcherTower(pos=(6,6),level=3))
    elixir_storages.append(ElixirStorage(pos=(6,9),level=6))
    cannons.append(Cannon(pos=(6,12),level=4))
    for i in range(3,16):
        walls.append(Wall(pos=(9,i),level=4))
    for i in range(6,9):
        walls.append(Wall(pos=(i,5),level=4))
        walls.append(Wall(pos=(i,15),level=4))
    golds.append(GoldCollector(pos=(11,0),level=6))
    for i in range(10,14):
        walls.append(Wall(pos=(i,3),level=4))
        walls.append(Wall(pos=(i,11),level=4))
    for i in range(10,16):
        walls.append(Wall(pos=(i,15),level=4))
    gold_storages.append(GoldStorage(pos=(11,4),level=6))
    TH=TownHall(pos=(10,7),level=4)
    mortars.append(Mortar(pos=(10,12),level=1))
    elixir_storages.append(ElixirStorage(pos=(13,12),level=6))
    builders.append(Builder(pos=(14,0),level=2))
    for i in range(3,12):
        walls.append(Wall(pos=(14,i),level=4))
    golds.append(GoldCollector(pos=(14,19),level=6))
    barrackses.append(Barracks(pos=(15,2),level=5))
    for i in range(15,18):
        walls.append(Wall(pos=(i,5),level=4))
    walls.append(Wall(pos=(17,12),level=4))
    for i in range(5,13):
        walls.append(Wall(pos=(18,i),level=4))
    archers.append(ArcherTower(pos=(15,6),level=3))
    gold_storages.append(GoldStorage(pos=(15,9),level=6))
    cannons.append(Cannon(pos=(17,13),level=4))
    Lab=Labratory(pos=(17,17),level=1)
    golds.append(GoldCollector(pos=(19,2),level=6))
    elixirs.append(ElixirStorage(pos=(19,5),level=6))
    Castle=ClanCastle(pos=(19,10),level=1)
    walls.append(Wall(pos=(20,15),level=4))
    for i in range(17,21):
        walls.append(Wall(pos=(i, 16), level=4))
    for i in range(12,17):
        walls.append(Wall(pos=(16, i), level=4))
    elixirs.append(ElixirCollector(pos=(21,13),level=6))
    golds.append(GoldCollector(pos=(21,16),level=6))
    buildings = walls + cannons + archers + armys + gold_storages + elixir_storages + barrackses + \
                mortars + builders + golds + elixirs
    buildings.append(TH)
    buildings.append(Lab)
    buildings.append(Castle)

    for b in buildings:
        x, y = b.get_pos()
        b.set_pos((y, x))

    board.GameBoard(buildings).is_legal()

    return buildings


