//a linha de código que os alunos mais ouviram neste semestre são:
window.onload = function () {


//Importar header.html
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            // inserir o conteúdo do header.html no elemento #header
            document.getElementById('header').innerHTML = data;
        });


//Importar footer.html
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            // inserir o conteúdo do footer.html no elemento #footer
            document.getElementById('footer').innerHTML = data;
        });


// API endpoint URL
    var url = 'https://newsapi.org/v2/everything?q="electronic%20waste"OR"e-waste"AND"environment"AND"impact"&sortBy=relevancy&apiKey=5e4a3489dc144b1abb3a7c6cac5b28c7';


// Utilizar o Fetch API para fazer o pedido
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Extrair os dados relevantes
            var articles = data.articles;

            // Obter o element articles div
            var articlesDiv = document.getElementById('articles');

            // Criar um elemento div para cada artigo
            var counter = 0;
            for (let i = 0; i < articles.length; i++) {
                if (counter === 9) {
                    break;
                }
                var article = articles[i];
                // Criar um elemento div para a row
                var rowDiv = document.createElement('div');
                rowDiv.classList.add('row');
                // Criar um elemento de div para o artigo
                var articleDiv = document.createElement('div');
                articleDiv.classList.add('col-4');
                // Inserir a imagem do artigo num elemento img
                var img = document.createElement('img');
                img.src = article.urlToImage;
                img.classList.add('img-fluid');
                articleDiv.appendChild(img);

                // Inserir o link do artigo num elemento a
                var articleLink = document.createElement('a');
                articleLink.href = article.url;
                articleLink.textContent = article.title;
                articleDiv.appendChild(articleLink);

                // Inserir a descrição do artigo num elemento p
                var description = document.createElement('p');
                description.innerHTML = article.description;
                articleDiv.appendChild(description);

                // Anexar div do artigo à div da row
                rowDiv.appendChild(articleDiv);
                // Anexar a div da linha às divs dos artigos
                articlesDiv.appendChild(rowDiv);
                counter++;
            }
        });

}