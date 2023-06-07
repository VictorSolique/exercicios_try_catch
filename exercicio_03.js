class MeuErro extends Error {
  constructor(message) {
    super(message);
    this.name = "Meu erro";
  }
}

class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  }

  retornarAtributos() {
    try {
      return this.atributos();
    }
    catch(erro) {
      console.log(erro.name +" "+ erro.message);
    }
  }

  atributos() {
    if(this.estudante != "" && this.cosplay != "" && this.nota_cosplay != "") {
      return {
        estudante: this.estudante,
        cosplay: this.cosplay,
        nota_cosplay: this.nota_cosplay
      };
    }
    else 
      throw new MeuErro("Um campo não foi preencido");
    
  }
}

const aluno = new NerdIF("João", "", 9.5);
const atributos = aluno.retornarAtributos();

/*
console.log(atributos.estudante); 
console.log(atributos.cosplay);   
console.log(atributos.nota_cosplay);
*/
