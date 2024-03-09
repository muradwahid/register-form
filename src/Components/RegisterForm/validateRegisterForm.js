import passValidation from "../hooks/usePassValidation";

export const handleRegisterForm = (e, messages, setErrorMessage, formFields, weakPass) => {
  e.preventDefault();
  const loading = true;

  //error messages
  let errors = {
    // username: "{ type: "username", message: "" }",
    // email: { type: "email", message: "" },
    // password: { type: "password", message: "" },
    // confirmpassword: { type: "confirmpassword", message: "" },
    // firstname: { type: "firstname", message: "" },
    // lastname: { type: "lastname", message: "" },
    // website: { type: "website", message: "" }
  }

  //input data
  const form = e.target;
  const username = form.username.value;
  const email = form.email.value;
  const password = form.password.value;
  const confirmPass = form.confirmpassword?.value;
  // const firstName = form.firstname?.value;
  // const lastName = form.lastname?.value;
  // const website = form.website?.value;

  //fields validation start 

  // username
  if (username) {
    if (!/^[a-zA-Z0-9_@+\\/]+$/.test(username)) {
      errors.username = messages.error.username.invalid
    } else if (username === "murad442") {
      errors.username = messages.error.username.alreadyUsed
    }
  } else if (!username) {
    errors.username = messages.error.username.missing
  } else {
    delete errors.username;
  }

  //email
  if (email) {
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {

      errors.email = messages.error.email.invalid
    } else if (email === "muradwahid334@gmail.com") {
      errors.email = messages.error.email.alreadyUsed
    }
  } else if (!email.length) {
    errors.email = messages.error.email.missing
  } else {
    delete errors.username;
  }

  //password
  const pass = passValidation(password, weakPass.validation.length, weakPass.validation.uppercase, weakPass.validation.lowercase, weakPass.validation.number, weakPass.validation.specialChar);
  if (!password.length) {
    errors.password = messages.error.password.missing
  } else if (!formFields.weakPass) {
    if (pass) {
      delete errors.password;
    } else {
      if (weakPass.option === "custom") {
        errors.password = messages.error.password.custom;
      } else if (weakPass.option === "default") {
        errors.password = "8 characters, Number, Uppercase, Lowercase, Special character";
      }
    }
  }
  if (confirmPass !== password && typeof confirmPass != 'undefined' && !errors.password) {
    errors.confirmpassword = messages.error.password.confirmedPass
  } else {
    delete errors.confirmpassword;
  }
  //fields validation start

  console.log({ errors })

  // send error messages and loading status
  setErrorMessage({ loading, errors });

  // if (!Object.keys(errors).length) {


  // }
}