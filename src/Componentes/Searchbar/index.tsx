import { HiMagnifyingGlass } from "react-icons/hi2";

import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../store/pageInfoSlice";

import styles from "./index.module.css";
import CONTENTS from "../../Content/Components/Searchbar.json"
import { selectLinguagem } from "../../store/pageInfoSlice";

interface propsType {
    placeholder: string;
}

export const Searchbar = (props: propsType) => {
    const { placeholder } = props;

    const dispatch = useDispatch();
    const Contents = CONTENTS[useSelector(selectLinguagem)];
    
    return(
            <form
                className={styles.search_bar}
                >
                <HiMagnifyingGlass className={styles.lupa}/>
                <input
                    type="text"
                    placeholder={ Contents.Search }
                    onChange={e => {
                        dispatch(setSearch(e.target.value));
                    }}
                />
            </form>
    );
}
