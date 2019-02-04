function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias',callback);
}
NoticiasDAO.prototype.getNoticiasId = function(id,callback){
    this._connection.query(`select * from noticias where id_noticia = ${id}`,callback);
}
NoticiasDAO.prototype.salvarNoticia = function(noticia,callback){
    this._connection.query(`insert into noticias set ? `,noticia,callback);
}
NoticiasDAO.prototype.editarNoticia = function(noticia,callback){
    this._connection.query(`update noticias set ? where id_noticia = ${noticia.id}`,noticia,callback);
}

module.exports = function(){
    return NoticiasDAO;
}


