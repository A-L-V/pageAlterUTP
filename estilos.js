let oscure = false;
let mode = document.getElementById("mode");
let main = document.getElementById("cuerpo");

//cambio a modo oscuro
mode.addEventListener("click", function(){
    if(oscure == false){
        main.style.backgroundColor = "#202324";
        main.style.color = "white";
        oscure = true;
    }else{
        main.style.backgroundColor = "white";
        main.style.color = "#202324";
        oscure = false;
    }
});
navegadorStyle();
function navegadorStyle(){
    //verificamos que navegador se esta usando
    let agente = navigator.userAgent;
    var navegadores = ["Firefox" , "Edge", "Chrone"];
    var navegador = null;
    for(let i in navegadores){
        if(agente.indexOf(navegadores[i]) != -1){
            navegador = (navegadores[i]);
        }
    }
    // llamamos lo scroll de la pagina
    let menu = document.getElementById("menu");
    let body = document.getElementsByTagName("html");
    let widthSCroll = "thin";
    
    //estilo del navegador(firefox | otros)
    if(navegadores="Firefox"){
        menu.style.setProperty("scrollbar-color", "#E9967A #931929"); 
        body[0].style.setProperty("scrollbar-color", "#e9967a #202324"); 
        menu.style.setProperty("scrollbar-width", widthSCroll); 
        body[0].style.setProperty("scrollbar-width", widthSCroll); 
    }else {
        //ayudar aqui ya que estoy haciendo pruebas en firefox 
    }
}