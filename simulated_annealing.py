from simanneal import Annealer


from scipy import optimize
import numpy as np

import board
import generate_base
import generate_army
import simulator
import util
import board_viz
import random
from constants import *


MAIN_BOARD = board.GameBoard(generate_base.generate_main_base())


def optimize_function(z, *params):
    # create army
    pairs = util.pairs_from_list(z)
    army = generate_army.generate_army_from_row(z)

    # check if legal army
    if not all([util.in_margins(pair) for pair in pairs]):
        return np.inf
    sim = simulator.Simulator(MAIN_BOARD)
    stats = sim.run(army, debug=False)
    print(stats["percent"])
    return 1 - stats["percent"]


# generate first configuration
army0 = generate_army.generate_random_army()[0]
pairs0 = [t.get_pos() for t in army0]
x0 = util.list_from_pairs(pairs0)

# run simulated annealing
ret = optimize.basinhopping(optimize_function, x0, disp=True)
print("global minimum: x = %.4f, f(x0) = %.4f" % (ret.x, ret.fun))
army = generate_army.generate_army_from_row(ret.x)
board_viz.viz_board(viz=True, army=army, game_board=MAIN_BOARD)



class OptimalArmy(Annealer):
    """Test annealer with a travelling salesman problem."""
    MAIN_BOARD = board.GameBoard(generate_base.generate_base_by_level(2))
    SIMULATOR = simulator.Simulator(MAIN_BOARD)

    def move(self):
        """Moves a single troop to one of the possible directions"""
        """Maybe add change troop structure?"""
        STEP_SIZE = 10

        troop = self.state[random.randint(0, len(self.state) - 1)]
        x, y = troop.get_pos()

        # move troop by one step
        while True:
            dx, dy = random.randint(-STEP_SIZE, STEP_SIZE), random.randint(-STEP_SIZE, STEP_SIZE)

            if util.in_margins((x + dx, y + dy)):
                troop.set_pos((x + dx, y + dy))
                break

    def energy(self):
        """Calculates the percent damage"""
        un_damage = 1 - OptimalArmy.SIMULATOR.run(self.state)["percent"]
        print(un_damage)
        return un_damage


initial_state = generate_army.generate_army_by_level(2)
tsp = OptimalArmy(initial_state)
tsp.steps = 10000
print(tsp.anneal())
