exports.index = function(req, res){
  res.render('page', {
    title:'Homepage',
    heading: 'Welcome!',
    content: 'Welcome to the homepage'
  });
};
