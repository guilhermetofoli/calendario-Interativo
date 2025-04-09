function colorirDia(){
    //Pegra valor de campo de dia//
    let days = document.querySelector('days').value;
    
    //Pega valor de campo de cor//
    let color = document.getElementById('color').value;

    //Pega os elementos da tabela calendario//
    let calendar = document.getElementById('calendar');

    //Verifica se o campo de dia foi preenchido//
    if(!days){
        alert('Campo dia não preenchido!');

    } else if ((days > 0) && (days < 31)){
        //Se o numero de dias está no intervalo//
        //Aplicará a cor na celula do calendário//
        let td = calendar.getElementsByTagName('td');
        td.style.backgroundColor = color;
    } else {
        alert('Favor informar um dia válido!');
    }

    //Guarda a célula da tarefa//
    let elementos = document.querySelectorAll('td');


    let contadorAzul = 0, contadorVerde = 0, contadorRosa = 0, contadorRoxo= 0;

    //Loop para verificar o estilo de cada célula e contar quantas tem e qual cor//

}