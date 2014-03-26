
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Noobtube: Earn money pwning noobs!' });
};