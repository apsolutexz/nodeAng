var mongoose = require('mongoose');

module.exports = mongoose.model('Pm_Jira', {
	Name : String,
	Phone: String,
	Email: String,
	done : Boolean
});