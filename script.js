fetch('https://ipinfo.io/json?token=4b225a21b1afa1')
    .then(response => response.json())
    .then(data => {
        const { ip, city, region, country } = data;
        document.getElementById('info').innerHTML = `You're accessing this site from 
            <span class="city">${city}</span>, 
            <span class="region">${region}</span>, 
            <span class="country">${country}</span> with the IP address 
            <span class="ip">${ip}</span>`;
    })
    .catch(error => {
        console.error('Error fetching the IP information:', error);
        document.getElementById('info').innerText = 'Unable to retrieve your IP and location information';
    });
