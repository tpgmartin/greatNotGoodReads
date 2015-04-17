exports.index = function(req, res){
  res.send('List of books');
};

exports.profile = function(req, res){
  res.send('Book profile');
};

exports.create = function(req, res){
  res.send('Create book');
}

exports.edit = function(req, res){
  res.send('Edit book profile');
}

exports.delete = function(req, res){
  res.send('Delete book');
}