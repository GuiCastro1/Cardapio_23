// export const fixedDishes = () => {
    
//     const fixedDishes = [
//         {
//             name: "PARMEGIANA ALCATRA",  
//             price: 43.00
//         },
//         {
//             name: "PARMEGIANA FRANGO",  
//             price: 37.00
//         },
//         {
//             name: "PARMEGIANA BERINJELA",  
//             price: 34.00
//         },
//         {
//             name: "PARMEGIANA FALAFEL",  
//             price: 34.00
//         },
//         {
//             name: "MILANESA ALCATRA",  
//             price: 39.00
//         },
//         {
//             name: "MILANESA FRANGO",  
//             price: 35.00
//         },
//         {
//             name: "MILANESA BERINJELA",  
//             price: 30.00
//         },
//         {
//             name: "CONTRA-FILÉ",  
//             price: 35.60
//         },
//         {
//             name: "FILÉ DE FRANGO",  
//             price: 28.00
//         },
//         {
//             name: "OMELETE",  
//             price: 26.00
//         },
      
//     ]
//     const divFixedDishes = document.querySelector(".fixedDishes");

//     const ul = document.createElement("ul");

//     fixedDishes.forEach(dish => {
//         const li = document.createElement("li");
//         li.classList.add("fixedDish");
//         li.innerHTML = `
//             <h5>${dish.name}</h5>
//             <p>R$ ${dish.price.toFixed(2).replace(".", ",")}</p>
//         `;
//         ul.appendChild(li);
//     });
//     divFixedDishes.appendChild(ul);
// }