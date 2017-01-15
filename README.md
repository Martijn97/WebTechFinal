WEB TECH Assignment 3 - Surja Chaudhuri, Martijn Noordhof and Julia Hofs

General
We made a webapplication called Instagram World. The idea is really simple. The main screen of the webpage consist of 2 search grids. One is for searching tags and the other is for searching locations. The user can use one of these grids to seach for instagram posts with the given tag or posts posted at the location he or she fills in. In order to access the website it is necessary to authenticate the user through Instagram. As of now only invited instagram users can be authenticated to view the content of the website that is retrieved using the Instagram API. 

Our application is hosted using Heroku. You can find our website on the following url: http://webtechnologytue.herokuapp.com/

Frontend Design

ReactJS

Backend Design



Databases
The data on our website is streamed through the Instagram API. In order to stream this data the website needs authorize the the user through an Instagram login. The Instagram login provides the access token needed to be allowed to stream feed from Instagram. On authorization through login, the user's access token is inserted in the URI as instructed in the Instagram API. This is handled in the file Index.js. 
After the user is authorized they can search website through tags. The tag search is done using GET command by the tag. 


REST APIs
Our website recent photos of a given search tag from Instagram. Thus our website uses the Instagram API for user authentication and image search through tags. As explained in the databses section Instagram API usage requires authentication from both endpoints of the server. This is done through obtaining a developer CLIENT-ID and ACCESS-TOKEN from the user. \\
Ideally any user can login if they have a Instagram account and achieve an access token. However for this to happen the website needs to be reviewed by Instagram. Until then up-to 5 users can be invited to view the website. This policy was implemented by Instagram in 2016 to improve their security policy.
After the authentication is complete the GET method uses tags to search for the pictures viewed on the website.

Video
We made a screencast of our website which is available on the following YouTube link:
