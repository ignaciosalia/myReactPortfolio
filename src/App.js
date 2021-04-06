import logo from './logo.svg';
import './App.css';
import Cabeza from './cabeza'//se importa la clase del header, sin poner .js al final de la referencia
import Presentacion from './Presentacion'
import Clientes from  './Clientes'
import Experiencia from './Experiencia'
import Contacto from './Contacto'
import { BrowserRouter as Router} from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'

function App() {
  /**Agregar los estilos con react bootstrap */
  return (
    <div>
      <Cabeza/>
      <Switch>
        <Route path='/Contacto' component={Contacto}/>
        <Route path='/Clientes' component={Clientes}/>
        <Route path='/Experiencia' component={Experiencia}/>
        <Presentacion></Presentacion>
      </Switch>
      
    </div>
    /**TODO agragar React Bootstrap
     * la seccion de clientes y de informacion manejarla como cards de bootstrap
     * Agregar FontAwesome a react para crear la seccion de contacto
     * Crear la seccion de contactame con su formulario :P
     */
  );
}


export default App;
