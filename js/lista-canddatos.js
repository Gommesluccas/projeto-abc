//   exemplos gerais de jQuery

const titulo = $('h1');
console.log(titulo);

titulo.text('Relação de Candidatos');

let urlCandidatos = 'http://localhost:3000/candidatos';
const botao = $('#carregar');
const lista = $('#lista');

botao.on('click', function(){
  $.ajax({ // fetch
      url: urlCandidatos,
      dataType: 'json',
      method: 'GET', // leitura de dados
      success: function(resposta){ // then
         $.each(resposta, function(indice, conteudo){
                lista.html(""); // 
                 console.log(indice);
                 console.log(conteudo);

                 lista.append(
                      `<li class="list-group-item">
                      ${conteudo.nome}
                      </li>`
                 );
         }) ;

      }
  });
});