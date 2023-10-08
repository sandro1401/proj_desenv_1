const alunoNegocio = require('./negocio/aluno_negocio')
const pagamentoNegocio = require('./negocio/pagamento_negocio')

async function main() {

//     // ---------------- TESTES ALUNOS ------------------------
    // SUCESSO: INSERIR aluno NOVO:
    // try {
    //     const alunoInserido1 = await alunoNegocio.inserir({sexo: "M", nome: "Aluno1", cpf: 678, dt_nascimento: "16/10/2000", telefone:'51995999531', email: "aluno1@gmail.com",  status: "Ativo", plano: "30 dias", idusuario: 1, idpagamento: 1  })
    //     console.log("aluno1 Inserido", alunoInserido1);
    // }catch(err) {
    //     console.log(err)
    // }

//     // SUCESSO: INSERIR aluno NOVO:
//     try {
//         const alunoInserido2 = await alunoNegocio.inserir({nome: "aluno2",  cpf: 111111111, email: "aluno2@gmail.com", telefone:519999999, dta_nascimento: "10/12/2000",sexo: "F", avaliacao_fisica: "saúde perfeita"})
//         console.log("aluno2 Inserido", alunoInserido2);
//     }catch(err) {
//         console.log(err)
//     }
    
//     // INSUCESSO: INSERIR aluno COM CPF JÁ EXISTENTE NO BD:
//     try {
//         const alunoInserido1 = await alunoNegocio.inserir({nome: "aluno1", cpf:12345678, email: "aluno1@gmail.com", telefone:519999999, dta_nascimento: "16/10/2000", sexo: "M", avaliacao_fisica: "saúde perfeita"})
//         console.log("aluno Inserido", alunoInserido1);
//     }catch(err) {
//         console.log(err)
//     }
    
//     //INSUCESSO: PARÂMETRO CPF VAZIO:
//     try {
//         const alunoInserido2 = await alunoNegocio.inserir({nome: "alunoY", email: "alunoY@gmail.com", telefone:51888888, dta_nascimento: "11/01/2000", sexo: "M", avaliacao_fisica: "saúde perfeita"})
//         console.log("aluno Inserido", alunoInserido2);
//     }catch(err) {
//         console.log(err)
//     }

//     // INSUCESSO: PARÂMETRO NOME VAZIO:
//     try {
//         const alunoInseridoX = await alunoNegocio.inserir({cpf: 1234567, email: "alunoX@gmail.com", telefone:519999999, dta_nascimento: "11/01/2000", sexo: "M", avaliacao_fisica: "saúde perfeita"})
//         console.log("aluno Inserido", alunoInseridoX);
//     }catch(err) {
//         console.log(err)
//     }

    // SUCESSO: LISTAR alunoS:
    try {
        const listaalunos = await alunoNegocio.listar();
        console.log("Lista de alunos",listaalunos);
    }catch(err){
        console.log(err)
    }

//     // SUCESSO: BUSCAR ID_aluno 2:
//     try {
//         const aluno1 = await alunoNegocio.buscarPorId(1);
//         console.log("aluno ID = 1", aluno1);
//     }catch(err){
//         console.log(err)
//     }

//     // INSUCESSO: BUSCAR ID 100 (INEXISTENTE):
//     try {
//         const aluno100 = await alunoNegocio.buscarPorId(100);
//         console.log("aluno ID = 100", aluno100);
//     }catch(err){
//         console.log(err)
//     }

//     //SUCESSO: BUSCAR NOME QUE POSSUI LETRA 'A':
//     try {
//         const aluno_letra_A = await alunoNegocio.buscarPorNome('a');
//         console.log("Buscar aluno nome com letra = a", aluno_letra_A);
//     }catch(err){
//         console.log(err)
//     }

//     // INSUCESSO: BUSCAR NOME QUE POSSUI LETRA INEXISTENTE:
//     try {
//         const aluno_letra_W = await alunoNegocio.buscarPorNome('W');
//         console.log("Buscar aluno nome com letra = W", aluno_letra_W);
//     }catch(err){
//         console.log(err)
//     }


//     //SUCESSO: BUSCAR POR CPF 12345678:
//     try {
//         const aluno12345678 = await alunoNegocio.buscarPorCpf(12345678);
//         console.log("Buscar aluno CPF = 12345678", aluno12345678);
//     }catch(err){
//         console.log(err)
//     }

//     //INSUCESSO: BUSCAR POR CPF INEXISTENTE:
//     try {
//         const aluno000 = await alunoNegocio.buscarPorCpf(7890);
//         console.log("Buscar aluno documento = 7890", aluno000);
//     }catch(err){
//         console.log(err)
//     }

// // SUCESSO: BUSCAR POR EMAIL:
    // try {
    //     const alunoXX = await alunoNegocio.buscarPorEmail("aluno1@gmail.com");
    //     console.log("Buscar aluno Email = aluno1@gmail.com ", alunoXX);
    // }catch(err){
    //     console.log(err)
    // }

// // INSUCESSO: BUSCAR POR EMAIL INEXISTENTE:
// try {
//     const alunoXXX = await alunoNegocio.buscarPorEmail("aluno1@Terra.com");
//     console.log("Buscar aluno Email = aluno1@Terra.com ", alunoXXX);
// }catch(err){
//     console.log(err)
// }


//SUCESSO: BUSCA POR TELEFONE
// try {
//     const alunoBuscadoPorTef = await alunoNegocio.buscarPorTelefone(51998639421);
//     console.log("Buscar aluno Telefone = 519999999", alunoBuscadoPorTef);
// }catch(err){
//     console.log(err)
// }

//INSUCESSO: BUSCA POR TELEFONE INEXISTENTE
// try {
//     const alunoBuscadoPorTef = await alunoNegocio.buscarPorTelefone(5199863321);
//     console.log("Buscar aluno Telefone = 519393939", alunoBuscadoPorTef);
// }catch(err){
//     console.log(err)
// }




//     //SUCESSO: ATUALIZA Por ID 1:
    // try {
    //     const alunoAtualizado = await alunoNegocio.atualizar(4, {nome: "aluno2", cpf: 64523556400, email: "aluno2@gmail.com", telefone:51998639421,  dta_nascimento: "04/01/1990", sexo: "F",avaliacao_fisica: "Saúde OK"});
    //     console.log("aluno atualizado", alunoAtualizado);
    // }catch(err){
    //     console.log(err)
    // }

//     //INSUCESSO: ATUALIZA ID 100 INEXISTENTE:
//     try {
//         const alunoAtualizado = await alunoNegocio.atualizar(100, {nome: "aluno1", cpf: 12345678, email: "alunoXXX@gmail.com", telefone:123,  dta_nascimento: "10/10/2000", sexo: "M",avaliacao_fisica: "saúde sob cuidados(HiperTenso)"});
//         console.log("aluno atualizado", alunoAtualizado);
//     }catch(err){
//         console.log(err)
//     }

//     // INSUCESSO: PARÂMETRO DOCUMENTO É STRING:
//     try {
//         const alunoAtualizado = await alunoNegocio.atualizar(1, { nome: "aluno1", cpf: "xxxxxx", email: "alunoXXX@gmail.com", telefone:123,  dta_nascimento: "10/10/2000", sexo: "M",avaliacao_fisica: "saúde sob cuidados(HiperTenso)"});
//         console.log("aluno atualizado", alunoAtualizado);
//     }catch(err){
//         console.log(err)
//     }

//     // SUCESSO: DELETAR por ID 1:
//     try {
//         const alunoDeletado = await alunoNegocio.deletar(1);
//         console.log("aluno deletado !!! ", alunoDeletado);
//     }catch(err){
//         console.log(err)
//     }

//     // INSUCESSO: DELETAR Aluno com ID_aluno 100(INEXISTENTE):
//     try {
//         const alunoDeletado = await alunoNegocio.deletar(100);
//         console.log("aluno deletado", alunoDeletado);
//     }catch(err){
//         console.log(err)
//     }

 // SUCESSO: LISTAR PAGAMENTOS:
 try {
    const listarPagamentos = await pagamentoNegocio.listar();
    console.log("Lista de pagamentos",listarPagamentos);
}catch(err){
    console.log(err)
}




}



module.exports = {
    main
}