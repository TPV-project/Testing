import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class EditarUsuario extends Component {
    constructor(props) {
        super(props);

        this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangeApellidos = this.onChangeApellidos.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRol = this.onChangeRol.bind(this);
        this.onChangeActivo = this.onChangeActivo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nombre: '',
            apellidos: '',
            username: '',
            password: '',
            rol: '',
            activo: true,
            roles: []
        }
    }

    componentDidMount() {
      axios.get('http://localhost:3000/api/usuario/'+this.props.match.params.id)
        .then(response => {
          document.getElementById('activo').checked = response.data.activo;
          this.setState({
            nombre: response.data.nombre,
            apellidos: response.data.apellidos,
            username: response.data.username,
            password: response.data.password,
            activo: response.data.activo,
            rol: response.data.rol
          })
        })
        .catch(function (error) {
          console.log(error);
        })
      axios.get('http://localhost:3000/api/rol')
        .then(response => {
          if(response.data.length > 0) {
            this.setState({
              roles: response.data.map(rol => rol.tipo),
            })
          }
        })
    }

    onChangeNombre(e) {
        this.setState({
            nombre: e.target.value
        });
    }

    onChangeApellidos(e) {
        this.setState({
            apellidos: e.target.value
        });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeRol(e) {
        this.setState({
            rol: e.target.value
        });
    }

    onChangeActivo(e) {
        this.setState({
            activo: e.target.checked
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const usuario = {
          nombre: this.state.nombre,
          apellidos: this.state.apellidos,
          username: this.state.username,
          password: this.state.password,
          rol: this.state.rol,
          activo: this.state.activo
        }

        axios.put('http://localhost:3000/api/usuario/'+this.props.match.params.id, usuario)
            .then(res => console.log(res.data));

        window.location = '/usuario';
    }

    render(){
        return(
            <div>
                <h1 className="mt-3">Editar usuario</h1>
                <form onSubmit={this.onSubmit} className="mt-3">
                    <div className="form-group">
                        <label>Nombre: </label>
                        <input
                        required
                        type="text"
                        className="form-control"
                        value={this.state.nombre}
                        onChange={this.onChangeNombre}
                        />
                    </div>
                    <div className="form-group">
                        <label>Apellidos: </label>
                        <input
                        required
                        type="text"
                        className="form-control"
                        value={this.state.apellidos}
                        onChange={this.onChangeApellidos}
                        />
                    </div>
                    <div className="form-group">
                        <label>Nombre de usuario: </label>
                        <input
                        required
                        type="text"
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contraseña: </label>
                        <input
                        required
                        type="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                        <label>Rol: </label>
                        <select
                          required
                          className="form-control custom-select"
                          value={this.state.rol}
                          onChange={this.onChangeRol}>
                          {
                            this.state.roles.map(function(rol) {
                              return <option
                                key={rol}
                                value={rol}>{rol}
                                </option>;
                            })
                          }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Activo: </label>
                        <input
                        type="checkbox"
                        className="ml-2"
                        id="activo"
                        value={this.state.activo}
                        onChange={this.onChangeActivo}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Modificar" className="btn btn-info"/>
                        <a href="http://localhost:3001/usuario" type="button" className="btn btn-danger ml-3">Cancelar</a>
                    </div>
                </form>
            </div>
        )
    }
}