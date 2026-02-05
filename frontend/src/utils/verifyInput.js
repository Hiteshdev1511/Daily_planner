const verifyInput = (input, type = "login") => {
  if (type == "login" && input) {
    const { email, username, password } = input;
    const emailVerified =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const usernameVerified = /[A-Za-z0-9]+/.test(username);
    const passwordVerified = password != "" && password.trim() != "";

    return (emailVerified || usernameVerified) && passwordVerified;
  } else if (type == "signup" && input) {
    const { email, username, password, confPassword } = input;
    const emailVerified =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const usernameVerified = /[A-Za-z0-9]+/.test(username);
    const passwordVerified = password != "" && password.trim() != "";
    const confPasswordVerified =
      confPassword != "" && confPassword.trim() != "";
    return (
      emailVerified &&
      usernameVerified &&
      passwordVerified &&
      confPasswordVerified
    );
  }
};

export default verifyInput;
