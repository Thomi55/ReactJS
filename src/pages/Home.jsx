import ItemListContainer from "../components/ItemListContainer";
import App from '../App';

const Home = () => {
    return (
        <div>
            <App />
            <ItemListContainer greeting= "Hola mundo ItemListContainer" />
        </div>
    );
}

export default Home;
