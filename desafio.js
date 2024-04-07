let nomeHeroi = "Batman"
let heroiXp = Math.random() * 15000;
heroiXp = Math.round(heroiXp);

if(heroiXp <1000){
    console.log(`O ${nomeHeroi} está com ${heroiXp} XP e está no nível Ferro!`);
}else if(heroiXp >1000 && heroiXp <=2000){
    console.log(`O ${nomeHeroi} está com ${heroiXp} XP e está no nível Bronze!`);
}else if(heroiXp >2000 && heroiXp <=5000){
    console.log(`O ${nomeHeroi} está com ${heroiXp} XP e está no nível Prata!`);
}else if(heroiXp >5000 && heroiXp <=7000){
    console.log(`O ${nomeHeroi} está com ${heroiXp} XP e está no nível Ouro!`);
}else if(heroiXp >7000 && heroiXp <=8000){
    console.log(`O ${nomeHeroi} está com ${heroiXp} XP e está no nível Diamante!`);
}else if(heroiXp >8000 && heroiXp <=9000){
    console.log(`O ${nomeHeroi} está com ${heroiXp} XP e está no nível Ascendente!`);
}else if(heroiXp >9000 && heroiXp <=10000){
    console.log(`O ${nomeHeroi} está com ${heroiXp} XP e está no nível Imortal!`);
}else{
    console.log(`O ${nomeHeroi} está com ${heroiXp} XP e está no nível Radiante!`);
}

console.log("-----------------------------------------------");
console.log(`Herói: ${nomeHeroi}`);
console.log(`XP: ${heroiXp}`);
console.log(`O ${nomeHeroi} é realmente um herói muito poderoso`);
console.log("-----------------------------------------------");

