import game_object


class Building(game_object.GameObject):
    def __init__(self, hp=1, dps=0, splash=False, level=1, pos=(0, 0),
                 attack_range=1, name="archer", size=3, gold=0, elixir=0,
                 dark=0):
        super(Building, self).__init__(pos, size)
        self._hp = hp
        self._dps = dps
        self._splash = splash
        self._level = level
        self._range = attack_range
        self._name = name
        self._gold = gold
        self._elixir = elixir
        self._dark = dark
        self._orig_hp = hp

        # resource ratios
        self._elixir_ratio = self._elixir / self._hp
        self._gold_ratio = self._gold / self._hp

    def get_size(self):
        return self._size

    def get_percent(self):
        return self._hp / self._orig_hp

    def take_damage(self, damage):
        self._hp -= damage
        self._elixir -= self._elixir_ratio * damage
        self._gold -= self._gold_ratio * damage

    def set_size(self, size):
        self._size = size

    def get_pos(self):
        return self._pos

    def get_gold(self):
        return self._gold

    def get_elixir(self):
        return self._elixir

    def get_hp(self):
        return self._hp

    def set_hp(self, hp):
        self._hp = hp

    def get_dps(self):
        return self._dps

    def set_pos(self, pos):
        self._pos = pos

    def get_range(self):
        return self._range

    def get_name(self):
        return self._name

    def get_level(self):
        return self._level

    def get_loc_list(self):
        return self._loc_list

    def is_defensive(self):
        return self._dps > 0

    def create_html(self):
        return (
            '<div class ="coc-b coc-%s b-l%d" id="b-0" '
            + ' style="left: %dpx; visibility: visible; top: %dpx;" >'
            + ' <span class ="bi" > </span>'
            + ' <span class ="radius level-1" style="opacity: 0.195;" > </span>'
            + ' <span class ="level-s level-u" > </span> '
            + ' <span class ="level-s level-n" > %d </span> '
            + ' <span class ="level-s level-d" > </span>'
            + ' <span class ="coc-drag-arr" style="" > </span > </div >'
        ) % (
            self._name,
            self._level,
            self._pos[1] * 20,
            self._pos[0] * 20,
            self._level,
        )

    def in_attack_range(self, other):
        return self.in_range_l2(other, self._range)

    def attack(self, army):
        closest_troop = min([(troop, self.distance_l2(troop)) for troop in army], key=lambda x: x[1])[0]

        if self.in_attack_range(closest_troop):
            # single target
            if not self._splash:
                closest_troop.set_hp(closest_troop.get_hp() - self._dps)
                # destroy troop if dead
                if not closest_troop.is_alive():
                    army.remove(closest_troop)
            # splash damage
            else:
                for troop in army:
                    # for now set all splash ranges to 1
                    if troop.distance_l2(closest_troop) < 1:
                        troop.set_hp(troop.get_hp() - self._dps)
                        # destroy troop if dead
                        if not troop.is_alive():
                            army.remove(troop)
        return army


class Cannon(Building):
    HPS = [0, 400, 450, 500, 550, 590, 610, 630, 660, 690, 750, 900, 1080]
    DPS = [0, 9, 11, 15, 19, 25, 31, 40, 48, 56, 65, 75, 86, 86]

    def __init__(self, pos, level=7):
        super(Cannon, self).__init__(
            pos=pos,
            name="cannon",
            hp=Cannon.HPS[level],
            dps=Cannon.DPS[level],
            level=level,
            attack_range=10
        )


class ArcherTower(Building):
    HPS = [0, 400, 450, 500, 550, 590, 610, 630, 660, 690, 750, 900, 1080]
    DPS = [0, 11, 15, 19, 25, 30, 35, 42, 48, 56, 65, 75, 86, 98]

    def __init__(self, pos, level=7):
        super(ArcherTower, self).__init__(
            pos=pos,
            name="archer",
            hp=ArcherTower.HPS[level],
            dps=ArcherTower.DPS[level],
            level=level,
            attack_range=11
        )


class TownHall(Building):
    HPS = [0, 1500, 1600, 1850, 2100, 2400, 2800, 3200, 3900, 4600, 5500, 6800,
           0, 0]

    def __init__(self, pos, level=3):
        super(TownHall, self).__init__(
            pos=pos,
            name="townhall",
            hp=TownHall.HPS[level],
            dps=0,
            level=level,
            size=4
        )


class Wall(Building):
    HPS = [0, 300, 500, 700, 900, 1400, 2e3, 2500, 3e3, 4e3, 5500, 7e3, 0, 0]

    def __init__(self, pos, level=7):
        super(Wall, self).__init__(
            pos=pos,
            name="wall",
            hp=Wall.HPS[level],
            dps=0,
            level=level,
            size=1
        )

    def create_html(self):
        return (
            '<div id="wall-39-17" class="wall lvl%d w3" '
            + 'style="left: %dpx; top: %dpx; display: block;"></div>\n'
        ) % (
           self._level,
           self._pos[1] * 20,
           self._pos[0] * 20,
        )


