# Chat Application
In this project, a chat application is built.

![Chat Application](screenshot.jpg)

## Built With
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Requirements
 - NPM
 - Gulp.js

## Install
```
    $ git clone git@github.com:samiiexx/chat-app.git main
    $ cd main
    $ npm install
    $ npm run build
```

## Running the project
Production directory is the `public` folder.\
\
Run a full build
```
gulp build
```
Watch files and run BrowserSync
```
gulp serve
```
### Individual Tasks
These tasks can be run individually.\
\
Include HTML partials
```
gulp html
```
Compile SASS, browser autoprefix and minify CSS
```
gulp style
```
Compile, transpile and minify JS
```
gulp js
```
Minify images
```
gulp image
```

## Contributors
- Favour Samuel (@samiiexx)

## License
Copyright (c) 2021 Favour Samuel.

For enquiries please contact us at [sfchidimma@gmail.com](mailto:sfchidimma@gmail.com).
