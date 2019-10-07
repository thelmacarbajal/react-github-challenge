import React from 'react'

function FormNewRepo (props) {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label
            for="Identificador del Repositorio"
          >
            Identificador
          </label>
          <input
            type="id"
            className="form-control"
            id="ejemplo id"
            placeholder="Inserta el Identificador del Repositorio"
          />
        </div>
        <div className="form-group">
          <label
            for="name"
          >
            Nombre
          </label>
          <input
            type="name"
            className="form-control"
            id="ejemplo de nombre "
            placeholder="Esto es el nombre del Repositorio"
          />

        </div>
        <div className="form-group">
          <label
            for="name"
          >
            Descripción
          </label>
          <input
            type="descripcion"
            className="form-control"
            id="descripcion"
            placeholder="Escribe de que se trata el repositorio"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          >
          Crear !!
        </button>
      </form>
    </div>
  )

}

export default FormNewRepo
