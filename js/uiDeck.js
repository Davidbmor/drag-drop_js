export const uiDeck = {
    init: () => {
        const cards = [];

        ['oros', 'copas', 'espadas', 'bastos'].forEach((palo) => {
            for (let i = 1; i <= 12; i++) {
                cards.push({
                    palo: palo,
                    numero: i
                });
            }
        });

        return cards; 
    },

    generar: (contenedorSelector) => {
        const baseContainer = document.querySelector(contenedorSelector);
        if (!baseContainer) {
            console.error("Contenedor base no encontrado.");
            return;
        }

        const cards = uiDeck.init(); 
        const cartasWrapper = document.createElement("div"); 
        cartasWrapper.style.display = "flex";
        cartasWrapper.style.flexWrap = "wrap"; 

        cards.forEach((card) => {
            const clonedContainer = baseContainer.cloneNode(true);
            clonedContainer.style.display = "flex"; 
            const children = clonedContainer.children;
            if (children.length >= 3) {
                children[0].textContent = card.numero; 
                children[1].textContent = card.palo;   
                children[2].textContent = card.numero; 
            }

            cartasWrapper.appendChild(clonedContainer);
        });
        document.body.appendChild(cartasWrapper);
    }
}