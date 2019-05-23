from pyeasyga import pyeasyga
from GameGenetics import *


seed_data = GameGenetics()
print("seed")
# initialise the GA
ga = pyeasyga.GeneticAlgorithm(seed_data,
                               population_size=300,
                               generations=200,
                               mutation_probability=MUTATION_RATE,
                               elitism=True,
                               maximise_fitness=True)


# define and set function to create a candidate solution representation
def create_individual(data):
    return data.create_individual()


ga.create_individual = create_individual


# define and set the GA's crossover operation
def crossover(parent_1, parent_2):
    return parent_1,parent_2

ga.crossover_function = crossover

# define and set the GA's mutation operation
def mutate(individual):
    individual.mutation(MUTATION_CHANGE)
    return individual

ga.mutate_function = mutate


# define and set the GA's selection operation
def selection(population):
    r = random.random()
    fitness_list = [element.genes.get_fitness() for element in population]
    sum_of_fitness = sum(fitness_list)
    probs = [fit / sum_of_fitness for fit in fitness_list]
    i = 0
    while r > 0:
        r -= probs[i]
    return population[i]


ga.selection_function = selection


# define a fitness function
def fitness(individual, data):
    return individual.get_fitness()


ga.fitness_function = fitness  # set the GA's fitness function


ga.run()  # run the GA


ga.best_individual()[1].game_board.update_viz()

