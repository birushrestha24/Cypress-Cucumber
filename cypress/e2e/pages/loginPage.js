class LoginPage{
    elements = {
        /** 
        username: () => cy.get('input[data-test="username"]'),
        password: () => cy.get('input[data-test="password"]'),
        loginButton: () => cy.get('input[data-test="login-button"]'),
        alert: () => cy.get('[data-test="error"]')
        */
       username: () => cy.get('input[name="username"]'),
       password: () => cy.get('input[name="password"]'),
       loginButton: () => cy.get('button[type="submit"]')
    }

    enterUsername(usrname){
        this.elements.username()
            .clear()
            .type(usrname);
    }

    enterPassword(password){
        this.elements.password()
            .clear()
            .type(password);
    }

    enterLoginCredentials(username, password){
        this.elements.username().type(username);
        this.elements.password().type(password);
    }

    clickLoginButton(){
        this.elements.loginButton().click();
    }

    getAlertMessage(){
        return this.elements.alert()
    }
}

export default LoginPage