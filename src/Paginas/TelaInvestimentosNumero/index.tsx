import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from './../../services/api';

import { Header, Sidebar, CardPerfil } from "../../Componentes";
import { LoginDropdown } from "../../Popups/LoginDropdown";

import { useSelector, useDispatch } from "react-redux";
import { loga, desloga, selectLogin, selectDropdown } from "../../store/pageInfoSlice";
import { selectNomeUsuario, selectSaldo } from "../../store/userInfoSlice";

import CONTENTS from "../../Content/Pages/TelaInvestimentosNumero.json"
import styles from './index.module.css';

const Contents = CONTENTS["pt-Br"];

export const TelaInvestimentoNumero = () => {
    const investmentOwner = localStorage.getItem("profileId");

    const [ sidebar, setSidebar ] = useState(false);
    const [ betType, setBetType ] = useState("D");
    const [ selectedNumber, setSelectedNumber ] = useState("");
    const [ distribution, setDistribution ] = useState("N");
    const [ value, setValue ] = useState(0);

    const navigate = useNavigate();

    async function investmentHandler(e:any){
        e.preventDefault();

        console.log(investmentOwner);

        const odds: number = 100;

        const investmentData = {
            selectedNumber,
            betType,
            distribution,
            value,
            odds
        }

        try{
            const investmentInfo = await api.post("/tela-investimentos", investmentData, {
                headers: {
                    Authorization: investmentOwner,
                }
            });

            navigate("/perfil");
        }catch(err){
            console.error(err);
            alert("Houve um erro ao criar o investimento, tente novamente");
        }
    }

    const dispatch = useDispatch();
    const showDropdown = useSelector(selectDropdown);

    return(
        <div className={styles.tela_investimentos_numero}>
            <Header
                abreCadastro={() => null}
                fechaCadastro={() => null}
                abreEntrar={() => null}
                fechaEntrar={() => null}
                toggleSidebar={() => setSidebar(anterior => !anterior)}
            />

            <div className={styles.main_content}>
                { sidebar && <Sidebar/> }
                <CardPerfil
                    nome="David Messias"
                    saldo={0}
                    investimentos={0}
                    lucrou={0}
                    cartoes={[]}
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
                                { Contents.Investment.Types.map((element) => {return ( <option value={ element.charAt(0) }>{ element }</option>)})}
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
                                { Contents.Investment.Distributions.map((element) => { return ( <option value={ element.charAt(0) }>{ element }</option>)})}
                            </select>

                            <p>{ Contents.Investment.Value }</p>
                            <input
                                type="number"
                                min={0.00}
                                max={10000.00}
                                step={0.01} 
                                placeholder="0.00"
                                value={value}
                                onChange={e => setValue(Number(e.target.value))}
                                required
                            />
                        </section>
                        <button type="submit">{ Contents.Investment.Invest }</button>
                    </form>
                </div>
            </div>

            { showDropdown && <LoginDropdown sair={() => {}}/> }
        </div>
    );
}
