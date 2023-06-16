import sql from 'mssql';
import configDB from '../Models/configDB.js';

export class PersonajeService {
  getList = async (req) => {

    const movies = req.query.movies
    const name = req.query.name
    const age = req.query.age
    const weight = req.query.weight

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
    if (weight) {
      if (cont > 0) {
        query += ' AND'
      } else {
        query += ' WHERE'
      }
      query += ' peso = @pWeight'
      request.input("pWeight", sql.Int, weight)

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

    if (personaje != undefined) {
      personaje.peliculasAsociadas = resultadoPelicula.recordset;
    }



    return personaje;
  }

  insert = async (personaje) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request()
      .input("pImagen", sql.VarChar, personaje?.imagen?? " ")
      .input("pNombre", sql.VarChar, personaje?.nombre?? " ")
      .input("pEdad", sql.Int, personaje?.edad?? 1)
      .input("pPeso", sql.Float, personaje?.peso?? 1 )
      .input("pHistoria", sql.VarChar, personaje?.historia?? " ")
      .query('INSERT INTO Personajes (imagen,nombre, edad, peso, historia) VALUES (@pImagen,@pNombre, @pEdad, @pPeso, @pHistoria)');

    return results.recordset;
  }



  updateById = async (id, personaje) => {
    const pe = await this.getById(id)
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pId", sql.Int, id)
      .input("pImagen", sql.VarChar, personaje?.imagen?? pe?.imagen)
      .input("pNombre", sql.VarChar, personaje?.nombre ?? pe?.nombre)
      .input("pEdad", sql.Int, personaje?.edad ?? pe?.edad)
      .input("pPeso", sql.Float, personaje?.peso ?? pe?.peso)
      .input("pHistoria", sql.VarChar, personaje?.historia ?? pe?.historia)
      .query('UPDATE Personajes SET imagen = @pImagen,nombre = @pNombre, edad = @pEdad, peso = @pPeso, historia=@pHistoria WHERE id =@pId ');

    return results;
  }


  deleteById = async (id) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pId", id).query('DELETE FROM Personajes WHERE @pId = id');

    return results;
  }

}