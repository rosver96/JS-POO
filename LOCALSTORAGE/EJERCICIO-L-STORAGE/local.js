



obtener_localstorage();

// getitem traigo mi objeto o los datos, con el parse hago que se muestren bien el objeto con todos sus datos///
// es necesario un if por si los datos no estan agregados en el storage ya que esto nos puede traer un null//
function obtener_localstorage(){
    if( localStorage.getItem( "nombre")){
        let nombre = localStorage.getItem( "nombre");
        let persona =JSON.parse(localStorage.getItem("persona"));
        
        console.log(nombre);
        console.log(persona);
    }else {
        console.log("no hay entrada en el localSTORAGE")
    }
}


////setitem lleva y guarda en el storage con stringyfy me muestra todos los datos del objeto en el storage////
function guardar_localstorage(){
    let persona = {
        nombre: "fernando",
        apellido:"quintero",
        edad: 27,
        correo:"jjjjjjj@jjjjj",
        cordenada:{
            lat:10,
            lng:-100
        }
    };

let nombre = "fernandio";

localStorage.setItem( "nombre",  nombre  );
localStorage.setItem( "persona", JSON.stringify( persona ) );
}
//  guardar_localstorage();
