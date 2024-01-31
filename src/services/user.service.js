import userSchema from "../schema/user.schema.js";

export const addUserService = async ({
  firstName,
  lastName,
  password,
  email,
}) => {
  try {
    const newUser = new userSchema({
      firstName,
      lastName,
      email,
      password,
    });

    await newUser.save();

    return { code: 200, message: "signup was successful" };
  } catch (error) {
    console.log("🚀 ~ error:", error);
    throw { code: 400, message: "can't add new user now..!!" };
  }
};
