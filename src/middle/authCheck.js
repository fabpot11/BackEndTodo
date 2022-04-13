const Data = require("../model/loginSingup");

const authCheck = async (req,res,next) => {
  try {
    const user = await Data.findOne({ email: req.body.email });
    console.log(user)

    if (!user) {
      return res.status(501).send("wrong crediantials");
    }

    const password = await Data.findOne({ password: req.body.password });

    if (!password) {
      return res.status(501).send("wrong crediantials");
    }

   next()
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = authCheck