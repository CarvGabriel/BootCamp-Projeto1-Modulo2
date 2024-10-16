var prods = [
    { id: 1, name: "Bife com batata", price: 30.0 },
    { id: 2, name: "Coxa de Frango Crocante", price: 25.0 },
    { id: 3, name: "Carne de Panela", price: 22.0 },
    { id: 4, name: "Farofa", price: 10.0 },
    { id: 5, name: "Salada", price: 8.0 },
    { id: 6, name: "Torresmo", price: 12.0 },
];

function calc(){
    
    output = document.getElementById("output");
    output.innerHTML = "";
    var quantities  = document.getElementsByName("quantity");
    var total = 0;
   
    
    for (var input of quantities) {
        var id = input.id;

        if (input.value != 0){
            output.innerHTML += `Prato: ${prods[id-1].name}  - Preço unitário: R$${prods[id-1].price} 
                                - Quantidade: ${input.value} - Total: R$${prods[id-1].price * parseFloat(input.value)} </br>`;
            total += prods[id-1].price * parseFloat(input.value);
        }
    }

    output.innerHTML += `Preço Final R$${total}`

} 