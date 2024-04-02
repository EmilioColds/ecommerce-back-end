## Introduction

For this challenge, my task was to change existing code to create the CRUD logic for an eCommerce backend and database structure. This has been done with the Sequelize, MySQL2, Express and DotENV tools. The most important part of the project was to create the corresponding logic to be able to Create, Read, Update and Delete any element of the eCommerce database. In the next sections I will present the user story, acceptance criteria and links to the YouTube video and repo of this challenge.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Links

Link to the video: https://youtu.be/rdyLuu-9Y2o

Link to the repo: https://github.com/EmilioColds/ecommerce-back-end