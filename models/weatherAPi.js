require('dotenv').config();
const apiKey = process.env.API_KEY1;
const apiKey2 = process.env.API_KEY2;
const latitude = "-21.10474";
const longitude = "-41.37566";
const cidade = "MimosodoSul.ES"; // Correção no nome da cidade
const endpointInfoGerais = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${apiKey}&lang=en`;
const estado = "ES";
const endpointPrevisao = `https://api.weatherbit.io/v2.0/forecast/daily?city=${cidade}&state=${estado}&country=BR&key=${apiKey}&lang=pt`;
const endpointPrevisaoProxHora = `https://api.tomorrow.io/v4/weather/forecast?location=${latitude},${longitude}&apikey=${apiKey2}`


async function buscaInfoGeraisDeTempo() {
    const reequisicao = await fetch(endpointInfoGerais);
    return await reequisicao.json();
}

async function buscaPrevisaoTempo() {
    const requisicao = await fetch(endpointPrevisao);
    return await requisicao.json();
}

async function buscaPrevisaoProxHr () {
    const requisicao = await fetch(endpointPrevisaoProxHora);
    return await requisicao.json();
}





module.exports = {
   buscaInfoGeraisDeTempo, buscaPrevisaoTempo, buscaPrevisaoProxHr
}


