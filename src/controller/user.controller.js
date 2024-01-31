import { addUserService } from "../services/user.service.js";

export const addUser = async (req, res) => {
  const { body } = req;

  try {
    const { firstName, lastName, password, email } = body;
    const data = await addUserService({ firstName, lastName, password, email });

    res.status(data.code).send(data.message);
  } catch (error) {
    res.status(error.code).send(error.message);
  }
};
