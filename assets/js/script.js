
function generate(){
    var quotes = {
     "- Clarice Lispector" : '"O mistério do destino humano é que somos fatais, mas temos a liberdade de cumprir ou não o nosso fatal: de nós depende realizarmos o nosso destino fatal."',
     "- Ceclia Meireles" : '"Aprendi com as primaveras a deixar-me cortar e a voltar sempre inteira."',
     "- Adélia Prado" : '"Minha mãe achava estudo a coisa mais fina do mundo. Não é. A coisa mais fina do mundo é o sentimento."',
     "- Cora Coralina" : '"Fiz a escalada da montanha da vida removendo pedras e plantando flores"',
     "- Rachel de Queiroz" : '"Doer, dói sempre. Só não dói depois de morto. Porque a vida toda é um doer."',
     "- Lygia Fagundes Telles" : '"Se o amor na sua doação absoluta os faz mais frágeis, ao mesmo tempo os protege como uma armadura."',
     "- Marina Colasanti" : '"Os seres humanos frequentemente dizem uma coisa e pensam outra, fingem ser o que não são, simulam suas intenções."',
     "- Hilda Hilst" : '"Há sonhos que devem ser ressonhados, projetos que não podem ser esquecidos."',
     "- Conceição Evaristo" : '"O mar vagueia onduloso sob os meus pensamentos. A memória bravia lança o leme: recordar é preciso."',
     "- Ana Cristina Cesar" : '"Angústia é fala entupida."',
     "- Ana Martins Marques" : '"O que nos aconteceu, o que não nos aconteceu têm o mesmo peso no poema."',
     "- Mariana Salomão Carrara" : '"Será que o vaga-lume pisca de dor? Se eu pudesse brilhar de dor eu seria um escândalo."',
     "- Aline Bei" : '"O céu guarda a parte viva da pessoa, aquela coisa que não morre nunca, não a saudade, a saudade é amor e é dos vivos, estou falando da coisa viva que fica nos mortos."',
     "- Maria Firmina dos Reis" : '"Os crus dissabores que eu sofro são tantos, são tantos os prantos, que vivo a chorar. É tanta a agonia, tão lenta e sentida, que rouba-me a vida, sem nunca acabar."',
     "- Martha Medeiros" : '"Desatar os nós que enlaçam atos e motivos. Fazer as coisas por impulso. Por que? Porque às vezes é bom a gente mostrar pra si mesmo quem é que manda aqui."',
     "- Tati Bernardi" : '"É tanta hipocrisia, tanta gente vazia, tanto assunto inútil, que ando com preguiça de conhecer pessoas."',
     "- Noemi Jaffe" : '"Esse trem de morrer de onde ela saiu viva foi a sua vida inteira o que ela foi e é."',
     "- Angélica Freitas" : '"Meu avô não gostava de agosto, dizia agosto mês de desgosto. Quando passava dizia "agora não morro mais"."',
     "- Natália Borges Polesso" : '"Então eu tenho vontade de mergulhar para me curar do amor que ainda não tenho e não sentir a saudade que nem existe."',
     "- Natalia Timerman" : '"Talvez suspeite que olhar de fora imprima à vida alheia uma película de completude; a ilusão de que, no outro, cada sentimento tenha sempre o tamanho certo."'
    }

    var authors = Object.keys(quotes);

    var authors = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[authors];

    document.getElementById("quote").innerHTML = quote;

    document.getElementById("author").innerHTML = authors;
}