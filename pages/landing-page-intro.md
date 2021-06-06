### react-redux demo website

Welcome to my react-redux demo website!  This page simulates a food/concessions stand where "Preston Producer" makes burgers, hot dogs and fries, which get sold by "Selena Seller".  There is a maximum number of items that can be available at the stand at any given time, and the user sees a toast message if there are too many or too few items

This page is implemented with 3 different react components (`<Producer />`, `<FoodStand />` and `<Consumer />`) all connecting to a shared redux store.  The `@reduxjs-toolkit` is used for setting up the redux actions and reducer (using the `createSlice()` method).  If the max or min limit is reached, the toast validation message is displayed and the redux action doesn't get fired

Feel free to check out my **[Developer Blog](/devblog)**!


**Technology stack:**

- NextJS (static site generation framework)
- React (javascript HTML rendering library :)
- Typescript (typing for javascript)
- Sass (CSS extension)
- Tailwind (CSS library)
- eslint (javascript code linting)
- Prettier (opinionated code style formatting)
- reduxjs toolkit (redux state management library)

**Additional packages used:**

- gray-matter (parsing markdown front matter)
- react-toastify (toastrs to display messages to the user)
- remark (rendering markdown files as HTML)

**Code Linting:**
- Code linting is done with the `eslint:recommended`, react recommended and typescript recommended rules.  Prettier is also used with a few custom rule changes