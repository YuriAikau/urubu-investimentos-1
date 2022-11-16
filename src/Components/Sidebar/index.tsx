import React from "react";

import { BotaoGenerico } from "../BotaoGenerico";

import './index.css';

interface propsType {

}

export const Sidebar = (props: propsType) => {
    return(
        <div className="sidebar">
            <a
                className="parceiro-oficial"
                href="https://www.flamengo.com.br/"
                target="_blank"
                rel="noreferrer"
            >
                <p>Parceiro Oficial</p>
                <img src="/images/flamengo-logo-2020.svg" alt="Logo do Flamengo" />
            </a>

            <BotaoGenerico
                texto="💵 Ganhe $ Grátis"
                href="#"
                fundo={true}
                callback={() => null}
            />
        </div>
    );
}
