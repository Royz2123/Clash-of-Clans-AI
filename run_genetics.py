import pyeasyga.pyeasyga as ps
import random
import sys

from constants import *
import board_genetics
import army_genetics
import generate_army


OPTIONS = {
    "army": army_genetics.ArmyGenetics,
    "board": board_genetics.BoardGenetics
}
STATIC_ARMY = generate_army.generate_army_by_level(townhall_level=4)[0]


# Helper functions
def create_individual(option):
    if option == "army":
        return army_genetics.ArmyGenetics()
    else:
        return board_genetics.BoardGenetics(army=STATIC_ARMY)


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
        population_size=20,
        generations=500,
        mutation_probability=MUTATION_RATE,
        elitism=True,
        maximise_fitness=OPTIONS[option].MAXIMIZE_FITNESS
    )
    genetic_alg.create_individual = create_individual
    genetic_alg.fitness_function = fitness
    genetic_alg.mutate_function = mutate
    genetic_alg.crossover_function = crossover
    best_fitness, best_individuals = genetic_alg.run()


if __name__ == "__main__":
    option = "army"
    if len(sys.argv) >= 2:
        option = sys.argv[1]


    print("Maximize Fitness: ", OPTIONS[option].MAXIMIZE_FITNESS)
    print("Running Genetics for ", option)
    main(option)
