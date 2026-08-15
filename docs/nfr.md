## Goals we need to hit

#### Data load
We need our system to handle:
**Basic**: 1500 Product across 5-7 categories at firs
**End goal**: Scaling up to 15-20 thousand products

#### Traction
**Basic**: We will have to handle 100 visitors/day
**End Goal**: We expect to have +1000 visitors/day in peak events (back to school, end of year, etc)

#### Speed
The system will handle multiple concurent requests. A read request shouldn't take more than 20ms for the user to view the data on the UI

#### Uptime
- The system should always be up but in a crash scenario, it should be up in less than 50ms so the users never notice.
- If it's Reviews section, it can be slowed down up to 1 hour in the MVP.

#### Data protection
Since **COD** is the starting goal, the data of the orders should never be lost.

#### Concurrency

Admin and assistant will both be updating at the same time. 