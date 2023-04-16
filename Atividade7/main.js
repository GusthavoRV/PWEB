let opcao = '';
let escolha = '';
let ecolhaComp;
let computador;

let escolhaPlayer = function(escolha){
    opcao = escolha
    computador = parseInt(Math.random() * 3 + 1);
    if (computador == 1 && opcao == 'pedra'){
        alert('Compuatador escolheu PEDRA. Empate!');
    } 
    else if(computador == 2 && opcao == 'papel'){
        alert('Compuatador escolheu PAPEL. Empate')
    }
    else if (computador == 3 && opcao =='tesoura'){
        alert('Compuatador escolheu TESOURA. Empate')
    }
    else if (computador == 1 && opcao == 'papel'){
        alert('Compuatador escolheu PEDRA. Você ganhou');
    } 
    else if(computador == 2 && opcao == 'pedra'){
        alert('Compuatador escolheu PAPEL. Você perdeu')
    }
    else if (computador == 3 && opcao =='pedra'){
        alert('Compuatador escolheu TESOURA. Você ganhou')
    }
    else if (computador == 1 && opcao =='tesoura'){
        alert('Compuatador escolheu PEDRA. Você perdeu')
    }
    else if(computador == 2 && opcao == 'tesoura'){
        alert('Compuatador escolheu PAPEL. Você ganhou')
    }
    else if (computador == 3 && opcao =='papel'){
        alert('Compuatador escolheu TESOURA. Você perdeu')
    }
}

//1 = pedra
//2 = papel
//3 = tesoura

