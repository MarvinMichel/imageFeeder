# ImageFeeder
![GitHub deployments](https://img.shields.io/github/deployments/MarvinMichel/imageFeeder/github-pages)
![GitHub last commit](https://img.shields.io/github/last-commit/MarvinMichel/imageFeeder)
![W3C Validation](https://img.shields.io/w3c-validation/default?targetUrl=https%3A%2F%2Fmarvinmichel.github.io%2FimageFeeder%2F)
![GitHub](https://img.shields.io/github/license/MarvinMichel/imageFeeder)

ImageFeeder is an application build with the [Unsplash API](https://github.com/unsplash/unsplash-js). It shows you a feed of the latest photo's added to Unsplash and their corresponding photographers. You can view the photo's and their details, search for specific photo's trough keywords or just view random pictures. The application uses only vanilla code and no modules or libraries. It's a one-page, client-side rendered, modular web-application.

## Live Demo
Check the live demo [here](https://marvinmichel.github.io/imageFeeder/)

## How to use?
1. [Download](https://github.com/MarvinMichel/imageFeeder/archive/master.zip) or clone the repo
2. Open the terminal and navigate into the projects' directory: `cd ./imageFeeder`
3. Install the dependencies by running `npm install`
4. Start the development server: `http-server-spa . ./index.html`


## Unsplash API
<img src="./docs/images/api-object-preview.png" alt="Preview of object returned by API" width="300px" align="right">
This project's using the Unsplash API to get the photos and search trough their database with keywords. The API can retrieve a photo object with different attributes. This object can be used to render data to the screen and show it to the user. We can retrieve the url to the image to display it inside a figure. Beneath the image we can show some statistics like the user and the number of likes and downloads. Inside the object we'll retrieve a link to the users' profilepage and create a link to give the photographer a larger podium. 

You can check out an example of an photo-object [here](docs/object-example.json)

>🤓 For more information to use the API, check the [documentation](https://unsplash.com/documentation).


## Design System
The design system applied in this project will be based on the [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/). This means the Javascript code will be split into different layers and functions, hereby creating reusable code troughout the application.

## Client-size router
The application uses client-side routing. I've created the router based on [Will Tailors'](https://www.willtaylor.blog/client-side-routing-in-vanilla-js/) article. With the router, we use the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) so we can use the back and forward buttons of the browser to navigate trough the routes.

## Actor & Interaction Diagram
1. The main purpose of the application is a simple way for the user to look for photographs. This can be done by searching for keywords or exploration.
2. The functionalities needed for this:
    - User can search for keyword(s).
    - Application is connected to the Unsplash API.
    - User can switch tabs for different results.
    - Application can generate modulair HTML.
    - Lazy-loading new images when bottom screen is reached.
3. The actors needed for those functionalities:
    - A DOM-handler.
    - An API-handler.
    - A client-side router.
    - Pages to handle organisms.
    - Organisms to handle molecules.
    - Molecules to handle atoms.
    - Atoms to handle interaction.
4. The posible user interactions are:
    - Type a keyword in searchbar.
    - Press the search button.
    - Press a navigational tab to switch page.
    - Scroll at bottom of page.

### Actor Diagram

### Interaction Diagram

## License
[MIT License](LICENSE)
