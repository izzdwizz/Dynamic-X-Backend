const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { Request, Response } from "express";

const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User();
    user.email = email;
    user.password = hashedPassword;
    user.tasks = [];
    await AppDataSource.getRepository(User).save(user);
    res
      .status(201)
      .json({ message: "User registered successfully!", data: user });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "Registration failed!", error });
  }
};

const login = async (req: Request, res: any) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    const user = await AppDataSource.getRepository(User).findOne({
      where: { email },
    });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user?.id }, "secretkey", {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "onboard failed" });
  }
};

export { login, register };
