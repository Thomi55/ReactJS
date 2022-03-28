import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
    <a class="navbar-brand">Sneakers</a>
    <a>Categoria 1</a>
    <a>Categoria 2</a>
    <a>Categoria 3</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  );
}

export default App;
