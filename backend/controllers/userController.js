
const bcrypt = require('bcrypt');

const { adminModel, profileModel, aboutModel, messageModel } = require("../Models/userModel");


// //Admin
// const createAdmin = async (req, res)=>{

//     const { email, password } = req.body;


//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(password, salt);
//     const user = await adminModel.create({email, password: hash});

//     res.status(200).json(user);
// }



//edit admin data
const changePassword = async (req, res)=>{

  const { oldPassword, newPassword } = req.body;

    const admin = await adminModel.findOne({});
    const match = await bcrypt.compare(oldPassword, admin.password);

    if (!match) {
      return res.status(400).json({Error:'Wrong Password'});
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);
    adminModel.findOneAndUpdate( {}, { password:hash }, { new: true }).then((updatedPassword) => {
        res.status(200).json({Success:'Password Changed Successfully'});
      }).catch((err)=> {
        return res.status(404).json({'Error updating password:': err});
      });
}
 
 
//edit profile
const patchProfile = (req, res)=>{

    profileModel.findOneAndUpdate( {}, { ...req.body }, { new: true }).then((updatedProfile) => {
        res.status(200).json({'profile updated successfully for admin:': updatedProfile});
      }).catch((err)=> {
        return res.status(404).json({'Error updating profile:': err});
    });
}


//edit about
const patchAbout = (req, res)=>{

    aboutModel.findOneAndUpdate( {}, { ...req.body }, { new: true }).then((updatedAbout) => {
        res.status(200).json({'About me updated successfully for admin:': updatedAbout});
      }).catch((err)=> {
        return res.status(404).json({'Error updating about me:': err});
    });
}



//add new message
const postMessage = (req, res)=>{

  const { email, phone, subject, message } = req.body;

  messageModel.create({ email, phone, subject, message }).then((message)=>{
      res.status(200).json(message);
  }).catch((err)=>{
      res.status(404).json(err.message);
  });
}



module.exports = {
    changePassword,
    patchProfile,
    patchAbout,
    postMessage,  
    // createAdmin
}; 