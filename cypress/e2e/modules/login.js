//import {usernameImput, passwordImput, loginButton} from '../pages/loginPage';
import { LoginPage } from '../pages/loginPage';
let loginPage = new LoginPage();

function loginAsUser(){
    loginPage.usernameImput().clear().type("qwerty");
    loginPage.passwordImput().clear().type("qwerty");
    loginPage.loginButton().click();
}

