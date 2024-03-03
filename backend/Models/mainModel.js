const mongoose = require('mongoose');


// Define schema for profile
const profileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true,
        unique: true
    },
    avatarUrl: String,
});


// Define schema for profile
const aboutSchema = new mongoose.Schema({
    pStatement: {
        type: String,
        required: true
    },
    objective: {
        type: String,
        required: true
    },
    communication: {
        type: String,
        required: true,
    },
    leadership: { 
        type: String,
        required: true
    }
});


// Define schema for projects
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: String,
});


// Define schema for skills
const skillSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    iconUrl: String,
}); 

// Define schema for users
const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

// Define schema for comments
const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Reference to User model
    },
});


// Define schema for likes
const likeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Reference to User model
    },
});


// Create models based on schemas
const projectModel = mongoose.model('Project', projectSchema);
const profileModel = mongoose.model('Profile', profileSchema);
const skillModel = mongoose.model('Skill', skillSchema);
const aboutModel = mongoose.model('About', aboutSchema);
const adminModel = mongoose.model('Admin', adminSchema);
const commentModel = mongoose.model('Comment', commentSchema);
const likeModel = mongoose.model('Like', likeSchema);

module.exports = { projectModel, adminModel, commentModel, likeModel, skillModel, profileModel, aboutModel };
