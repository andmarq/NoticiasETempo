
const apiKey = "4d3a0c8dabb644bcb1ec79d3aad20a2e";
const apiKey2 = "rfUFZrxC7xmzUOFhYm0kboCBSmk7uJMR";
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


