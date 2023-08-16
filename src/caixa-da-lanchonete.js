// OK 1.separar string por caracter para pegar o item e a quantidade
// 2. Compra simples em dinheiro -> R$ 2,85 + 5% desconto (0.95)
// 3. Compra simples em credito -> R$ 3,09 + 3% de juros (1.03)
// 4. Compra simples em debito -> R$ 3,00
// let metodo1 = debito;
// let metodo2 = credito;
// let metodo3 = dinheiro;
class CaixaDaLanchonete {     

    // itens = 'cafe,1';
    // resultado = itens.split (",");

    calcularValorDaCompra(formaDePagamento, itens) {
        if (itens.length == 0) return "Não há itens no carrinho de compra!"
        return "";
    }  


    // calcularValorDaCompra(formaDePagamento, itens){       
    //      if (formaDePagamento == dinheiro)
    //      return "R$" (itens * 0.95);

    //      else if (formaDePagamento == debito)
    //      return "R$" (itens);

    //      else (formaDePagamento == credito)
    //      return "R$" (itens * 1.03);

    //  }

    // 5. compra "com quantidade zero" em "dinheiro" deve resultar em "Quantidade inválida!"
   
    // calcularCompra(formaDePagamento, itens) {
    //     if (itens.length == 0) return "Não há itens no carrinho de compra!"
    //     return "";
    // }  
 }

export { CaixaDaLanchonete };
