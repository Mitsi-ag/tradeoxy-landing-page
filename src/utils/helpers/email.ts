export const isEmailValid = (email: string | null) => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email) return false;
  else {
    if (email.match(validRegex)) return true;
    else return false;
  }
};
