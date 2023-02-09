import { useNavigate } from "react-router-dom";
import { ProximoResultado } from "../";

import Content from "../../Content/Components/MeusInvestimentos.json"
import styles from "./index.module.css";
import { useState } from "react";
import { ConfirmacaoSaque } from "../../Popups";
import { investimentosType } from "../../Utils/tipos"

interface propsType {
    investimentos: investimentosType[]; 
}

export const MeusInvestimentos = (props: propsType) => {
    const { investimentos } = props;

    const navigate = useNavigate();

    const [ showSacarDinheiro, setSacarDinheiro ] = useState(false);

    return(
        <div className={styles.meus_investimentos}>
            <div className={styles.proximo_resultado_div}>
                <ProximoResultado transparente={false}/>
                <button
                    className={styles.btn}
                    onClick={() => navigate("/tela-investimentos")}
                >
                    { Content.ButtonInvestement }
                </button>
            </div>

            <p className={styles.frase_motivacional}> { Content.Motivational } </p>
            
            <div className={styles.informacoes_rendimentos}>
                <h3>{ Content.Investment }</h3>
                
                <div className={styles.div_investimentos}>
                    {investimentos.map((investimento, index) => {
                        const {
                            betType,
                            distribution,
                            gameIdAtual,
                            investmentId,
                            investmentOwner,
                            odds,
                            selectedNumber,
                            value
                        } = investimento;
                        return(
                            <div
                                key={index}
                                className={styles.investimento}
                            >
                                <p>{selectedNumber} - ${value},00</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <button
                className={styles.btn}
                onClick={() => {
                    setSacarDinheiro(!showSacarDinheiro);
                }}
            >
                { Content.ButtonWithdraw }
            </button>

            { showSacarDinheiro && <ConfirmacaoSaque fechar={() => setSacarDinheiro(false)}/> }
        </div>
    );
}
