document.addEventListener("DOMContentLoaded", function() {
    const cryptoDataDiv = document.getElementById("crypto-data");
    const apiKey = fdbf0be9-078e-4e8b-9c36-7c14afedc9ec

    async function fetchCryptoData() {
        try {
            const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=USD', {
                method: 'GET',
                headers: {
                    'X-CMC_PRO_API_KEY': apiKey
                }
            });
            const data = await response.json();
            displayCryptoData(data.data);
        } catch (error) {
            cryptoDataDiv.innerHTML = "<p>Error al obtener los datos.</p>";
        }
    }

    function displayCryptoData(data) {
        let htmlString = "<ul>";
        data.forEach(crypto => {
            htmlString += `<li>${crypto.name}: $${crypto.quote.USD.price.toFixed(2)}</li>`;
        });
        htmlString += "</ul>";
        cryptoDataDiv.innerHTML = htmlString;
    }

    fetchCryptoData();
});
