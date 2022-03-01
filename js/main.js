

let getData = async () => {
    try {
        const apiKey = 'VuIHH7Mn8FelC4tUFaaKyVkZD5eQGAIg';
        const busqueda = 'Cars';
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;
        const response = await fetch(url);
        const body = await response.text();

        let { data } = JSON.parse(body)
        
        var d = data.map((x) => x.images.fixed_height.url);
        
        d.forEach(url => {
            let img = document.createElement('img')
            img.src = url
            results.appendChild(img)
        });

    } catch (error) {
        console.log(error);
    }
}

getData()
