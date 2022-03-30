import CartWidget from "./components/CartWidget.jsx";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
    <a class="navbar-brand">Sneakers</a>
      <a>Categoria 1</a>
      <a>Categoria 2</a>
      <a>Categoria 3</a>
    <form class="d-flex">
      <CartWidget/>
    </form>
  </div>
</nav>
    </div>
  );
}

export default App;
