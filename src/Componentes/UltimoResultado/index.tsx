import { useDispatch, useSelector } from "react-redux";
import { ProximoResultado } from "../";
import { ResultadoInfo } from "./ResultadoInfo";

import styles from "./index.module.css";
import { setEntrar, selectLogin, setCadastro } from "../../store/pageInfoSlice";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import CONTENTS from "../../Content/Components/UltimoResultado.json"
import { selectLinguagem } from "../../store/pageInfoSlice";
=======
>>>>>>> 3ec171b (:lipstick: remocao de trechos inutilizados)

interface propsType {
    fotoSrc: string;
    animal: string;
    dia: string;
    milhares: string [] | number[];
}

export const UltimoResultado = (props: propsType) => {
    const Contents = CONTENTS[useSelector(selectLinguagem)];
    
    let { fotoSrc, dia, animal, milhares } = props;

    if(milhares === undefined)
        milhares = [""];
<<<<<<< HEAD

=======
    
>>>>>>> 3ec171b (:lipstick: remocao de trechos inutilizados)
    const logado = useSelector(selectLogin);

    const dispatch = useDispatch();

    const navigate = useNavigate();
        
    return(
        <div
            className={styles.ultimo_resultado}
            style={{backgroundImage: `url(${fotoSrc})`}}
        >        
            {/*<img src="" alt="animal sorteado"/>*/}
            <ResultadoInfo
                animal={animal}
                dia={dia}
                milhares={milhares}
            />
            <div className={styles.proximo_jogo}>
                <ProximoResultado transparente={true}/>
                <button
                    className={styles.btn}
                    onClick={() => {
                        if(logado) {
                            dispatch(setEntrar(false));
                            dispatch(setCadastro(false));
                            navigate("/tela-investimentos");
                        }
                        else {
                            dispatch(setEntrar(true));
                        }
                    }}
                >
                    { Contents.Investment }
                </button>
            </div>
        </div>
    );
}
