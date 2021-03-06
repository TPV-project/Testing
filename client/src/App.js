import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'

//Home
import Home from "./componentes/home.componente";
//Productos
import ListarProducto from './componentes/producto/listar-producto.componente';
import CrearProducto from "./componentes/producto/crear-producto.componente";
import EditarProducto from "./componentes/producto/editar-producto.componente";
//Usuarios
import ListarUsuario from "./componentes/usuario/listar-usuario.componente";
import CrearUsuario from "./componentes/usuario/crear-usuario.componente";
import EditarUsuario from "./componentes/usuario/editar-usuario.componente";
//Categorias
import ListarCategoria from "./componentes/categoria/listar-categoria.componente";
import CrearCategoria from "./componentes/categoria/crear-categoria.componente";
import EditarCategoria from "./componentes/categoria/editar-categoria.componente";
//Tickets
import ListarTicket from "./componentes/ticket/listar-ticket.componente";
import CrearTicket from "./componentes/ticket/crear-ticket.componente";
//Cajas
import ListarCaja from "./componentes/caja/listar-caja.componente";
import CrearCaja from "./componentes/caja/crear-caja.componente";
//Cajas
import Login from "./componentes/login/Login.js";

//import EditarCaja from "./componentes/caja/editar-caja.componente";


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Menu />
        </div>
        {/*<!--Rutas Home-->*/}
        <Route path="/" exact component={Home} />
        <Route path="/fake_url" exact component={Home} />
         {/*<!--Rutas Login-->*/}
        <Route exact path="/login" component={Login} />
				{/* <Redirect from="/" to="login" /> */}
        {/*<!--Rutas Usuarios-->*/}
        <Route path="/usuarios" component={ListarUsuario} />
        <Route path="/crear/usuario" component={CrearUsuario} />
        <Route path="/editar/usuario/:id" component={EditarUsuario} />
        {/*<!--Rutas Productos-->*/}
        <Route path="/productos" component={ListarProducto} />
        <Route path="/crear/producto" component={CrearProducto} />
        <Route path="/editar/producto/:id" component={EditarProducto} />
        {/*<!--Rutas Categoria-->*/}
        <Route path="/categorias" component={ListarCategoria} />
        <Route path="/crear/categoria" component={CrearCategoria} />
        <Route path="/editar/categoria/:id" component={EditarCategoria} />
        {/*<!--Rutas Tickets-->*/}
        <Route path="/tickets" component={ListarTicket} />
        <Route path="/crear/ticket" component={CrearTicket} />
        {/*<!--Rutas Cajas-->*/}
        <Route path="/cajas" component={ListarCaja} />
        <Route path="/crear/caja" component={CrearCaja} />
        <Footer />
      </Router>
    )
  }
}
