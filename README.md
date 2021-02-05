# ImageFeeder

ImageFeeder is an application build with the [Unsplash API](https://github.com/unsplash/unsplash-js). It shows you a feed of the latest photo's added to Unsplash. You can view the photo's and their details, search for specific photo's trough keywords or just view random pictures. The application uses only vanilla code and no modules or libraries.

## Unsplash API
<img src="https://user-images.githubusercontent.com/25977763/107040894-1ba34a00-67c0-11eb-8c9d-472cf686b66f.png" alt="Photo Object returned by API" width="300px" align="right">
This project's using the Unsplash API to get the photos and search trough their database with keywords. The API can retrieve a photo object with different attributes. This object can be used to render data to the screen and show it to the user. We can retrieve the url to the image to display it inside a figure. Via the `likes` attribute we can check if a photo is popular and display it in the populair section and much more.

> For more information to use the API, check the [documentation](https://unsplash.com/documentation).


## Design System
The design system applied in this project will be based on the [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/). This means the Javascript code will be split into different layers and functions, hereby creating reusable code troughout the application.
