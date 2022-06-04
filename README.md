# Hello Dev Team

This has been an interesting assignment with an incredible amount of future depth. For context, I have spent the majority
of my experience in the backend. My interview prep was primarily data structures and algorithms. As such I hope to emphasize 
my quick context switch and ability to quickly experiment, learn and produce, rather than focusing on the perfectness of the code.

I hope to have the opportunity to continue to learn and grow with you. I hope my positive growth mindset indicates that I
will quickly adhere to the teams coding standards, technologies and methodologies.

## The App

The code creates a React template app that enables the user to search the provided endpoint. The focused search bar sends the
actual query to Algolia. The second search bar refines the results to the specific item while typing. Clicking on an item
returns the objectID. Should be able to use that to pull details and display an item pop up. The pop up
is a work in progress. Proof of concept testing
elements with Jest and React-Testing can be run with `npm test`

## Potential Future Elements

- Modify material UI palette to look better

- Environment variables for secret info

- Jest & React-Testing

- Pop ups when selecting an item, displaying more information

- Redux (Sagas & Thunks)

- Api error handling & autocomplete

- Appropriately ingest more data for quicker searching, less paging

- Hosting on AWS, hitting Lambda endpoints for pre-processing

# Run Instructions

1.) Insert Algolia api key and application id into /src/components/List.js variables that are highlighted at top of page

2.) run `npm install` then `npm start` or `npm run build` within project

3.) The focused search bar is the macro search which sends the query to Algolia

4.) The second search bar reduces the results to your micro filter to get a specific result

5.) Paging through results is done with Previous & Next buttons. Accurate search results should reduce
the need for paging

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
