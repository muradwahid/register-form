import { produce } from 'immer';

export const updateData = (
  attribute,
  property,
  value,
  secondProperty,
  thirdProperty,
  fourthProperty,
  fifthProperty
) => {
  const updatedData = produce(attribute, (draft) => {
    if (property && secondProperty && thirdProperty && fourthProperty && fifthProperty) {
      draft[property][secondProperty][thirdProperty][fourthProperty][fifthProperty] = value;
    }else if (property && secondProperty && thirdProperty && fourthProperty) { 
      draft[property][secondProperty][thirdProperty][fourthProperty] = value;
    }else if (property && secondProperty && thirdProperty) {
      draft[property][secondProperty][thirdProperty] = value;
    } else if (property && secondProperty) {
      draft[property][secondProperty] = value;
    } else {
      draft[property] = value;
    }
  });
  return updatedData;
};

export const logoPosition = (option) => {
  if (option === "left") {
    return "row"
  } else if (option === "top") {
    return "column"
  } else if (option === "bottom") {
    return "column-reverse"
  } else if (option === "right") {
    return "row-reverse"
  }
}

export const inputType = (val) => {
  if (val === "username") {
    return "text";
  } else if (val === "email") {
    return "email";
  } else if (val === "password") {
    return "password";
  } else if (val === "confirmpassword") {
    return "password";
  } else if (val === "website") {
    return "url";
  } else {
    return "text";
  }
}
export const webUrl = window.location.origin;

export const getBoxCss = (value) => {
  return `${value?.top} ${value?.left} ${value?.bottom} ${value?.right}`
}
export const btnAlign = (value) => {
  if (value === "left") {
    return "start";
  } else if (value === "right") {
    return "end";
  } else if (value === "center") { 
    return "center";
  }
}

export const location = window.location.origin + window.location.pathname+"/";

export const generateUserName = (email) => { 
  const usernameRegex = /^[^/@_.]+/;
  const usernameMatch = email.match(usernameRegex)[0];
  return usernameMatch
}