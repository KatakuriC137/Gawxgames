 document.getElementById("Mini_Menu").addEventListener("click", mostrar_Menu);

 document.getElementById("Sombra").addEventListener("click", ocultar_Menu);

 nav = document.getElementById("nav");
background_menu=document.getElementById("Sombra")

function mostrar_Menu(){

    nav.style.right= "0px";
    background_menu.style.display="block";
}


function ocultar_Menu(){

    nav.style.right= "-250px";
    background_menu.style.display="none";
}
