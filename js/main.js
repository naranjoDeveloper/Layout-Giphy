let results = document.getElementById('results');
let input = document.getElementById('input');
let listaSugerencias = document.getElementById('suggest');
let btnBuscar = document.getElementById('buscar');
let searchResults = document.getElementById('searchResults');

buscar.addEventListener('click', () => {
    search(input.value)
})


input.addEventListener('keyup', () => {
    let valor = input.value;

    suggest(valor);

    if (valor === '') {
        listaSugerencias.style.display = 'none';
        searchResults.innerHTML = '';
    }

})

let suggest = async (val) => {
    try {
        listaSugerencias.style.display = 'block';
        const apiKey = 'VuIHH7Mn8FelC4tUFaaKyVkZD5eQGAIg';


        const url = `https://api.giphy.com/v1/tags/related/term=${val}?api_key=${apiKey}&limit=${5}`;
        const response = await fetch(url);
        const body = await response.text();

        let { data } = JSON.parse(body)

        let names = data.map((e) => e.name)

        names.forEach(() => {
            listaSugerencias.innerHTML = '';
        })


        for(let i = 0; i < names.length; i++){
            listaSugerencias.innerHTML += `
                <li class="list-group-item""> 
                <a class="btn btn-lg btn-dark" href="#" onclick="input.value='${names[i]}'; " > ${names[i]} </a>
            </li>
                `
        }



    } catch (error) {
        console.log(error);
    }
}

let getData = async () => {
    try {
        const apiKey = 'VuIHH7Mn8FelC4tUFaaKyVkZD5eQGAIg';


        const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;
        const response = await fetch(url);
        const body = await response.text();

        let { data } = JSON.parse(body)

        // console.log(data)

        var d = data.map((x) => x);

        // console.log(d)

        d.forEach(element => {
            results.innerHTML += `
            <div class="col-sm-3">
                <div class="card my-2">
                    <img src="${element.images.downsized.url}">  
                    <div class="card-body">
                    <h3 class="text-center"> ${element.title} </h3>
                        <p class="card-text">  </p>
                    </div>
                </div>
            </div>
            `
        });

    } catch (error) {
        console.log(error);
    }
}

let search = async (val) => {
    try {
        const apiKey = 'VuIHH7Mn8FelC4tUFaaKyVkZD5eQGAIg';


        const url = `https://api.giphy.com/v1/gifs/search?q=${val}&api_key=${apiKey}&limit=${10}`;


        const response = await fetch(url);
        const body = await response.text();

        let { data } = JSON.parse(body)

        let dataa = data.map((element) => element)

        dataa.forEach((() => searchResults.innerHTML = ''))

        for (let i = 0; i < data.length; i++) {
            searchResults.innerHTML += `
            <div class="col-sm-3">
                <div class="card my-2">
                    <img src="${data[i].images.downsized.url}">  
                    <div class="card-body">
                    <h3 class="text-center"> ${data[i].title} </h3>
                        <p class="card-text">  </p>
                    </div>
                </div>
            </div>
            `
        }

    } catch (error) {
        console.log(error)
    }
}


getData()
