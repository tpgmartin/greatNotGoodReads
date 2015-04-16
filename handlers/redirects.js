exports.notFound = function(req, res){
  res.status(404);
  res.render('index', {
    title:'404: Page not found',
    heading: '404: Page not found',
    content: 'Sorry, we\'ve misplaced that URL or it\'s pointing to something that doesn\'t exist. <a href="/">Head back home</a> to try finding it again.'
  });
};