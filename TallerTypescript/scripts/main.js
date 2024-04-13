import { Serie } from './Serie.js';
import { SerieX } from './SerieX.js';
//##################DATA#######################3
var seriesX = [
    new SerieX(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpg"),
    new SerieX(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "https://i.imgur.com/EvKe48G.jpg"),
    new SerieX(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "https://i.imgur.com/TDCEV1S.jpg"),
    new SerieX(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
    new SerieX(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),
    new SerieX(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg")
];
export var serie1 = new Serie("Breaking Bad", "AMC", 5, "breakingBad.png", seriesX);
//##################accesos a los datos HTML y algunas modificaciones#######################3
var serieTable = document.getElementById("Serie");
var serieXTable = document.getElementById("SerieX");
var foot = document.getElementById("avg");
var btnFiltro = document.getElementById("boton-filtro");
var textoBusqueda = document.getElementById("texto-busqueda");
btnFiltro.onclick = filtrarPorNombre;
mostrarDatosSerie(serie1);
mostrarSeriesX(serie1.series);
//##################funciones#######################3
function filtrarPorNombre() {
    var text = textoBusqueda.value;
    text = (text == null) ? "" : text;
    serieXTable.getElementsByTagName("tbody")[0].remove();
    var seriesFiltradas = serie1.series.filter(function (c) { return c.nombre.match(text); });
    mostrarSeriesX(seriesFiltradas);
}
function mostrarDatosSerie(serie) {
    var tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = "\n    <tr><td colspan = 2><img src = \"./".concat(serie.foto, "\" height = \"100\"></td></tr>\n    <tr><td>Nombres:</td><td>").concat(serie.nombre, "</td></tr>\n    <tr><td>Canal:</td><td>").concat(serie.canal, "</td></tr>\n    <tr><td>Temporadas</td><td>").concat(serie.temporadas, "</td></tr>");
    serieTable.appendChild(tbodySerie);
}
function mostrarSeriesX(serie) {
    var seriesTbody = document.createElement("tbody");
    //armar la tabla
    for (var _i = 0, serie_1 = serie; _i < serie_1.length; _i++) {
        var s = serie_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n        <td>".concat(s.numero, "</td>\n        <td>").concat(s.nombre, "</td>\n        <td>").concat(s.canal, "</td>\n        <td>").concat(s.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    } //fin del loop
    serieXTable.appendChild(seriesTbody);
    promedios(serie);
}
function promedios(series) {
    var cantidadSeries = 0;
    var sumaTemporadas = 0;
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var s = series_1[_i];
        cantidadSeries++;
        sumaTemporadas += s.temporadas;
    }
    var promedioTemporadas = sumaTemporadas / cantidadSeries;
    //ahora lo metemos en el html
    var promedioTbody = document.createElement("tr");
    promedioTbody.innerHTML = "<td>El Promedio de temporadas: ".concat(promedioTemporadas, "</td>");
    foot.appendChild(promedioTbody);
}
console.log("El main se corrió correctamente");
