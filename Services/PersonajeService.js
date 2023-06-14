import sql from 'mssql';
import configDB from '../Models/configDB.js';

export class PersonajeService {


  getList = async (movies,name,age) => {
    const conn = await sql.connect(configDB);
    let query = 'SELECT Personajes.id, imagen, nombre FROM Personajes'
    let cont = 0

    const request = conn.request()
    if (movies) {
        query += ' INNER JOIN TablaRelacional ON Personajes.id = TablaRelacional.id_personajes WHERE TablaRelacional.id_peliculas = @pMovies'
      request.input("pMovies", sql.Int, movies)
      cont++
    }
    if (name) {
      if (cont > 0) {
        query += ' AND'
      } else {
        query += ' WHERE'
      }
      query += ' nombre = @pName'
      request.input("pName", sql.VarChar, name)
      cont++
    }
    if (age) {
      if (cont > 0) {
        query += ' AND'
      } else {
        query += ' WHERE'
      }
      query += ' edad = @pAge'
      request.input("pAge", sql.Int, age) 
      
    }
    console.log(query)

    const results = await request.query(query)
    return results.recordset;
  }


getById = async (id) => {
  const conn = await sql.connect(configDB);
  const results = await conn.request().input("pId", id).query('SELECT * FROM Personajes WHERE @pId=id');
  const resultadoPelicula = await conn.request().input("pId", id).query('SELECT titulo FROM Peliculas INNER JOIN TablaRelacional ON Peliculas.id = TablaRelacional.id_peliculas WHERE TablaRelacional.id_personajes = @pId');
  const personaje = results.recordset[0];
  console.log(personaje)
  personaje.peliculasAsociadas = resultadoPelicula.recordset;
  console.log(personaje.peliculasAsociadas)
  return personaje;
}

insert = async (personaje) => {
  const conn = await sql.connect(configDB);
  const results = await conn.request()
    .input("pImagen", sql.VarChar, personaje.imagen)
    .input("pNombre", sql.VarChar, personaje.nombre)
    .input("pEdad", sql.Int, personaje.edad)
    .input("pPeso", sql.Float, personaje.peso)
    .input("pHistoria", sql.VarChar, personaje.hisotria)
    .query('INSERT INTO Personajes (imagen,nombre, edad, peso, historia) VALUES (@pImagen,@pNombre, @pEdad, @pPeso, @pHistoria)');

  return results.recordset;
}



updateById = async (id, personaje) => {
  const conn = await sql.connect(configDB);
  const results = await conn.request().input("pId", sql.int, id)
  .input("pImagen", sql.VarChar, personaje.imagen)
  .input("pNombre", sql.VarChar, personaje.nombre)
  .input("pEdad", sql.Int, personaje.edad)
  .input("pPeso", sql.Float, personaje.peso)
  .input("pHistoria", sql.VarChar, personaje.hisotria)
    .query('UPDATE Personajes SET imagen = @pImagen,nombre = @pNombre, edad = @pEdad, peso = @pPeso, historia=@pHistoria, WHERE id =@pId ');

  return results.recordset;
}


deleteById = async (id) => {
  const conn = await sql.connect(configDB);
  const results = await conn.request().input("pId", id).query('DELETE FROM Personajes WHERE @pId = id');

  return results;
}

}