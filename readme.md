# MERN Todo App

> Author: Razvan Bielz  
> Date: 17.05.2022

Full-stack TypeScript App with React, Nodejs and MongoDB
Created following a freeCodeCamp [tutorial](https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/).

## API
API with NodeJS, Express, MongoDB Atlas and TypeScript
Hosted on Heroku: https://darky-mern-todoapp.herokuapp.com/

## Client
ReactApp using TypeScript and Axios
Hosted on Netlify: https://stellular-bavarois-230375.netlify.app/

## Usage
- /api/
  - `yarn build`
  - `yarn start`
- /client/
  - `yarn start`

## Possible improvements
- implement drag and drop functionality to change TodoItem order
- dockerize the project

## Things learned
- Push to heroku only the api part of the repository:  
  `git subtree push --prefix <subfolder> heroku master`  
