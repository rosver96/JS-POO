function poke(){

    const result = fetch('https://pokeapi.co/api/v2/pokemon/ditto');

    result 
    .then(response => response.json())
    .then(data => {
        done(data)
    });

}

poke(data => {
    data.result.forEach(personajes => {
        const article = document.createRange().createContextualFragment();

        const datosClima = `
        <article>

        <div class="imag-container">
            <img src="" alt="">
        </div>

        <h2>poke-poder</h2>
        <span> salud </span>

       </article>
      
        `
        
    });
});
    
