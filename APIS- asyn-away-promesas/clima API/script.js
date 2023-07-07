async function fetchData() {
    try {
    //   const response = await fetch('https://api.example.com/data');
    //const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=cucuta&units=metric&appid=6303eb0af53c3739b6586624f353c6a9");
    
      const data = await response.json();
      return data;
      
    } catch (error) {
      throw 'Error al obtener los datos';
    }
    
  }
  async function displayData() {
    try {
      const data = await fetchData();
      const dataContainer = document.getElementById('data-container');
      /* dataContainer.innerText = JSON.stringify(data);
       */
      console.log(data)
      const datosClima = `
      <div >
      <img src=https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png>
      </div>
      <p>${data.main.temp} ºC<p>
      <p>${data.weather[0].description}<p>
      <p>💨 ${data.main.humidity} %</p>
      <p>💧 ${data.main.humidity} %</p>
      <p>${data.name}<p>
      <p>${data.sys.country}<p>
      `
      dataContainer.innerHTML = datosClima
    } catch (error) {
      console.error(error);
    }
  }
  
displayData();