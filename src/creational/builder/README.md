# Builder

## Intent

    "Separate the construction of a complex object from its representation so that the same construction process can create different representations."

    Gamma et al. (2000)
  
## Overview

- This pattern suggets that the construction of a complex object should be separated from its representation;
- Complex constructor methods ;
- Object composition ; 
- Complex creational logic ;
- Allows creation to be executed in steps ;
- Allows method chaining ;
- The returned object can vary accordignly to the builder's needs ;
- It can be considered a complex pattern, since it can be used to create complex objects ;

## Pros and Cons

### Pros
- Separates construction from representation;
- The client doesn't need to build the object's representation;
- The same code can build different representations;
- Obeys Single Responsibility Principle and Open Closed Principle;

### Cons
- Resulting code can become very complex;