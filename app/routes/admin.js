module.exports = function(application){
    application.get('/admin',function(req,res){
        res.render("admin/form_add_noticia")
    })

    application.post('/noticias/salvar',function(req,res){
        var noticia = req.body;
        var NoticiasDAO = new application.app.models.NoticiasDAO(application.config.dbConnect());

        NoticiasDAO.salvarNoticia(noticia,function(error,response){
            res.redirect('/noticias');
        });
    })
}