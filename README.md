# Papayatary

> Fitness Dating Mobile App

## Introduction

> Papaytary is a React Native mobile app that allows users to like one another by sending Fitbit steps. Users sync up steps they've accumulated while wearing their Fitbit. New steps are added to users' wallets each time they open the mobile app. Users can then send steps to other users in order to like them. Once two users send steps to each other, they are matched and can send each other messages.

## Team

  - __Product Owner__: Haoming Huang
  - __Scrum Master__: Laura Curley
  - __Development Team Members__: Kenneth Montgomery

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Requirements

- Node 5.8.x
- PostgreSQL 9.5.x
- etc
- etc

## Example

![papayatary2](https://cloud.githubusercontent.com/assets/14812931/15410674/ebef9a8c-1dcf-11e6-9250-50e7dfe0309e.gif)

## Mockups

<img width="1027" alt="screen shot 2016-05-19 at 2 27 35 pm" src="https://cloud.githubusercontent.com/assets/14812931/15410755/6513fbec-1dd0-11e6-88e1-df928af87283.png">

## Development

### Installing dependencies
1. Install PostgreSQL following this tutorial: (https://www.codefellows.org/blog/three-battle-tested-ways-to-install-postgresql)

### Setting up the Database
In the terminal, navigate to the root directory:
- 1. ```createdb cosmictornado``` to create a database
- 2. ```nodemon server.js``` to start the server and link the tables to the database

### Schema Design

<img width="1023" alt="screen shot 2016-05-19 at 2 56 48 pm" src="https://cloud.githubusercontent.com/assets/14812931/15411224/673af13e-1dd3-11e6-8b0a-c0db47e9b59c.png">

### PostgreSQL Command Cheatsheet
- ```createdb _databasename_``` to create a new database called databasename
- ```dropdb _databasename_``` to delete an existing database
- ```psql _databasename_``` to enter PostgreSQL command line
- ```\list``` to list all databases
- ```\connect``` to switch databases
- ```\dt``` to show all tables
- ```\q``` to exit psql command line
- ```\d _tablename_``` to show table column names
- ```SELECT * from _tablename_;``` to show all rows in a table
- ```\t``` to toggle table to show column names if they're not showing up

### High level architecture
![](http://i.imgur.com/eCUkBBx.png)

## Testing
- In terminal, ```mocha``` to run tests

### Installing Dependencies
- ```npm install```
- ```rnpm link``` to automatically link most iOS dependencies


### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

