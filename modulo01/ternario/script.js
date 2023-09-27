let isMember = true;

let shipping = isMember ? 2 : 10;

console.log(isMember ? `Você é membro então paga R$${shipping} de frete` : `Você não é membro então tem que pagar R$${shipping} de frete`);
console.log(`Frete: ${shipping}`);
