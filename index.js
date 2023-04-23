    
    const search = () => {
        const error = document.querySelector('.error')
        const details = document.querySelector('.details').value;
        const result = document.querySelector('.result')
        const location = document.querySelector('.location')
        const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${details}&appid=d0932cd94457465b3d79d9b44e635868`)
    .then((res)=>{
        if(!res.ok || res.status===400) {
            throw Error(res.statusText);
        }
        return res.json();
    })
    .then((data)=>{
        error.style.display = 'none';
        let finalData = Math.round(data.main.temp - 273.15);
        result.innerHTML = String(finalData).concat('°C')
        location.innerHTML = String(data.name)
        document.querySelector('.container .display').style.display = 'none';

    })
    .catch((err)=>{
    console.log(err)
    error.innerHTML = 'City not found,Check your spelling or invalid input!!';
    document.querySelector('.container .display').style.display = 'none';

    })
}    
    

