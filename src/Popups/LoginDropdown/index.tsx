import { useNavigate } from 'react-router-dom';

<<<<<<< HEAD
=======
import { useDispatch } from "react-redux";
>>>>>>> 3ec171b (:lipstick: remocao de trechos inutilizados)
import { desloga, setDropdown } from "../../store/pageInfoSlice";

import styles from "./index.module.css";
import CONTENTS from '../../Content/Popups/Login.json'
import { useSelector, useDispatch } from "react-redux/es";
import { selectLinguagem } from "../../store/pageInfoSlice";

export const LoginDropdown = () => {
    const Contents = CONTENTS[useSelector(selectLinguagem)];
        const navigate = useNavigate();
        const dispatch = useDispatch();

        return(
            <div className={styles.dropdown}>
                <div
                    className={`${styles.link_dropdown} ${styles.l1}`}
                    onClick={() => {
                        dispatch(setDropdown(false));
                        navigate("/perfil");
                    }}
                >
                    { Contents.Profile }
                </div>
                <div
                    className={styles.link_dropdown}
                    onClick={() => {
                        dispatch(setDropdown(false));
                        navigate("/tela-investimentos");
                    }}
                        
                >
                    { Contents.Investment }
                </div>
                <div
                    className={`${styles.link_dropdown} ${styles.l3}`}
                    onClick={() => {
                        localStorage.clear();
                        dispatch(desloga());
                        dispatch(setDropdown(false));
                        navigate("/");
                    }}
                >
                    { Contents.Logout }
                </div>
            </div>
        );
}
