This is a Deno REST server using PostgreSQL based on this Project: https://blog.logrocket.com/creating-your-first-rest-api-with-deno-and-postgres/
Massive thanks to [Diogo Souza](https://blog.logrocket.com/author/diogosouza/) for writing the article/tutorial. This is my attempt at turning that project into a full Typescript Deno project.

I'm new to Typescript so in invite anyone to create a PR to improve the typing, and anything else about the project, so others can use it as a template for their own. Thanks x

## Getting started

Before starting the server please ensure that you have a local PostgreSQL instance running with the correct tables (see link above for instructions)

Then modify your ./config.ts file to match your PostgreSQL config.

There are two bash scripts to start your dev and production environments

- **./dev** - will start-up the dev environment using Denon which will watch for file changes
- **./prod** - will start-up the environment only using Deno

TODO! can we use the ./prod script in the denon.json file so we don't have to duplicate the start-up permissions?

## Folder Structure

- **controllers**: hold the JS files that will handle the requests arriving, the further calls to the services and below layers and, finally, the delivery of the responses. All of those objects are inherited from Deno, so you don’t need to worry about whether you’ll need to handle requests/responses manually.
- **db**: the folder hosting our SQL script of creation and the direct connection to our Postgres database.
- **repositories**: these JS files will handle the management of the database operations. Each create, delete, or update will take place, in its logic, here.
- **services**: these are the files that will handle the business logic of our operations, such as validations, transformations over the data, etc.

## Notes:

- When you don’t provide a version for Deno packages, Deno will always fetch the latest, which can have breaking changes and mess up with your project. So be careful! Because we are still learning, no specific versions are being used, just the latest so

## Useful links

- Learn Deno: https://www.freecodecamp.org/news/learn-deno-a-node-js-alternative/
- API with Deno and PostgreSQL: https://blog.logrocket.com/creating-your-first-rest-api-with-deno-and-postgres/
