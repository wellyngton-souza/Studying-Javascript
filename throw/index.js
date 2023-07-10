const validarNumero = (e) =>{
    try{
        if(e > 100){
            throw new Error("número invalido"); // throw faz com que o o programa entenda como invalido
        }
        console.log("funcionou " + e);
    } catch{
        console.log("não funcionou");
    }
}

validarNumero(10000);