export const plates = () => {
    const plates = [
        {
            name: "2a VIRADO AO 23",  
            price: 39.80
        },
        {
            name: "3a PICADINHO DE CARNE",  
            price: 36.00
        },
        {
            name: "4a FEIJOADA",  
            price: 41.50
        },
        {
            name: "5a MASSA",  
            price: 35.00
        },
        {
            name: "6a PEIXE",  
            price: 38.00
        },
        {
            name: "Sábado FEIJOADA",  
            price: 41.50
        },
        
    ];

    const divPlates = document.querySelector(".plates");

    const ul = document.createElement("ul");

    plates.forEach(plate => {
        const li = document.createElement("li");
        li.classList.add("plate");
        li.innerHTML = `
            <h5>${plate.name}</h5>
            <p>R$ ${plate.price.toFixed(2).replace(".", ",")}</p>
        `;
        ul.appendChild(li);
    });
    divPlates.appendChild(ul);
}