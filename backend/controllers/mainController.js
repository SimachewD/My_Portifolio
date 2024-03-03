const { skillModel, projectModel } = require("../Models/mainModel");

//fetch all data
const getMain = async (req, res)=>{

    const skills = await skillModel.find({}).sort({createdAt: -1});
    const projects = await projectModel.find({}).sort({createdAt: -1});
    res.status(200).json({skills, projects});
}

//add new skill
const postSkill = async (req, res)=>{

    const { title, iconUrl } = req.body;

    const skill = await skillModel.create({title, iconUrl});
    res.status(200).json(skill);
}

//add new project 
const postProject = async (req, res)=>{ 

    const { title, description, imageUrl } = req.body;

    const project = await projectModel.create({title, description, imageUrl});
    res.status(200).json(project);
}

//edit admin data
const patchAdmin = (req, res)=>{
    res.send('edit admin')
}
 
//edit profile
const patchProfile = (req, res)=>{
    res.send('edit profile')
}

//edit about
const patchAbout = (req, res)=>{
    res.send('edit about')
}


//delete project
const deleteProject = (req, res)=>{
    res.send('delete project')
}

//delete skill
const deleteSkill = (req, res)=>{
    res.send('delete data from db')
}
  

module.exports = {
        getMain,
        postSkill,
        postProject,
        patchAdmin,
        patchProfile,
        patchAbout,
        deleteProject,
        deleteSkill 
    };