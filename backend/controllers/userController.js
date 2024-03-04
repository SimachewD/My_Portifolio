

const { adminModel, profileModel, aboutModel } = require("../Models/userModel");


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




module.exports = {
    patchAdmin,
    patchProfile,
    patchAbout,
    // createAdmin
};