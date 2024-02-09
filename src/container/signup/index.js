class SignupForm {
    static #values = {};

    static validate = (name, value) => {
        return true;
    };

    static submit = () => {
        console.log(this.#values);
    };

    static change = (name, value) => {
        console.log(name, value);
        if (this.validate(name, value)) {
            this.#values[name] = value;
        }
    };
}

window.signupForm = SignupForm;
