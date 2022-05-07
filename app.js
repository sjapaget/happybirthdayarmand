fetch("https://poetrydb.org/random/1")
    .then(response => response.json())
    .then(data => {
        alert('Happy Birthday Armand!')
        const displayTitle = document.getElementById("poem-title");
        const displayAuthor = document.getElementById("poem-author");
        const displayText = document.getElementById("poem-text");

        const poemTitle = data[0].title;
        const poemAuthor = data[0].author;
        const poemLinesArr = data[0].lines
             

        displayTitle.textContent = poemTitle;
        displayAuthor.textContent = poemAuthor;

        for (line in poemLinesArr){
            displayText.innerHTML += `${poemLinesArr[line]}<br>`
        }
    })