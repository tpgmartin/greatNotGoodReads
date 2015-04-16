exports.index = function(req, res){
  res.render('index', {
    title:'Homepage',
    heading: 'Welcome!',
    content: 'Welcome to the homepage'
  });
};
