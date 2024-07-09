const imgLegenda = [
    { codes: [200, 201, 202], urlDia: "./views/weatherApiImgs/TrovoadaComChuvaFracaDia.png", urlNoite: "./views/weatherApiImgs/TrovoadaComChuvaFracaNoite.png" },
    { codes: [230, 231, 232, 233], urlDia: "./views/weatherApiImgs/TempestadeComChuvaForteDia.png", urlNoite: "./views/weatherApiImgs/TempestadeComChuvaForteDia.png" },
    { codes: [300, 301, 302], urlDia: "./views/weatherApiImgs/Chuvisco.png" },
    { codes: [500, 501, 511, 900], urlDia: "./views/weatherApiImgs/ChuvaLeve.png" },
    { codes: [502], urlDia: "./views/weatherApiImgs/ChuvaPesada.png" },
    { codes: [520, 521, 522], urlDia: "./weatherApiImgs/ChuvaLeve.png", urlNoite: "./views/weatherApiImgs/ChuvaLeveNoite.png" },
    { codes: [600, 601, 602, 622], urlDia: "./views/weatherApiImgs/ChuvaPoucaNeveNoite.png" },
    { codes: [610, 621], urlDia: "./views/weatherApiImgs/ChuvaPoucaNeveDia.png", urlNoite: "./views/weatherApiImgs/ChuvaPoucaNeveNoite.png" },
    { codes: [611, 612], urlDia: "./views/weatherApiImgs/ChuvaPoucaNeveNoite.png" },
    { codes: [621], urlDia: "./views/weatherApiImgs/ChuvaPoucaNeveNoite.png", urlNoite: "./views/weatherApiImgs/ChuvaPoucaNeveNoite.png" },
    { codes: [700, 711, 721, 731, 741, 751], urlDia: "./views/weatherApiImgs/ChuvaPoucaNeveNoite.png", urlNoite: "./views/weatherApiImgs/ChuvaPoucaNeveNoite.png" },
    { codes: [800], urlDia: "./views/weatherApiImgs/ChuvaPoucaNeveNoite.png" },
    { codes: [801, 802], urlDia: "./views/weatherApiImgs/PoucasNuvensDia.png", urlNoite: "./views/weatherApiImgs/PoucasNuvensNoite.png" },
    { codes: [803, 804], urlDia: "./views/weatherApiImgs/NuvensDia.png" }
];

function retornaImg(codigo) {
    const codigoNumber = Number(codigo);
    const idEncontrado = imgLegenda.find(item => item.codes.includes(codigoNumber));
    if (!idEncontrado) return ""; 
    const hora = new Date().getHours();
    return hora >= 6 && hora < 18 ? (idEncontrado.urlDia || "") : (idEncontrado.urlNoite || idEncontrado.urlDia || "");
}

module.exports = {
    retornaImg
}