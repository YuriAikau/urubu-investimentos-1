import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from './../../services/api';

import { Header, Sidebar, CardPerfil } from "../../Componentes";
import { LoginDropdown } from "../../Popups/LoginDropdown";

import { useSelector, useDispatch } from "react-redux";
import { selectDropdown, selectCadastro, selectEntrar, selectSidebar, selectLinguagem } from "../../store/pageInfoSlice";
import { adicionaInvestimento, selectInvestimentos, selectNomeUsuario, selectSaldo, setSaldo } from "../../store/userInfoSlice";

import CONTENTS from "../../Content/Pages/TelaInvestimentosNumero.json"
import styles from './index.module.css';
import { Entrar } from "../../Popups";
import { Cadastro } from "../Cadastro";

export const TelaInvestimentoNumero = () => {
    const investmentOwner = localStorage.getItem("profileId");

	const showDropdown = useSelector(selectDropdown);
    const showEntrar = useSelector(selectEntrar);
    const showCadastro = useSelector(selectCadastro);
    const showSidebar = useSelector(selectSidebar);
    const dispatch = useDispatch();
    
    const nomeUsuario = useSelector(selectNomeUsuario);
    const saldo = useSelector(selectSaldo);
    const investimentos = useSelector(selectInvestimentos);

    const Contents = CONTENTS[useSelector(selectLinguagem)];

    const [ betType, setBetType ] = useState("D");
    const [ selectedNumber, setSelectedNumber ] = useState("");
    const [ distribution, setDistribution ] = useState("N");
    const [ value, setValue ] = useState(0);

    const navigate = useNavigate();

    const odd : {[DN:string]:number} = {
        "DN" : 2,
        "DC" : 8,
        "CN" : 16,
        "CC" : 64,
        "MN" : 128,
        "MC" : 1234567891011121,
    }

    async function investmentHandler(e:any){
        e.preventDefault();

        const odds: number = odd[betType+distribution];

        const investmentData = {
            selectedNumber,
            betType,
            distribution,
            value,
            odds
        }

        try{
            const diff = saldo - value;
            if (diff < 0) throw new Error("Saldo insuficiente!");

            await api.post("/tela-investimentos", investmentData, {
                headers: {
                    Authorization: investmentOwner,
                }
            });

            await api.put('/perfil', { balance: diff}, {
                headers: {
                    Authorization: investmentOwner,
                }
            });

            dispatch(setSaldo(diff));
            dispatch(adicionaInvestimento(investmentData))

            navigate("/perfil");
        }catch(err){
            alert(err);
        }
    }

    return(
        <div>
            <Header/>
            <div className={styles.tela_investimentos_numero}>
                { showSidebar && <Sidebar/> }

                <div className={styles.main_content}>
                    <CardPerfil
                        nome={nomeUsuario}
                        saldo={saldo}
                        investimentos={investimentos.length}
                    />

                    <div className={styles.form}>
                        <form onSubmit={investmentHandler}>
                            <h1>{ Contents.Title }</h1>
                            <section>
                                <p>{ Contents.Investment.TitleTypes }</p>
                                <select
                                    value={betType}
                                    onChange={e => setBetType(e.target.value)}
                                    required
                                >
                                    { Contents.Investment.Types.map((element, index) => {return ( <option value={ element.charAt(0) } key={index}>{ element }</option>)})}
                                </select>
                                
                                <p>{ Contents.Investment.Number }</p>
                                <input
                                    pattern="[0-9]{4}"
                                    maxLength={4}
                                    minLength={4}
                                    placeholder="0000"
                                    value={selectedNumber}
                                    onChange={e => setSelectedNumber(e.target.value)}
                                    required
                                />
                                <p>{ Contents.Investment.TitleDistribution }</p>
                                <select
                                    value={distribution}
                                    onChange={e => setDistribution(e.target.value)}
                                    required
                                >
                                    { Contents.Investment.Distributions.map((element, index) => { return ( <option value={ element.charAt(0) } key={index}>{ element }</option>)})}
                                </select>

                                <p>{ Contents.Investment.Value }</p>
                                <input
                                    type="number"
                                    min={10.00}
                                    max={10000.00}
                                    step={0.01} 
                                    placeholder="0.00"
                                    // value={value}
                                    onChange={e => setValue(Number(e.target.value))}
                                    required
                                />
                            </section>
                        <p><b>Odds: {odd[betType+distribution]} x</b></p>
                            <button
                                type="submit"
                                className={styles.submit_btn}
                            >
                                { Contents.Investment.Invest }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            { showEntrar && <Entrar/> }
			{ showCadastro && <Cadastro/> }
            { showDropdown && <LoginDropdown/> }
        </div>
    );
}
function dispatch(arg0: { payload: any; type: "userInfo/setSaldo"; }) {
    throw new Error("Function not implemented.");
}

