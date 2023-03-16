const UserModel = require("./UserModel");
const jwt = require("jsonwebtoken");

maxAge = 60*60;
const createToken = (id) => {
    return jwt.sign({ id }, "Hawary secret key", { expiresIn: maxAge });
}

module.exports.register = async (req,res,next) => {
  try {
    const { email,password } = req.body;
    const user = await UserModel.create({ email, password});
    const token = createToken(user._id);

    res.cookie("jwt",token, {
        withCrdentials : true,
        httpOnly: false,
        maxAge : maxAge*1000
    })
    res.status(201).json({user: user._id, created : true})
  } catch (err) {
     console.log(err);
  }  
}

module.exports.login = async (req,res,next) => {

}