    import {
        fundoClaro,
        ConteudoClaro, 
        textoFundoClaro, 
        fundoEscuro,
        conteudoEscuro,
        textoFundoEscuro,
    } from "./variaveis";

    export const temaClaro = {
        body: fundoClaro,
        inside: ConteudoClaro,
        text: textoFundoClaro,
        filter: "",
    };

    export const temaEscuro = {
        body: fundoEscuro,
        inside: conteudoEscuro,
        text: textoFundoEscuro,
        filter: "invert(100%)",
    };
    