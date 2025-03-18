import random

class Die:
    def __init__(self, sides=6):
        self.sides = sides
    
    def roll(self):
        return random.randint(1, self.sides)

my_die = Die()

for _ in range(10):
    print(my_die.roll())