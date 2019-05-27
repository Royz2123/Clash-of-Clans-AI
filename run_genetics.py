import pyeasyga.pyeasyga as ps
import random

from constants import *
import board_genetics
import army_genetics

OPTIONS = {
    "army": army_genetics.ArmyGenetics,
    "board": army_genetics.ArmyGenetics
}


# Helper functions
def create_individual(option):
    return OPTIONS[option]()


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

def main(option="army"):
    genetic_alg = ps.GeneticAlgorithm(
        option,
        population_size=50,
        generations=200,
        mutation_probability=MUTATION_RATE,
        elitism=True,
        maximise_fitness=True
    )
    genetic_alg.create_individual = create_individual
    genetic_alg.fitness_function = fitness
    genetic_alg.mutate_function = mutate
    genetic_alg.crossover_function = crossover
    genetic_alg.run()

    genetic_alg.best_individual()[1].game_board.update_viz()


if __name__ == "__main__":
    main()
