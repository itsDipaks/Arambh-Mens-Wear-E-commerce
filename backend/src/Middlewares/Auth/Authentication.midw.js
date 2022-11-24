require("dotenv").config();
var jwt = require("jsonwebtoken");

const Authentication = (req, res, next) => {
  const secret_key = process.env.SCREATE_KEY;
  const token = req.headers.token;
  try {
    const verifiyToken = jwt.verify(token, secret_key);
    if (verifiyToken) {
      req.body.userid = verifiyToken.userid;
      console.log(verifiyToken);
      next();
    }
    else{
        res.send({msg:" Error : Not Authenticate"})
    }
  } catch (err) {
    res.send({msg:"user Not Found Please Login Again ",err});
  }
};

module.exports = {Authentication};
