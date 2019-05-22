import board
import simulator
import generate_base
import generate_army
import board_viz


def main():
    gb = board.GameBoard(generate_base.generate_surrounded_base_3())
    army, titles = generate_army.generate_random_army()

    # visualize
    board_viz.viz_board(gb, army)
    gb.update_viz()

    # create simulator
    sim = simulator.Simulator(gb)
    stats = sim.run(army)
    print(stats)


if __name__ == "__main__":
    main()