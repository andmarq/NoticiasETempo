const noticias = require("../models/scrapping");
const informacoesDeTempo = require("../models/weatherAPi");
const {retornaImg} = require("../models/processaImgTempo");
const { error } = require("console");

renderizarPagina = async (req, res) => {
    try {
        const dados = await informacoesDeTempo.buscaPrevisaoTempo();
        const infoGerais = await informacoesDeTempo.buscaInfoGeraisDeTempo();
        const datas = [dados];
        let dadosDeTempo = datas.map(item => item.data);
        dadosDeTempo = dadosDeTempo.flat();
        const dadosPrevisao = dadosDeTempo.slice(0, 7);
        const dadosProxHora = await informacoesDeTempo.buscaPrevisaoProxHr();
        const dadosTempoProxHora = dadosProxHora.timelines.hourly;
        let horarios = dadosTempoProxHora.map((item, index, array) => {
            return {
                hora: new Date(item.time).toLocaleTimeString(),
                temperatura: item.values.temperature
            };
        });
        horarios = horarios.slice(0,8);
        let horariosFormatados = horarios.map(item => {
            return {
                hora: item.hora.slice(0,5),
                temperatura: parseInt(item.temperatura)
            };
        });

        res.render("tempo", {dados: dadosPrevisao, retornaImg, dadosProxHora: horariosFormatados, dadosGerais: infoGerais.data});
} catch (e) {
    res.status(500).json({ error: e.message });

}
};


renderizarPaginaNoticias = async (req, res) => {
    let dados = await noticias.buscaInfoWeb();
    dados = dados.slice(0,15);
    res.render("noticias", {noticia: dados});
}



module.exports = {
    renderizarPagina,
    renderizarPaginaNoticias

};

