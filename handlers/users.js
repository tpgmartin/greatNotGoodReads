exports.index = function(req, res){
  res.render('page', {
    title:'users',
    heading: 'Users',
    content: 'List of users'
  });
};

exports.profile = function(req, res){
  res.send('User profile');
};

exports.create = function(req, res){
  res.send('Create user');
}

exports.edit = function(req, res){
  res.send('Edit profile');
}

exports.delete = function(req, res){
  res.send('Delete profile');
}