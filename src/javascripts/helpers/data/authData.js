import firebase from 'firebase/app';
/** we are adding this to get the firebase module and from firebase library packages
* when we installed the dependencies, we are importing only app module becuase
* there are a lot of other modules that we dont want */
import 'firebase/auth';
/* this one we are just adding auth package on top of our firebase package
* this we need only when we need to use the sign in or signout funcitaionality
* thats the reason we dont have this line in the main.js, we only have
* the firebase/app to initialize the app. */

const authDiv = $('#auth');
const forestDiv = $('#forest');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      forestDiv.removeClass('hide');
      logoutButton.removeClass('hide');
    } else {
      authDiv.removeClass('hide');
      forestDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
  // if the user is logged in: show mushrooms, hide login btn, show logout btn
  // else do the opposite
};

export default { checkLoginStatus };
