# City Explorer

**Author**: Anthony Lopez
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

City explorer is a web application that allows users to search a city. After a city is searched, an image of the city location along with coordinates is displayed. There are additional features to display a 7-day weather forecast as well as 5 movies the city searched is featured in (by name reference).

## Getting Started

 In order to get started you should:

 1. Create a new repo
 2. Use create-react-app to setup a new React application
 3. Connect your GitHub repo to your local repo
 4. Procure the following API keys to be used in your application
 5. Install Axios to be able make requests to APIS and React Bootstrap for additional react component customization
 6. creat an `.env` file, API keys are stored here

## Architecture

APIs:

- LocationIQ
- Weatherbit.IO
- themoviedb

Languages:

- Javascript 3
- HTML 5
- CSS3

Libraries:

- Axios
- React
- React Bootstrap
- Bootstrap
- React Dom
- React Scripts

## Change Log
01-26-23 completed Update the page with the returned `display_name`, `latitude`, and `longitude`, displayed nicely in an appropriate Bootstrap component
01-26-23 completed Deploy your updated React app to Netlify
01-31-23 completed When an error occurs, display the status code and an error message to the user.
02-04-23 completed When a location search is successful, send a request with axios to your API's `/movies` & `/weather` endpoints. Include the user-provided search term.
02-04-23 Componentized the front-end codebase

## Credit and Collaborations

- Brenden Moore
- Yurii Hlukhyi
- Brandon Mizutani
- Roger Reyes

## WRRC (with Araceli)

![Image](./src/images/Screenshot%202023-01-24%20at%2011.55.08%20PM.png)
