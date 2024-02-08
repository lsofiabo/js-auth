class User {
    static USER_ROLE = {
        USER: 1,
        ADMIN: 2,
        DEVELOPER: 3,
    };

    static #list = [];

    constructor({ email, password, role }) {
        this.email = email;
        this.password = password;
        this.role = User.#convertRole(role);
    }

    static #convertRole = (role) => {
        role = Number(role);
        if (isNaN(role)) {
            role = User.USER_ROLE.USER;
        }
        role = Object.values(User.USER_ROLE).includes(role)
            ? role
            : User.USER_ROLE.USER;
        return role;
    };
}

module.exports = { User };
