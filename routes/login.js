var User = require('../lib/user');

exports.submit = function (req, res, next) {
	var data = req.body.user;
	User.authenticate(data.name, data.password, function (err, user) {
		if (err) return next (err);
		if (user) {
			req.session.uid = user.id;
			res.redirect('/');
			console.log('Successful authentication');
		} else {
			res.error("Sorry! invalid user credentials.");
			res.redirect('back');
			console.log('Invalid user credentials');
		}
	});
};

exports.logout = function (req,res) {
	req.session.destroy(function(err) {
		if (err) throw err;
		res.redirect('/');
	})
}