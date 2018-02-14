# Resources

## # Shameless Plug ([CodePilot.ai](https://codepilot.ai/))

For beginning developers or even developers with 20 years of experience, this is a great tool for searching for code snippets, code explanations, and just answer to questions. I (Cameron) work on and with this application every day and have to say that it makes a great addition for those working on the project 😄

## Additions

Now on to the good part. What else could the app do?! Well quite a lot actually so we are going to list them out below. I will list them in order of what I think is importance.

* Support images

  * This is an important one that I wasn't able to get around to. However, it shouldn't be _too_ hard to implement. The hard part will be using Cordova to make use of the camera. You will find information about that [here](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-camera/). After that It is basically just another element, just like to be added to `template-elements.vue`.

* Pull matches and images of robots from the blue alliance and display

  * This should be pretty easy. Below are two API endpoints that [The Blue Alliance](https://www.thebluealliance.com/) provides that will be beneficial to us. I think the harder part of this will be deciding how to display the information. That being said, any we current already have the ability to gather a bunch of information about a team from The Blue Alliance and are doing so when we create a team for our list. You can see that in the `addScoutedTeams` function in the `scouting.js` vuex module.

  > Matches - https://www.thebluealliance.com/api/v3/team/1255/matches/2017

  > Images - https://www.thebluealliance.com/api/v3/team/1255/media/2017

* Export via Bluetooth

  * Not sure what I was thinking, thinking this would be easy with something like Quasar 😅 It would have been very easy had we stuck with Ionic like in we were doing in the beginning but Quasar is in its infancy so it is going to be much more difficult to implement this.
  * To do this you will need to implement the third-party Cordova plugin which even I (Cameron) am unsure how to do exactly. The third-party plugin can be found here [here](https://github.com/don/BluetoothSerial).

* Game Manual Display and Search

  * Implementing this should be trivial. I didn't do it because when I was working, getting the templates working was my primary concern. I would actually recommend keeping the manual out of the application and loading remotely. That way if we want to change it every year, all we have to do is change the remote location where we are loading it from. That being said, we could always download the manual and host it ourselves if we wanted to (good way to teach data hosting). It is possible to do this either by implmenting [this solution](https://stackoverflow.com/questions/17784037/how-to-display-pdf-file-in-html) or what I think is probably a better solution since we are using Vue.js would be to use a module meant to work with Vue rather than try to recreate the wheel. Check [this one](https://github.com/FranckFreiburger/vue-pdf) out! 😄

* Improve how the stopwatch looks

  * I (Cameron) honestly stole the current implementation for the stopwatch from CodePilot.ai. I didn't have enough time to look up how I did a previous implmentation but it would be nice if the counter on the stopwatch was more of a `00:00:00` format and displayed the incrementing timer but unfortunately this requires quite the refactor 😅

## Quasar Framework

Quasar is the framework that provides everything for us. They start with a simple Vue.js template that you can run, provide plenty of out of the box Vue components for things like form elements to groupings and layouts that are _great_ for people like me (Cameron) who are design challenged as well as even all the popular fonts like [Font Awesome](https://fontawesome.com/icons?d=gallery), [Material Icons](https://material.io/icons/), and [Ionicons](https://ionicframework.com/docs/ionicons/). The links below include their docs as well as good ways of keeping up with them:

* Documentation - http://quasar-framework.org/
* Twitter - https://twitter.com/quasarframework

## Vue.js

This is what we use for the front-end of our application. There are a lot of things that Vue does that are much too complex for me to explain (partially because I don't understand them myself) but are _awesome_! 🎉🎉 They're core team members are an amazing community to interact and if you shoot a direct message at any of the links I provide down below, I am sure they would help you with whatever problem you are facing 😄

* Documentation - https://vuejs.org/v2/guide/
* Repo - https://github.com/vuejs/vue
* Twitter - https://twitter.com/vuejs
* Core Team Members

  * Chris Fritz - https://twitter.com/chrisvfritz
  * Sarah Drasner - https://twitter.com/sarah_edo
  * Damian Dulisz - https://twitter.com/DamianDulisz

## Cordova

Cordova is probably one of the things in our stack that I know least about... It started off as PhoneGap and has since changed its name. Think of it as the Electron for mobile. Basically it not only allows us to port web apps to native mobile apps (apps that you can download from the app store) for both iOS, Android and Windows. Unlike Electron though it has a lot of awesome plugins that let you interact with things like the Camera, Bluetooth, NFC, etc.

* Documentation - https://cordova.apache.org/docs/en/latest/
* Twitter - https://twitter.com/apachecordova?lang=en

## Electron

Currently we are not using Electron but I would like to change that in the future should someone want to take that task on. One awesome part of using Quasar is we can not only detect what platform we are on and change elements of the UI based on that but we can use both the Cordova and Electron wrappers. I would **LOVE** if the scouting app had a "hub" application that we could dump all of our information about a team to and then have graph visualizations based off of that using something like [Chart.js](http://www.chartjs.org/) or something like that. It would take what we are doing to a whole other level 🙀

Electron allows us to create cross platform desktop applicatons (mac, windows, and linux) with a soliltary code base consisting of web technologies like (html5, javascript, and css). Below are some good resources for getting aquainted with it:

* Awesome YouTube Tutorials - https://www.youtube.com/maxchaor

* Documentation (however bad it maybe...) - https://electronjs.org/docs

* GitHub On-Demand - https://services.github.com/on-demand/electron/

* Twitter - https://twitter.com/electronjs
