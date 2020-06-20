import auth from './components/auth/auth';
import '../styles/main.scss';

/**
 * Be able to login and logout to our app
 * see a login button if we are not logged in
 * see a logout button if we are logged in
 * see a list of mushrooms (like a forest!) if we are logged in
 */

const init = () => {
  auth.loginButton();
};

init();
