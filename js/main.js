let results = document.getElementById('results');

let getData = async () => {
    try {
        const apiKey = 'VuIHH7Mn8FelC4tUFaaKyVkZD5eQGAIg';
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;
        const response = await fetch(url);
        const body = await response.text();

        let { data } = JSON.parse(body)

        // console.log(data)
        
        var d = data.map((x) => x);

        console.log(d)

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

getData()