class Mortar(Building):
    HPS = [0, 400, 450, 500, 550, 590, 610, 640, 0, 0, 0, 0, 0, 0]
    DPS = [0, 4, 5, 6, 7, 8, 9, 11, 13]

    def __init__(self, pos, level=7):
        super(Mortar, self).__init__(
            pos=pos,
            name="mortar",
            hp=Mortar.HPS[level],
            dps=Mortar.DPS[level],
            level=level,
            attack_range=12
        )


class Empty(Building):
    def __init__(self, size=0, pos=(0, 0), level=0):
        super(Empty, self).__init__(size=size, pos=pos)


class ElixirStorage(Building):
    HPS = [0, 400, 600, 800, 1e3, 1200, 1500, 1600, 1700, 1800, 1900, 2100,
           2500, 0]

    RESOURCES = [0, 1500, 3000, 6000, 12000, 25000, 45000, 100000, 225000,
                 450000, 850000, 1750000, 2000000, 2500000]

    def __init__(self, pos, level=4):
        super(ElixirStorage, self).__init__(
            pos=pos,
            name="elixerstorage",
            hp=ElixirStorage.HPS[level],
            elixir=ElixirStorage.RESOURCES[level],
            level=level,
        )


class GoldStorage(Building):
    HPS = [0, 400, 600, 800, 1e3, 1200, 1500, 1600, 1700, 1800, 1900, 2100,
           2500, 0]

    RESOURCES = [0, 1500, 3000, 6000, 12000, 25000, 45000, 100000, 225000,
                 450000, 850000, 1750000, 2000000, 2500000]

    def __init__(self, pos, level=4):
        super(GoldStorage, self).__init__(
            pos=pos,
            name="goldstorage",
            hp=GoldStorage.HPS[level],
            gold=GoldStorage.RESOURCES[level],
            level=level,
        )


class GoldCollector(Building):
    HPS = [0, 400, 450, 500, 550, 590, 610, 630, 660, 680, 710, 750, 0, 0]

    RESOURCES = [0,500,1000,1500,2500,10000,20000,30000,50000,75000,100000,150000,200000,250000]


    def __init__(self, pos, level=4):
        super(GoldCollector, self).__init__(
            pos=pos,
            name="gold",
            gold=GoldCollector.RESOURCES[level],
            hp=GoldCollector.HPS[level],
            level=level,
        )


class ElixirCollector(Building):
    HPS = [0, 400, 450, 500, 550, 590, 610, 630, 660, 680, 710, 750, 0, 0]

    RESOURCES = [0,500,1000,1500,2500,10000,20000,30000,50000,75000,100000,150000,200000,250000]

    def __init__(self, pos, level=4):
        super(ElixirCollector, self).__init__(
            pos=pos,
            name="elixer",
            hp=ElixirCollector.HPS[level],
            elixir=ElixirCollector.RESOURCES[level],
            level=level,
        )


class Barracks(Building):
    HPS = [0, 250, 270, 280, 290, 310, 320, 340, 350, 390, 420, 0, 0, 0]

    def __init__(self, pos, level=4):
        super(Barracks, self).__init__(
            pos=pos,
            name="barracks",
            hp=Barracks.HPS[level],
            level=level,
        )


class ClanCastle(Building):
    HPS = [0, 1e3, 1400, 2e3, 2600, 3e3, 0, 0, 0, 0, 0, 0, 0, 0]

    def __init__(self, pos, level=4):
        super(ClanCastle, self).__init__(
            pos=pos,
            name="castle",
            hp=ClanCastle.HPS[level],
            level=level,
        )


class ArmyCamps(Building):
    HPS = [0, 400, 500, 600, 700, 800, 1e3, 1200, 1400, 0, 0, 0, 0, 0]

    def __init__(self, pos, level=4):
        super(ArmyCamps, self).__init__(
            pos=pos,
            name="army",
            hp=ArmyCamps.HPS[level],
            level=level,
            size=5
        )


class Labratory(Building):
    HPS = [0, 500, 550, 600, 650, 700, 750, 830, 950, 1070, 0, 0, 0, 0]

    def __init__(self, pos, level=4):
        super(Labratory, self).__init__(
            pos=pos,
            name="research",
            hp=Labratory.HPS[level],
            level=level,
            size=4
        )


class Builder(Building):
    HPS = [0, 250, 250, 250, 250, 250, 0, 0, 0, 0, 0, 0, 0, 0]

    def __init__(self, pos, level=4):
        super(Builder, self).__init__(
            pos=pos,
            name="builder",
            hp=Builder.HPS[level],
            level=level,
            size=2
        )
