# React Context API

## Learning Objectives
- Remove prop drilling by implementing the React Context API
- Improve the maintainability of an app by reducing the complexity of state management

## Setup

- Fork and clone the repository
- Run `npm ci` to install dependencies
- `npm run dev` to run the app

## Instructions
Inside this project you'll find a Twitter clone react app. The tweets are loaded from an array into some state in 
the `App.jsx` component, which are then passed down as props to multiple components. The logged in user is also 
passed down to a number of components.

### Part 1 - Your First Context
Your task is to completely remove the prop drilling of the `user` state, the `tweets` state, and the `setTweets` 
function, replacing it with application level state using **Context**.

> ⛔ Do not move onto Part 2 until your teacher has covered the material on Local Storage!

### Part 2 - Context and Local Storage
Your second task is to combine Context and Local Storage together.
1. In the **App** component, create a new **Context** which will provide an object containing the `theme` state and its 
   setter function (`setTheme`). 
    1. Like any other variable or component, be sure to give it an appropriate name to distinguish it from the other 
       Context.
2. For each of the components in the `/components` directory, replace the `const theme = 'light'` line of code so that 
   this variable is now equal to the value of the `theme` state provided by your **Context**.
    1. There MUST be a variable called `theme` in each component!
3. Once you have correctly applied the theme to all the components, you will see that the app design will 
   dynamically update to reflect the selected theme. However, whenever you refresh the page, the `theme` state gets 
   reset. Let's prevent this by storing the value of `theme` in our Local Storage!
   1. Make sure that when you toggle the "Enable Dark Mode" checkbox, you save the `theme` value to local storage.
   2. Where we intialise the theme state, we should set the value to be equal to the local storage theme value if 
      there is one (otherwise, it should default to `"light"`).
