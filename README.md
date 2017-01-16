WEB TECH Assignment 3 - Surja Chaudhuri, Martijn Noordhof and Julia Hofs

General

We made a webapplication called Instagram World. The idea is really simple. The main screen of the web page consist of 2 search grids. One is for searching tags and the other is for searching locations. The user can use one of these grids to search for Instagram posts with the given tag or posts posted at the location he or she fills in. In order to access the website it is necessary to authenticate the user through Instagram. As of now only invited Instagram users can be authenticated to view the content of the website that is retrieved using the Instagram API. 
However only the authentication was possible to make but he tags were not since the increased security measures recently taken by instagram. To see that the  authentication please use the following dummy account:
Username: (seeReport)
Password: 

Our application is hosted using Heroku. You can find our website on the following url: http://webtechnologytue.herokuapp.com/

Frontend Design

Our website is styled with the front-end framework materialize. We also added some additional personal styling to make the site look a bit more to our favor. We used the JavaScript library React for the rest of our front-end. 

ReactJS

A couple of us were already know with the Angular library so it seemed a save choice to stay with Angular for this project. However, we wanted to learn a new JavaScript library and some wanted to expend their knowledge in React so we decided to use the React library for this assignment. Another reason we choose React is because knowledge about this library is useful for personal use outside university.

Materialize

To make it easier we wanted to use a front-end framework. We first decided to use bootstrap since most of us used it before. However, the react version of bootstrap is still under construction and is still in its beta phase. We thought it would be better to use a more stable framework. A colleague of Julia recommended the React version of the materialize framework. Nobody knew the framework before but everybody was enthusiastic so we decided to use it. React has pre-built css classes that could be easily used with React by simply importing the css class to be used. We used react with materialize to make most of our frontend. The react-materialise library can be found here: https://github.com/react-materialize/react-materialize

Backend Design

For the back-end side of our web application we use Node.js with Express.js. This combination is very popular and is used for instance in the MEAN stack.

Express

Express is a web framework specially made for Node.js and designed for building web applications and APIs. We decided to use this framework because Julia and Martijn both had experience with this framework.


Node

Node is used to make our application. Same for Node as for Express. Julia an Martijn both have experience with Node so it was more efficient to use the node.js framework instead of a unknown framework. Node allowed to use java script to dynamically alter our webpage to allow data streams and authentication.

Databases

The data on our website is streamed through the Instagram API. In order to stream this data the website needs authorize the the user through an Instagram login. The Instagram login provides the access token needed to be allowed to stream feed from Instagram. On authorization through login, the user's access token is inserted in the URI as instructed in the Instagram API. 


REST APIs

Our website recent photos of a given search tag from Instagram. Thus our website uses the Instagram API for user authentication and image search through tags. As explained in the databses section Instagram API usage requires authentication from both endpoints of the server. This is done through obtaining a developer CLIENT-ID and ACCESS-TOKEN from the user. 
Ideally any user can login if they have a Instagram account and achieve an access token. However for this to happen the website needs to be reviewed by Instagram. Until then up-to 5 users can be invited to view the website. This policy was implemented by Instagram in 2016 to improve their security policy
