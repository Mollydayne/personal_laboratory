#!/usr/bin/env python3

from abc import ABC

class Animal(ABC):
    def __init__(self, number_of_legs, animal_type):
        self.number_of_legs = number_of_legs
        self.animal_type = animal_type

class Dog(Animal):
    def speak(self):
        print("Wooooof")

class Cat(Animal):
    def speak(self):
        print("mrouuuw")

class Owl(Animal):
    def speak(self):
        print("ouuuuuuuuuuuh")

class Fish(Animal):
    def speak(self):
        print("bloup bloup")


class Zoo:
    def __init__(self, name):
        self.name = name
        self.animals = []
        self.employees = [] 
        
def display_animals(self):
        print(f" Welcome to the Molly's zoo, this is our beutifull animals {self.name} :")
        for animal in self.animals:
            print(f"- {animal.animal_type()} says :", end=" ")
            animal.speak()

def add_animal(self, animal):
        if isinstance(animal, Animal):
            self.animals.append(animal)
        else:
            print("What u tryin to add is not an animal we know in here..")

class Employee(ABC):
    total_number_of_employees = 42

    def __init__(self, first_name, last_name, age):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        Employee.total_number_of_employees += 1

    @classmethod
    def total_number_of_employee(cls):
        return cls.total_number_of_employees

    def is_adult(self):
        return self.age >= 18

    @staticmethod
    def introduce():
            print("Je suis un noob")
    
    def add_employee(self, employee):
        pass

# Testinnnnnnnn
if __name__ == "__main__":
    d = Dog(4, "mammal")
    c = Cat(4, "mammal")
    o = Owl(2, "bird")
    f = Fish(0, "fish")

    print("Dogs says :", end=" ")
    d.speak()

    print("Cat says :", end=" ")
    c.speak()

    print("Lovely owl says :", end=" ")
    o.speak()
    
    print("Fishy fish  :", end=" ")
    f.speak()

    e1 = Employee("Molly", "Pastek", 17)
    e2 = Employee("Alex", "Crepes", 52)

    print(f"{e1.first_name} is an adult ? {e1.is_adult()}")
    print(f"{e2.first_name} is an adult ? {e2.is_adult()}")

    print("Nombre total d'employés :", Employee.total_number_of_employee())
