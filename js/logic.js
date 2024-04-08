
function loadImage() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const imageUrl = document.getElementById("imageUrl").value;

    const image = new Image();
    image.onload = function() {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
    image.src = imageUrl;
}

//Agregamos texto al meme
function addTextToMeme(topText, bottomText, topColor, bottomColor) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    //Texto superior
    ctx.font = "48px serif";
    ctx.fillStyle = topColor;
    ctx.textAling = "center"
    ctx.fillText(topText, canvas.width / 2, canvas.height / 2 - 35);

    //Texto inferior
    ctx.font = "48px serif";
    ctx.fillStyle = bottomColor;
    ctx.textAlign = "center";
    ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
}

//Generamos el meme con una funcion
function generateMeme() {
    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value
    const topColor = document.getElementById("topColor").value;
    const bottomColor = document.getElementById("bottomColor").value;
    addTextToMeme(topText, bottomText, topColor, bottomColor);
}

//Descargamos el meme
function downloadMeme() {
    var canvas = document.getElementById("myCanvas");

    canvas.toBlob(function(blob) {
        // Crea un enlace para descargar la imagen
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'meme.png';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, 'image/png');
}
