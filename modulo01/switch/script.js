let profession = "Atleta";

console.log(`Profissão: ${profession}`)

switch(profession) {
    case 'fiscal':
        console.log("sua camisa será verde");
        break;
    case 'bombeiro':
        console.log("sua camisa será vermelha");
        break;
    case 'policial':
        console.log("sua camisa será azul");
        break;
    default:
        console.log("Sua camisa será preta");
        break;
}