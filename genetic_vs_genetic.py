import pyeasyga.pyeasyga as ps
import random
import sys

from constants import *
import board_genetics
import army_genetics
import generate_army
import generate_base



EPOCHS = 10
INITIAL_ARMIES = 1
TH_LEVEL = 0

OPTIONS = {
    "army": army_genetics.ArmyGenetics,
    "board": board_genetics.BoardGenetics
}
armies = [generate_army.generate_army_by_level(townhall_level=TH_LEVEL)[0] for _ in range(INITIAL_ARMIES)]


# Helper functions
def create_individual(option):
    if option[0] == "army":
        return army_genetics.ArmyGenetics(level=TH_LEVEL, game_board=option[1])
    else:
        return board_genetics.BoardGenetics(level=TH_LEVEL, armies=armies)


def crossover(parent_1, parent_2):
    return parent_1, parent_2


def mutate(individual):
    individual.mutation()
    return individual


def selection(population):
    r = random.random()
    fitness_list = [element.genes.get_fitness() for element in population]
    sum_of_fitness = sum(fitness_list)
    probs = [fit / sum_of_fitness for fit in fitness_list]
    i = 0
    while r > 0:
        r -= probs[i]
    return population[i]


def fitness(individual, data):
    return individual.get_fitness()


# Main Loop

def run_gen(option, pop_size=50, gens=1000):
    genetic_alg = ps.GeneticAlgorithm(
        option,
        population_size=pop_size,
        generations=gens,
        mutation_probability=0.7,
        elitism=True,
        maximise_fitness=OPTIONS[option[0]].MAXIMIZE_FITNESS
    )
    genetic_alg.create_individual = create_individual
    genetic_alg.fitness_function = fitness
    genetic_alg.mutate_function = mutate
    genetic_alg.crossover_function = crossover
    return genetic_alg


def main():
    genetic_board = run_gen(("board", ), pop_size=20, gens=20)
    fitness_history = []

    # For each epoch, find the best current base and then find the best against it
    for i in range(EPOCHS):
        print('-'*50)
        print("Defensive:")
        best_fitness, best_individuals = genetic_board.run(first=(i==0), debug=False)
        top_fitness, top_board = best_fitness[-1], best_individuals[-1]
        fitness_history.append(top_fitness)
        print("Epoch: ", i, "Best: ", top_fitness, " Fitness History: ", fitness_history)
        print('-'*50)

        # update army
        print('-' * 50)
        print("Attackive:")
        genetic_army = run_gen(("army", top_board.get_gb()), pop_size=20, gens=20)
        best_fitness, best_individuals = genetic_army.run(debug=False)
        top_fitness, top_army = best_fitness[-1], best_individuals[-1]
        armies.append(top_army.get_army())

        # add army to every board gen individual
        for b in genetic_board.current_generation:
            b.genes.set_armies(armies)

        print('-' * 50)








if __name__ == "__main__":
    main()
