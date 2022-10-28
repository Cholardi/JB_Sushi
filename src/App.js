import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
            </header>
            <section>
                <ItemListContainer greeting="Sushi de Autor"/>
                <ItemListContainer greeting="🍣 Eventos de Sushi"/>
            </section>
        </div>
    );
}

export default App;
