     const search = () => {
        const error = document.querySelector('.error')
        const details = document.querySelector('.details').value;
        const result = document.querySelector('.result')
        const location = document.querySelector('.location')
        const humidityresult = document.querySelector('.humidityresult')
        const windspeedresult = document.querySelector('.windspeedresult')
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
        humidityresult.innerHTML = String(data.main.humidity).concat('%')
        windspeedresult.innerHTML = String(data.wind.speed).concat('km/h')
        document.querySelector('.container .display').style.display = 'none';
        document.querySelector('.humidity').style.display = 'block'
        document.querySelector('.windspeed').style.display = 'block'
        document.querySelector('.container .convert').style.display = 'block'
    })
    .catch((err)=>{
    console.log(err)
    error.innerHTML = 'City not found,Check your spelling or invalid input!!';
    document.querySelector('.container .display').style.display = 'none';

    })

}   

const convert = () =>{
    const resultElement = document.querySelector('.result');
    const result = resultElement.innerHTML;
    const word = result.slice(0,-2);
    const answer = (word * 9/5) + 32;
    console.log(answer);
    resultElement.innerHTML = String(answer).concat('°F');
    document.querySelector('.container .convert').style.display = 'none'


}


    

