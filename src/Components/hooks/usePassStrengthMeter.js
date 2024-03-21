import { useEffect } from "react";

export const passwordLength = (password) => {
  let strength = 0;
  if (password.length >= 6) {
    strength += 1;
  }
  // if (/[a-z]/.test(password)) {
  //   strength += 1;
  // }
  if (/[A-Z]/.test(password)) {
    strength += 1;
  }
  if (/[0-9]/.test(password)) {
    strength += 1;
  }
  if (/[^a-zA-Z0-9]/.test(password)) {
    strength += 1;
  }
  return strength;
}

export const passlengthClass = (length) => {
  if (length === 1) {
    return "veryWeak"
  } else if (length === 2) {
    return "weak"
  } else if (length === 3) {
    return "medium"
  } else if (length === 4) {
    return "strong"
  }
  // else if (length === 5) {
  //   return "very-strong"
  // }
}
export const usePassStrengthMeter = (pass) => {
  const passLength = passwordLength(pass);
  const length = passlengthClass(passLength);
  useEffect(() => {
    const lengthMeterEl = document.getElementsByClassName("rgfr-strengthMeter");
    if (lengthMeterEl.length ) {
      Array.from(lengthMeterEl).forEach((e, i) => {
        if (passLength === 0) {
          e.classList.remove("veryWeak");
        } else if (passLength === 1) {
          e.classList.remove("weak");
        } else if (passLength === 2) {
          e.classList.remove("medium");
        } else if (passLength === 3) {
          e.classList.remove("strong");
        }
        // else if (passLength === 4) {
        //   e.classList.remove("very-strong")
        // }
        if (i + 1 <= passLength) {
          e.classList.add(length);
        }
      });
    }
  }, [passLength,pass]);
}