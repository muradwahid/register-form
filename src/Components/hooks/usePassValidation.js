function passValidation(password, passLength = 12, uppercase = false, lowercase = false, number = false, specialChar = false) {
  // let strength = 0;
    if (!password?.length >= passLength) {
      // strength += 1;
      return false
    }
  if (lowercase) {
    if (!/[a-z]/.test(password) && lowercase) {
      // strength += 1;
      return false
    }
  }
  if (uppercase) {
    if (!/[A-Z]/.test(password) && uppercase) {
      // strength += 1;
      return false
    }
  }
  if (number) {
    
    if (!/[0-9]/.test(password) && number) {
      // strength += 1;
      return false
    }
  }
  if (specialChar) {
    if (!/[^a-zA-Z0-9]/.test(password) && specialChar) {
      // strength += 1;
      return false
    }
  }
  return true;
  // Check for repeated characters
  // let repeated = false;
  // for (let i = 0; i < password.length; i++) {
  //   for (let j = i + 1; j < password.length; j++) {
  //     if (password[i] === password[j]) {
  //       repeated = true;
  //       break;
  //     }
  //   }
  //   if (repeated) {
  //     break;
  //   }
  // }
  // if (!repeated) {
  //   strength += 1;
  // }

  // // Check for common passwords
  // const commonPasswords = ["password", "123456", "123456789", "qwerty", "abc123"];
  // if (commonPasswords.includes(password)) {
  //   strength -= 1;
  // }

  // // Return the strength level
  // if (strength <= 1) {
  //   return "Weak";
  // } else if (strength === 2 || strength === 3) {
  //   return "Moderate";
  // } else if (strength === 4 || strength === 5) {
  //   return "Strong";
  // } else {
  //   return "Very Strong";
  // }
}

export default passValidation;