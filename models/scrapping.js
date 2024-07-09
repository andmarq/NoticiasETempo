const puppeteer = require("puppeteer");
const url = "https://news.google.com/home?hl=pt-BR&gl=BR&ceid=BR%3Apt-419";
const noticiassGoogle = "news.google.com";

 async function buscaInfoWeb() {
    const navegador = await puppeteer.launch({ executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: true });
    const pagina = await navegador.newPage();
    await pagina.goto(url);
    const seletores = ['.vDXQhc', '.gPFEn', '.JrYg1b'];

    await Promise.all(seletores.map(seletor => pagina.waitForSelector(seletor)));

    const noticias = await pagina.evaluate(() => {
        const elementos = document.querySelectorAll('.vDXQhc, .gPFEn, .JrYg1b');
        
        
        const arrayElementos = Array.from(elementos);
    
        const valor = arrayElementos.map(item => {
        
            return {
                url: item.getAttribute('href'),
                descricao: item.textContent
            }
            
        }).filter(item => item.url !== null);

        
        return valor;
    })
    
    noticias.map(item => item.url = `${noticiassGoogle}${item.url.substring(1)}`);
    await navegador.close();
    return noticias;
}




module.exports = {
    buscaInfoWeb
}