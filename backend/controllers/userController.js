

const { adminModel, profileModel, aboutModel, messageModel } = require("../Models/userModel");


// //Admin
// const createAdmin = async (req, res)=>{

//     const { email, password } = req.body;

//     const admin = await adminModel.create({email, password});
//     res.status(200).json(admin);
// }



//edit admin data
const patchAdmin = (req, res)=>{

    adminModel.findOneAndUpdate( {}, { ...req.body }, { new: true }).then((updatedAdmin) => {
        res.status(200).json({'Password updated successfully for admin:': updatedAdmin});
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
    patchAdmin,
    patchProfile,
    patchAbout,
    postMessage  
    //createAdmin
}; 