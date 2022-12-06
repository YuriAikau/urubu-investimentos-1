const animais = [
    {
        nome: "Burro",
        src: "/imagens/animais/burro.jpeg",
    }, 
    {
        nome: "Arara",
        src: "/imagens/animais/arara.jpeg",
    },
    {
        nome: "Lula",
        src: "/imagens/animais/lula.jpeg",
    },
    {
        nome: "Coelho",
        src: "/imagens/animais/coelho.jpeg",
    }, 
    {
        nome: "Cavalo",
        src: "/imagens/animais/cavalo.jpeg",
    }, 
    {
        nome: "Galo",
        src: "/imagens/animais/galo.jpeg",
    },  
    {
        nome: "Pavão",
        src: "/imagens/animais/pavao.jpeg",
    },  
    {
        nome: "Urubu rei",
        src: "/imagens/animais/urubu-rei.jpeg",
    },  
    {
        nome: "Rato",
        src: "/imagens/animais/rato.jpeg",
    },  
    {
        nome: "Caramelo",
        src: "/imagens/animais/rato.jpeg",
    },  
    {
        nome: "Boto",
        src: "/imagens/animais/boto.jpeg",
    },  
    {
        nome: "Peixe boi",
        src: "/imagens/animais/peixe-boi.jpeg",
    },  
    {
        nome: "Capivara",
        src: "/imagens/animais/capivara.jpeg",
    },  
    {
        nome: "Tatu",
        src: "/imagens/animais/tatu.jpeg",
    },  
    {
        nome: "Anta",
        src: "/imagens/animais/anta.jpeg",
    },  
    {
        nome: "Cágado",
        src: "/imagens/animais/cagado.jpeg",
    },  
    {
        nome: "Ornitorrinco",
        src: "/imagens/animais/ornitorrinco.jpeg",
    },  
    {
        nome: "Lobo-guará",
        src: "/imagens/animais/lobo-guara.jpeg",
    },  
    {
        nome: "Calango",
        src: "/imagens/animais/calango.jpeg",
    },  
    {
        nome: "Pombo",
        src: "/imagens/animais/pombo.jpeg",
    },  
    {
        nome: "Flamingo",
        src: "/imagens/animais/flamingo.jpeg",
    },   
    {
        nome: "Pirarucu",
        src: "/imagens/animais/pirarucu.jpeg",
    },  
    {
        nome: "Jacu",
        src: "/imagens/animais/jacu.jpeg",
    },  
    {
        nome: "Pica pau",
        src: "/imagens/animais/pica-pau.jpeg",
    },  
    {
        nome: "Macaco prego",
        src: "/imagens/animais/macaco-prego.jpeg",
    },
];

export const mapeiaNomeAnimal = (n: string): string => {
    let indice = Number(n) % 25;
    return animais[indice].nome.toUpperCase();
}

export const mapeiaSrcAnimal = (n: string): string => {
    let indice = Number(n) % 25;
    return animais[indice].src;
}