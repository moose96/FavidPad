# FavidPad

This project is created as a part of React learning at Szkola Reacta. It is a simple video platform, which allows you to play your favorite movies, before saved in local database.

## Instalation

Requirements:
1. Node.js (13.8.0 *recommended*) - [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
2. Git

```
git clone https://github.com/moose96/FavidPad.git
cd FavidPad
npm install
npm start
```

## Assumptions

The app shows videos, with given title, and description by custom player. For convenience, it should let users give an url from web url input, like: *https://youtube.com/watch?v=somevideo*, and convert it into right video url, for example: *https://youtube.com/embed/somevideo*.

## Available URLs

```
/
```
It is a home page in which there are list of videos, presented by carousel view, or list view in dependency of screen orientation.
There are also links to other urls.

```
/video/:id
```
This page shows video with given id and list with other movies. Embedded player allows user to watch movies.

```
/video/create
/video/:id/update
```
Those pages presents the same form, which allows to add new movie, or update existing one.

## Manual

### Home page
Below header there is the carousel view, which shows all movies. You could scroll videos by clicking on the video which you want
to watch. Then you will able to go to video watching page by clicking centered video again. Also you can scroll movies by
scroll wheel or by dragging on the screen by your finger.
Each video in carousel view has two buttons marked by pencil and cross icon. The former one bring you into video edit form, and the
latter one allows you to delete that movie. When you would like to delete video, first you are supposed to confirm that action.
Below carousel view there is a button which move you to form which allow add you a new video. At the bottom there are footer with link to my GitHub account, and to about page.

### Video view page
The page is divided into two sections: the left contains player which allows you to watch video and the right contains information
about video and list with other movies.

### Video create/update form
The form contains three fields: title, url, and description. All of them are required. Start typing information from url. When
you blur that input application will get the thumbnail then you will know if it is movie which you want to add.

### Portrait version
When you will turn your screen into portrait orientation, the application will look slightly different. Carousel view on the home page
will be replaced by list view. That view has the same functionality like the carousel view. On the header there will appear two
buttons, which allow you to go back and forward through history.

## TODO
Below there is the list which describes how I want to develop my application.

1. Improve the layout, especially in portrait mode.
2. Add tutorial guide, which will be showing how use that application.
3. Add possibility to changing colors.
4. Improve showing the large amount of videos by adding pagination.
5. Add sounds
6. Add toolbar above the carousel view, which allows user to choose options written above.