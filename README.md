# Milestone-Project-2
<p align="center"><strong>Milestone Project 2</strong>

<p align="center"><strong>Interactive Frontend Development</strong> 

<p align="center"><strong>Code Institute</strong>

<p align="center"><strong>Bookingzilla</strong> 

A holiday booking site to display attractions on a map based on the country the user searches for.

The project has a couple of pages:

1: A homepage listing the most popular destinations as a slideshow and a link to the map.

2: A page with Google Maps and a table below that gets the details of all the hotel markers that a user has searched for in a city. 

3: A page where the user can fill out a contact form about details of a hotel that was displayed on the previous page which is then sent to me by email.

[Link to website](https://seand17.github.io/Milestone-Project-2/) here to see the website.

![Website](https://github.com/SeanD17/Milestone-Project-2/blob/e90fff09a79faced5f7cbf1642d7ef9e6dc0f5a6/assets/images/bookingzilla.png)

## Table of Contents
> - [UX](#ux)
> - [User Stories](#user-stories)
> - [Strategy](#strategy)
> - [Scope](#scope)
> - [Structure](#structure)
> - [Surface](#surface)
> - [Icons](#icons)
> - [Skeleton](#wireframes)
> - [Features](#features)
> - [Features Left to Implement](#features-left-to-implement)
> - [Technologies Used](#technologies-used)
> - [Libraries](#libraries)
> - [Version Control](#version-control)
> - [Other](#other)
> - [Testing](#testing)
> - [Validation](#validation)
> - [Project Bugs and Solutions](#projects-bugs-and-solutions)
> - [Remaining Bugs](#remaining-bugs)
> - [Deployment](#deployment)
> - [Credits](#credits)
> - [Acknowledgments](#acknowledgments)

## UX:

## User Stories:




## Strategy:



## Scope:



## Structure:



## Surface:



## Icons:



## Wireframes:
I have included wireframes for each page on this website, click on the below page names to see these wireframes:

[Homepage](https://github.com/SeanD17/Milestone-Project-2/blob/b4ecb737670ae55172b7f67d1a049dfa0cecfe22/assets/wireframes/Holiday%20Booking%20Homepage.pdf)

[Destination](https://github.com/SeanD17/Milestone-Project-2/blob/c8bba7927154286896b968bd99dd8baef9e5343a/assets/wireframes/Holiday%20Booking.pdf)

[Contact](https://github.com/SeanD17/Milestone-Project-2/blob/b4ecb737670ae55172b7f67d1a049dfa0cecfe22/assets/wireframes/Contact%20Form.pdf)

## Features:

<p align="center"><strong>Existing Features:</strong>

<strong>Feature 1:</strong>



## Features Left to Implement:



## Technologies Used:
[HTML](https://html.com/)
Used to create the structure of the web site.

[CSS](https://www.w3schools.com/css/css_intro.asp)
Used to style the website

[Bootstrap](https://getbootstrap.com/)
Used to design the site for mobile users and for other features.

[JavaScript](https://www.javascript.com)
Used throughout the web application to perform various functions such as:
 
Loading the map and using co-ordinates to display a default map.

Load the new location on the map based on the Google Places search performed by the user.

Place Markers on the map based on the 'Enter a city' location search, and clear the markers by using a Clear button.

Compile the results of the nearby location search into a table, and build dynamic HTML code to display the results list in a structured table format each time the user completes a search.
 
Build the search results data into an information window which is activated when the user clicks on a marker.

[Google Maps API](https://cloud.google.com/maps-platform/maps/)
Used in this project in order to display a customised and interactive map to display the user's searched location, and also to display customised markers for an additional search of nearby places.

The default map was loaded with a set location using Longitude and Latitude co-ordinates for the country of Spain as it was the first country displayed on the homepage's slideshow.

The zoom level of the map was also set to allow the user to see streets and landmarks around city that the user searched for.

Users can control the zoom on the map, and can zoom in or out with ease.

[Google Places API](https://cloud.google.com/maps-platform/places/)
Used together with the search bar to control the location displayed on the map, and provide autocomplete for place names as search is being completed. 
    
An event listener is used to check the autocomplete search bar for the place_changed event, when this is true, it then calls the OnPlaceChanged function to update the map for the new location.
     
Google Places  returns multiple data items on the locations and these are used to fill both the Results table, as well displaying place details in an information window if the place marker on the map is clicked.
    
A second event listener is used to check if a marker has been clicked and will display an information window with the relevant place details.
    
    
## Libraries:
[FontAwesome](https://fontawesome.com/)
Used frequently for icons used throughout the website

[Balsamiq](https://balsamiq.com/wireframes/?gclid=EAIaIQobChMIn-_lgbiJ7QIVn4BQBh1X3Av6EAAYASAAEgL1XfD_BwE)
Used for the creation of wireframes


## Version Control:

[Github](https://github.com/) - Used to store the code and use of Github Pages to deploy the website. 

[Gitpod](https://gitpod.io/) - Used as the primary version control IDE for development to further push and commit code to Gihub.

## Other:

[Code Institute Course Content](https://courses.codeinstitute.net/) - Primary source of learning code.

[W3Schools](https://www.w3schools.com/) - used as a general resource for CSS and coding tips.

[StackOverFlow](https://stackoverflow.com/) - used as a general resource for layout tips or questions.

[AmIResponsive](http://ami.responsivedesign.is/) - Used to check how the layout of the website looks across different devices. 

## Testing:



## Validation:
HTML - [W3C](https://validator.w3.org/) - Markup Validation

[Index Validation Result](https://github.com/SeanD17/Milestone-Project-2/blob/2b98e0420f69f327b2097426d4b0051d66af9515/assets/images/index%20validation.png)

[Destination Validation Result](https://github.com/SeanD17/Milestone-Project-2/blob/master/assets/images/destination%20validation.png)

[Contact Validation Result](https://github.com/SeanD17/Milestone-Project-2/blob/cc2d9690a27ac1298f0fa62a75394cab448007ff/assets/images/contact%20validation.png)


CSS - [W3C](https://jigsaw.w3.org/css-validator/) - CSS Validation

[Validation Result](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fgithub.com%2FSeanD17%2FMilestone-Project-2%2Fblob%2Fmaster%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

JavaScript - [JSHINT](https://jshint.com/) - JavaScript Validation

[Booking Validation Result](https://github.com/SeanD17/Milestone-Project-2/blob/538eaca96289f9036a58ab682d396111664f5d33/assets/js/booking.js)

[EmailJS Validation Result](https://github.com/SeanD17/Milestone-Project-2/blob/538eaca96289f9036a58ab682d396111664f5d33/assets/js/emailJS.js)

[Slideshow Validation Result](https://github.com/SeanD17/Milestone-Project-2/blob/538eaca96289f9036a58ab682d396111664f5d33/assets/js/slideshow.js)

## Project Bugs and Solutions:



## Remaining bugs: 



## Deployment:

Once a GIthub account was created, I opened a new repository by clicking the green button "new". 

To create this project, I used the Code Institute's student [template](https://github.com/Code-Institute-Org/gitpod-full-template).

Click on the green "gitpod" button where one is redirected to to [Gitpod](https://gitpod.io/)

Gitpod, a cloud-based version control software or IDE was used to write all code for this project.

It was then pushed or saved in the terminal to Github where it is stored in a [repository](https://github.com/SeanD17/Milestone-Project-2)

Under "Settings", I scrolled down to Github Pages and selected "Master Branch" under source, to where the page was automated.

Once this was selected, the project was pushed to Github pages and the URL is then displayed

To access the code, it can be run locally by either selecting "clone" which provides an URL one can use on their local machine or "download" which is where one can download the zip file on to their machine.

This website is hosted through GitHub Pages and any changes made to the website are shown almost immediately after pushing to GitHub.

For the website to work an index html had to be created before GitHub Pages can display the website.

To run locally, you can clone this repository directly into the editor of your choice by pasting `git clone https://github.com/SeanD17/Milestone-Project-2.git` into your terminal. 

To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.

## Credits:

## Content:

All text content in this website was written by me.

<span>Tourist numbers used in slideshow on index page was obtained from <a href="https://en.wikipedia.org/wiki/World_Tourism_rankings">here</a></span>

## Media:

The photos used in this site were obtained from:

<span>Bed icon obtained from <a href="https://fontawesome.com/icons/hotel">here</a></span>

<span>Globe icon obtained from <a href="https://fontawesome.com/icons/globe-americas?style=solid">here</a></span>

<span>Map icon obtained from <a href="https://fontawesome.com/icons/map-marked-alt?style=solid">here</a></span>

<span>Suitcase icon obtained from <a href="https://fontawesome.com/icons/suitcase?style=solid">here</a></span>

<span>Plane icon obtained from <a href="https://fontawesome.com/icons/plane?style=solid">here</a></span>

<span>Couple boarding plane obtained from <a href="https://www.istockphoto.com/photo/couple-leaving-for-a-vacation-gm951105550-259628198">here</a></span>

<span>Couple on beach obtained from <a href="https://depositphotos.com/212620776/stock-photo-happy-young-couple-walking-together.html">here</a></span>

<span>Beach background obtained from <a href="https://unsplash.com/@apviktor?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Viktor Jakovlev</a> on <a href="https://unsplash.com/@apviktor?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">here</a></span>

<span>Hagia Sophia in Turkey obtained from <a href="https://www.voanews.com/europe/greek-businesses-move-boycott-trade-turkey-over-hagia-sophia">here</a></span>

<span>Colosseum in Italy obtained from <a href="https://www.smithsonianmag.com/smart-news/italy-plans-install-floors-colosseum-1-180976635/">here</a></span>

<span>Malaga in Spain obtained from <a href="https://www.hellehollis.com/blog/en/scenic-drives-around-malaga.htm">here</a></span>

<span>San Miguel de Allende in Mexico obtained from <a href="https://www.travelagentcentral.com/destinations/san-miguel-de-allende-making-its-mark-culinary-world">here</a></span>

<span>Grand Palace in Thailand obtained from <a href="http://www.asiaessencetours.com/destinations/thailand/bangkok/the-grand-palace.htm">here</a></span>
  
## Acknowledgments:

I received inspiration for this project from my mentor Nishant Kumar.

I also received inspiration from an Bootstrap mini project that was taught to us as part of our course.
