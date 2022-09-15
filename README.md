# VirtualEscapeRooms
Escape room puzzles on a web page with clues and verifying answers handled by code
[Play here](https://m1robyndunstan.github.io/VirtualEscapeRooms)

## Setup

1. Download the latest version of the game from [here](https://github.com/m1robyndunstan/VirtualEscapeRooms/tree/main/dist).
1. Unzip the folder.
1. Open `index.html` in a browser. Double-clicking the file should open it in your default browser.

## Developer Setup

1. Clone this repository.
1. Install [Node.js](https://nodejs.org/en/).
1. Install the [Angular CLI](https://angular.io/). Run the following command on the commandline. `npm i -g @angular/cli`
1. To use angular commands, the commandline must be in folder `<git repository parent directory>/VirtualEscapeRooms/VirtualEscapeRooms`. This is the folder for the angular project.

### Run Locally

1. Open a commandline and navigate to folder `<git repository parent directory>/VirtualEscapeRooms/VirtualEscapeRooms`.
1. Run `npm install`.
1. Run `ng serve`.
1. Open a browser to URL [http://localhost:4200/](http://localhost:4200/).

### Build for Distribution

1. Open a commandline and navigate to folder `<git repository parent directory>/VirtualEscapeRooms/VirtualEscapeRooms`.
1. Run `npm install`.
1. Build the application. Run the following command on the commandline. `ng build --base-href "./" --delete-output-path`
1. Go to folder `<git repository parent directory>/VirtualEscapeRooms/VirtualEscapeRooms/dist/virtual-escape-rooms`. 
1. Copy the contents of the folder to a server you wish to deploy to. I use GitHub Pages. (`<git repository parent directory>/VirtualEscapeRooms/docs`)

## Technologies

- [Angular 13](https://angular.io/)
- [Font Awesome 6](https://fontawesome.com/)
- [Bootstrap 5](https://getbootstrap.com/)

## Change Log

### [1.0] - 2022-09-14

Completed Snowman Adventure virtual escape room