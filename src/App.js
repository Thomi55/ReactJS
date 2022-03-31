import CartWidget from "./components/CartWidget.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import './App.css';

const App = () => {
  return (
  <div className="App">
      <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
    <a className="navbar-brand">Sneakers</a>
      <a>Categoria 1</a>
      <a>Categoria 2</a>
      <a>Categoria 3</a>
    <form className="d-flex">
      <CartWidget/>
    </form>
    </div>
      </nav >
      <h4><ItemListContainer/></h4>
  </div>
  );
}

export default App;
