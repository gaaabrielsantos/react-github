import { useEffect, useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/formulario";
import ReposList from "./components/ReposList";

function App() {
    const [formularioVisivel, setFormularioVisivel] = useState(true);
    const [nomeUsuario, setNomeUsuario] = useState('');

    return (
        <>
            <h1>Digite o nome do seu perfil no Github</h1>
            <input className="input" type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
            {nomeUsuario.length > 4 && (
                <>
                    <Perfil nomeUsuario={nomeUsuario} />
                    <ReposList nomeUsuario={nomeUsuario} />
                </>
            )}

            {/* {
                formularioVisivel && (
                    <Formulario />
                )
            }
            <button onClick={() => setFormularioVisivel(!formularioVisivel)} type="button">toggle form</button> */}
        </>
    )
}

export default App;
