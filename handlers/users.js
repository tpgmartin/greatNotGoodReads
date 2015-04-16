// Possible actions
// Create user profile
// View user profile
// Edit user profile
// Delete user profile

exports.index = function(req, res){
  res.send('List of users');
};

exports.profile = function(req, res){
  res.send('User profile');
};

exports.create = function(req, res){
  res.send('User profile');
}