const { user, profile } = require("../../models");

const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { request } = require("express");

exports.register = async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().min(3).required(),
    password: Joi.string().min(6).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send({
      error: {
        message: error.details[0].message,
      },
    });
  }

  try {
    const email = await user.findOne({
      where : {email:req.body.email}
    })

    if (email) {
      return res.status(401).send({
        status: "Gagal",
        message: "Email sudah terdaftar",
      });
    }



    // Hashed Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Tambah user
    const newUser = await user.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    // Json Web Token
    const token = jwt.sign({ id: newUser.id }, process.env.SECRET_KEY);

    res.status(201).send({
      status: "Success",
      message: "Register success",
      data: {
        name: newUser.name,
        email: newUser.email,
        token,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.login = async (req, res) => {
  //Validation
  const schema = Joi.object({
    email: Joi.string().min(5).required(),
    password: Joi.string().min(3).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).send({
      message: error.details[0].message,
    });
  }

  try {
    const userExist = await user.findOne({
      where: {
        email: req.body.email,
      },
      include: [
        {
          model: profile,
          as: "profile",
          attributes: {
            exclude: ["idUser", "createdAt", "updatedAt"],
          }
        }
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    // Check Email
    if (!userExist) {
      return res.status(400).send({
        status: "failed",
        message: "Email belum terdaftar",
      });
    }

    // Check Password
    const isValid = await bcrypt.compare(req.body.password, userExist.password);
    if (!isValid) {
      return res.status(400).send({
        status: "failed",
        message: "Password Salah",
      });
    }

    // Json Web Token
    const token = jwt.sign({ id: userExist.id }, process.env.SECRET_KEY);

    res.status(200).send({
      status: "Success",
      message: "Berhasil Login",
      data: {
        user: {
          name: userExist.name,
          email: userExist.email,
          status: userExist.status,
          token,
          profile: userExist.profile,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.checkAuth = async (req, res) => {
  try {
    const id = req.user.id;

    const dataUser = await user.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });

    if (!dataUser) {
      return res.status(400).send({
        status: "failed",
      });
    }

    res.send({
      status: "Success",
      data: {
        user: {
          id: dataUser.id,
          name: dataUser.name,
          email: dataUser.email,
          status: dataUser.status,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status({
      status: "failed",
      message: "Server Error",
    });
  }
};
