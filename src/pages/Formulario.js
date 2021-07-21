import React, {useState} from "react";
import ConexionApi from "../components/servicio/apiconexion"



function Formulario() {
    const variablesInicio = {
      nombre: "",
      apellidos: " ",
      correo: "",
      comentario: "",
  
    };
  
    const [values, setValues] = useState(variablesInicio);
  
    const onChange = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    };
  
    const guardarPersonas = async () => {
      await ConexionApi.post("/persona/crearPersona", {
        nombre: values.nombre,
        apellidos: values.apellidos,
        correo: values.correo,
        comentario: values.comentario,
        
      }).then((res) => {
        console.log(res);
      });
    };
  
    const onClick = (e) => {
      e.preventDefault();
  
      alert(
        "Los datos son:" +
          values.nombre +
          " " +
          values.apellidos +
          " " +
          values.correo
      );
      guardarPersonas();
      setValues(variablesInicio);
    };
  
    return (
      <form className="form-signin needs-validation" onSubmit={onClick}>
      <section className="login">
        <div className="loginContainer">
        <h2 className="card-title text-dark">Datos de Usuario</h2>
        <h6 className="card-subtitle mb-2 text-muted">
              Ingresar la información requerida
            </h6>
          <label for="validationCustom01" className="form-label">Nombre</label>
          <input
            type="text"
            autoFocus
            name="nombre"
            value={values.nombre}
            onChange={onChange}
            required
          />
  <div className="valid-feedback">Looks good!</div>
          <label for="validationCustom02" className="form-label">Apellidos</label>
          <input
            type="text"
            name="apellidos"
            value={values.apellidos}
            onChange={onChange}
            required
          />
          <div className="valid-feedback">Looks good!</div>
          <label for="validationCustom02" className="form-label">Correo</label>
          <input
            type="email"
            name="correo"
            value={values.correo}
            onChange={onChange}
            required
          />
          <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
  <label for="validationCustom02" type="text"
            name="comentario"
            value={values.comentario}
            onChange={onChange}
            required>Comments</label>
  
</div>
          <div className="valid-feedback">Looks good!</div>
          <div className="btnContainer">
            <button className="btn btn-primary" type="submit">
              Guardar
            </button>
          </div>
        </div>
      </section>
      </form>
  
    );
  }
  
  export default Formulario;

  