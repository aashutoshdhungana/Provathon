export const _register = {
  method: "POST",
  url: "/regiser",
  description: "Register new user",
  params: {
    firstName: {
      type: "string",
      option: "required",
    },
    lastName: {
      type: "string",
      option: "required",
    },
    email: {
      type: "email",
      option: "required",
    },
    password: {
      type: "password",
      option: "required",
    },
    phoneNum: {
      type: "string",
      option: "optional",
    },
  },
};

export const _login = {
  method: "POST",
  url: "/login",
  description: "login user ",
  params: {
    email: {
      type: "String",
      option: "required",
    },
    password: {
      type: "String",
      option: "required",
    },
  },
};
