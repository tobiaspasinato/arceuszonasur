
import logo from './../Functions/arceus.webp';
export default function Home() {
    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            El siguiente link te llevara a la pagina oficial de Pokémon (Por si dudas)
            </p>
            <a
            className="App-link"
            href="https://www.pokemon.com/el/pokedex"
            target="_blank"
            rel="noopener noreferrer"
            >
            Go to The Pokéman Company
            </a>
        </header>
        </div>
    )
}