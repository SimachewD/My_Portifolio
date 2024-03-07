

const mongoose = require("mongoose");
const { skillModel, projectModel } = require("../Models/mainModel");
const { profileModel, aboutModel } = require("../Models/userModel");

//fetch all data
const getMain = async (req, res)=>{

    const skills = await skillModel.find({}).sort({createdAt: -1});
    const projects = await projectModel.find({}).sort({createdAt: -1});
    const profile = await profileModel.find({});
    const about = await aboutModel.find({});
    const data = {skills, projects, profile, about};
    res.status(200).json(data);
} 

//add new skill
const postSkill = (req, res)=>{

    const { title, description, iconUrl } = req.body;

    skillModel.create({title,description, iconUrl}).then((skill)=>{
        res.status(200).json(skill);
    }).catch((err)=>{
        res.status(404).json(err.message);
    });
}

//add new project 
const postProject = (req, res)=>{ 

    const { title, description, imageUrl } = req.body;

    projectModel.create({title, description, imageUrl}).then(project=>{
        res.status(200).json(project);
    }).catch(err=>{
        res.status(404).json(err);
    });
}

//delete project
const deleteProject = (req, res)=>{

    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id))
     {
       return res.status(404).json({ERROR:`No such project: ${id}`});
     }

    
     projectModel.findByIdAndDelete(id).then(deleted => {

         if (!deleted) {
             return res.status(404).json({ error: 'Document not found' });
         }
         res.status(200).json(deleted); 
     }).catch(err => {
         res.status(500).json({ error: err.message }); // Internal server error
     });
 
}

//delete skill
const deleteSkill = (req, res)=>{

    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id))
     {
       return res.status(404).json({ERROR:`No such skill: ${id}`});
     }

    
    skillModel.then(deleted => {

         if (!deleted) {
             return res.status(404).json({ error: 'Document not found' });
         }
         res.status(200).json(deleted); 
     }).catch(err => {
         res.status(500).json({ error: err.message }); // Internal server error
     });
    }
  

module.exports = {
        getMain,
        postSkill,
        postProject,
        deleteProject,
        deleteSkill 
    };