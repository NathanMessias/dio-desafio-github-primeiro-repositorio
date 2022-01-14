// URL de acesso
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catImg = document.getElementById('imgCat');

// Função
const getCats = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();
        
        return json.webpurl;
    }catch(e){
        console.log(e.message)
        return ''
    }
}

const chamarFuncao = async () => {
    catImg.src = await getCats();
}

chamarFuncao()