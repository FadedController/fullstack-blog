# Iliana Hegewisch

This project is a portafolio site for the Manifest Coach Iliana Hegewisch

## File structure

### Components

#### ../errors

This folder contains the Errors Context and component, that can be accessed from anywhere within the component tree. Just change the state of the Error object and an error dialog will appear. The error also clears itself from state when the error dialog is cleared by the user

#### ../footer

This folder contains the Footer component

#### ../layout

This folder contains utility components for consistent UI design

#### ../misc

This folder contains all sort of really fun components, let's have a deeper look

##### ../Calendar

The logic and UI of the calendar is contained here. The language folder contains the es.json and en.json files for different languages, the utils folder contains a function that generates an Array of Arrays that contain two dates, that is used as a time range when performing component logic.

The calendar.config.json file contains all the necessary information for the Google Calendar API. This file could contain sensitive information, but is necessary at Build and client time

Now to the fun stuff, the UI components. The calendar component contains all of the timeblocks and handles the date cycling, while each TimeBlock contains most of the event creating logic of the website.

##### ./Form

Contains all of the form UI & logic used in the TimeBlock component. This components are higly reusable

##### ./Overlay

UI component that takes two different JSX elements, one top and one bottom. It shows the top one until you hover over the card, this will reveal the bottom element with a nice animation

##### ./Table

This element is unused, but very well documented :D

##### ./Youtube

This UI element takes several Youtube iframes and puts them in a beautiful carousel overlay

#### /navigation

Contains the UI and logic of the Navigation Bar. This bar is dependent on data located in the data subdirectory

#### /ui

Contains all of the UI elements without any logic other than being able to switch languages according to the language context

#### /pages

Contains all of the Next.js page components

#### /styles

Contains globals.css, for all of the custom css that can't be done with TailwindCSS

#### /public

All of the files available on the client side
