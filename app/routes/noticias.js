var moment = require('moment')
module.exports = function(application){

    application.get('/noticias',function(req,res){
        var NoticiasDAO = new application.app.models.NoticiasDAO(application.config.dbConnect());

        NoticiasDAO.getNoticias(function(error,response){

           var result = response.map(function(value){
                 value.data_criacao = moment(value.data_criacao).utc().format('DD/MM/YYYY')
                 value.data_noticia = moment(value.data_noticia).utc().format('DD/MM/YYYY')

                 return value;
            })

            res.render("noticias/noticias",{ noticias : result })
        });
    });

    application.get('/noticias/editar',function(req,res){
        var NoticiasDAO = new application.app.models.NoticiasDAO(application.config.dbConnect());

        NoticiasDAO.getNoticiasId(req.query.id,function(error,response){
            res.render("noticias/editar_noticia",{ noticia : response })
        });
    });
    
    application.get('/noticias/noticia',function(req,res){
        var NoticiasDAO = new application.app.models.NoticiasDAO(application.config.dbConnect());

        NoticiasDAO.getNoticiasId(req.query.id,function(err,response){
        
        if(response.length > 0)
        response[0].data_criacao = moment(response[0].data_criacao).utc().format('DD/MM/YYYY')
        
        res.render("noticias/noticia",{ noticia : response})
        })
    })

    

}