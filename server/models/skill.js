var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SkillSchema = new Schema({
    user_id: {type: String, required: true},
    skill: {type: String, required: true},
    years: {type: Number, required: true}
});

module.exports = mongoose.model('Skill', SkillSchema);
