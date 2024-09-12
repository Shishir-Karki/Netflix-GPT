export const checkValidData = (email, password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   

    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
   

    return null;
};
export const checkValidDataSignUp = (email, password, name, phonenumber) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^[a-z ,.'-]+$/i.test(name);
    const isPhoneValid = /^(\+\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/.test(phonenumber);

    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
    if (!isNameValid) return "Name is not valid";
    if (!isPhoneValid) return "Phone number is not valid";

    return null;
};
