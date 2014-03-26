var User = require('../lib/user');

exports.submit = function(req, res, next) {
	var data = req.body.user;

	//Checking if username is taken
	User.getByName (data.name, function (err, user) {
		if (err) return next(err);
		if (user.id) {
			res.error("Username already taken!");
			console.log("username already exists");
			res.redirect('/#/signup');
		} else {
			user = new User ({
				name: data.name,
				pass: data.password
				//TO-DO Implement Saving down to couch db
			});

			user.save(function(err){
				if (err) return next (err);
				req.session.uid = user.id;
				res.redirect('/#/emailconfirmationpage');
			})
		}
	});
};