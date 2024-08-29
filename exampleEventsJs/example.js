window.onload = function(){
    console.log("Se fuerzan los estilos de los TD");
    const khaki = document.querySelector('.khaki');
    const palegreen = document.querySelector('.palegreen');
    const silver = document.querySelector('.silver');

    khaki.style.backgroundColor = 'khaki';
    palegreen.style.backgroundColor = 'palegreen';
    silver.style.backgroundColor = 'silver';
}

function bgChange(color){
    console.log(color);
    document.body.style.background = color;
}