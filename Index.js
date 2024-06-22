// Definindo variáveis
var qt_vitoria = 1;
var qt_derrota = 6;


var nivelDoHeroi;
var saldo;

// Calcula o saldo de vitórias

if (qt_vitoria > 10) {
  nivelDoHeroi = "Ferro";

}
else if (qt_vitoria < 10) {
  nivelDoHeroi = "Não Classificado";
} else if (qt_vitoria >= 10 && qt_vitoria <= 20) {
  nivelDoHeroi = "Bronze";
}

else if (qt_vitoria > 20 && qt_vitoria <= 30) {
  nivelDoHeroi = "Prata";
}

else if (qt_vitoria > 30 && qt_vitoria <= 40) {
  nivelDoHeroi = "Ouro";
}

else if (qt_vitoria > 40 && qt_vitoria <= 50) {
  nivelDoHeroi = "Platina";
}

else if (qt_vitoria > 50 && qt_vitoria <= 60) {
  nivelDoHeroi = "Diamante";
}

else if (qt_vitoria > 60 && qt_vitoria <= 70) {
  nivelDoHeroi = "Lendário";
}

else if (qt_vitoria > 70 && qt_vitoria <= 80) {
  nivelDoHeroi = "Imortal";
}

// Exibe a mensagem com o nome e o nível do herói
console.log("O Herói está no nível de " + nivelDoHeroi);
