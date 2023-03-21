export interface User {
    id: number,
    username: string, //user will use this to log in.
    password: string, //user will use this to log in.
    firstName: string, //user's name - won't need it for anything else. (May be in the main page? i.e. hello, {{User.firstname}})
    lastName: string, //user's last name - won't need it for anything else.
    address: string, //user's address - won't need it for anything else
    phone: number, //user's phone number - won't need it for anything else. (Maybe two-way authenticator?)
    email: string //user's email - we can send an email to the user to verify account creation?
}