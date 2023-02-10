import { Header, Sidebar } from "../../Componentes";
import { LoginDropdown } from "../../Popups/LoginDropdown";

import { useSelector } from "react-redux";
<<<<<<< HEAD
import { selectLogin, selectDropdown, selectSidebar, selectCadastro, selectEntrar, selectLinguagem } from "../../store/pageInfoSlice";
=======
import { selectDropdown, selectSidebar, selectCadastro, selectEntrar } from "../../store/pageInfoSlice";
>>>>>>> 3ec171b (:lipstick: remocao de trechos inutilizados)

import styles from "./index.module.css";
import CONTENTS from "../../Content/Pages/Regras.json";
import { Entrar } from "../../Popups";
import { Cadastro } from "../Cadastro";

export const Regras = () => {
	const showDropdown = useSelector(selectDropdown);
    const showEntrar = useSelector(selectEntrar);
    const showCadastro = useSelector(selectCadastro);
    const showSidebar = useSelector(selectSidebar);
    const Contents = CONTENTS[useSelector(selectLinguagem)];

    return(
        <div className={styles.regras}>
            <Header/>
            
            <main className={styles.main}>
                {showSidebar && <Sidebar/>}
                
                <div className={styles.conteudo_principal}>
		    <h1>{Contents.Title}</h1>
		    <p>{Contents.Content}</p>
                    <img src="/imagens/img3.png" alt="Imagem ilustrativa"></img>
                </div>
            </main>

            { showEntrar && <Entrar/> }
			{ showCadastro && <Cadastro/> }
            { showDropdown && <LoginDropdown/> }
        </div>
    );
}
