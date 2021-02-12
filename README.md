# ImageFeeder

ImageFeeder is an application build with the [Unsplash API](https://github.com/unsplash/unsplash-js). It shows you a feed of the latest photo's added to Unsplash and their corresponding photographers. You can view the photo's and their details, search for specific photo's trough keywords or just view random pictures. The application uses only vanilla code and no modules or libraries. It's a one-page, client-side rendered, modular web-application.

## Live Demo
Check the live demo [here](https://marvinmichel.github.io/web-app-from-scratch-2021/)

## Unsplash API
<img src="https://user-images.githubusercontent.com/25977763/107040894-1ba34a00-67c0-11eb-8c9d-472cf686b66f.png" alt="Photo Object returned by API" width="300px" align="right">
This project's using the Unsplash API to get the photos and search trough their database with keywords. The API can retrieve a photo object with different attributes. This object can be used to render data to the screen and show it to the user. We can retrieve the url to the image to display it inside a figure. Via the `likes` attribute we can check if a photo is popular and display it in the populair section and much more.

> For more information to use the API, check the [documentation](https://unsplash.com/documentation).


## Design System
The design system applied in this project will be based on the [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/). This means the Javascript code will be split into different layers and functions, hereby creating reusable code troughout the application.

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
<img src="https://user-images.githubusercontent.com/25977763/107226094-f742aa00-6a19-11eb-8b83-3ee2bdebd533.png" width="600px" alt="Actor diagram that shows all functions inside the application">

### Interaction Diagram
<img src="https://user-images.githubusercontent.com/25977763/107275128-a058c700-6a51-11eb-9cdc-93618ca3265e.png" width="600px" alt="Interaction diagram that shows the interaction flow of the app">
