# React Context API

## Learning Objectives
- Remove prop drilling by implementing the React Context API
- Improve the maintainability of an app by reducing the complexity of state management

## Setup

- Fork and clone the repository
- Run `npm ci` to install dependencies
- `npm run dev` to run the app

## Instructions

Inside this project you'll find a Twitter clone react app. The tweets are loaded from an array into some state in the `App.jsx` component, which are then passed down as props to multiple components. The logged in user is also passed down to a number of components.

Your task is to completely remove the prop drilling of the user, tweets, and the `setTweets` function, replacing it with application level state using Context.