var prods = [
    { id: 1, name: "Bife com batata", price: 30.0 },
    { id: 2, name: "Coxa de Frango Crocante", price: 25.0 },
    { id: 3, name: "Carne de Panela", price: 22.0 },
    { id: 4, name: "Farofa", price: 10.0 },
    { id: 5, name: "Salada", price: 8.0 },
    { id: 6, name: "Torresmo", price: 12.0 },
];

function calc(){

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var contInput = 0;

    if(name != "" && phone != "" && email != ""){
        output = document.getElementById("output");
        output.innerHTML = "";
        var quantities  = document.getElementsByName("quantity");
        var total = 0;
        var formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });

        output.innerHTML += `<div class="name">Caro ${name}</div>`;
        output.innerHTML += `Seguem os dados do seu pedido<br><br>
                            O seu pedido é:<br><br>`;

        
        for (var input of quantities) {
            var id = input.id;

            if (input.value != 0){
                output.innerHTML += `<li>Prato: ${prods[id-1].name}  - Preço unitário: ${formatter.format(prods[id-1].price)} 
                                    - Quantidade: ${input.value} - Total: ${formatter.format(prods[id-1].price * parseFloat(input.value))} </li>`;
                total += prods[id-1].price * parseFloat(input.value);
            }
        }

        output.innerHTML += `<div class="final-price">Preço Final ${formatter.format(total)}</div>`;
    }
    else
        alert("Digite seus dados pessoais");
} 