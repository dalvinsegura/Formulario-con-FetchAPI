let formulario = document.getElementById('formulario');
let respuesta = document.getElementById('respuesta');
let allUser = document.getElementById("alluser-flexbox")
console.log(allUser)


formulario.addEventListener('submit',function(e){
    e.preventDefault();
    // console.log("hizo click")

    var datos = new FormData(formulario);
    console.log(datos)
    console.log(datos.get('usuario'))
    console.log(datos.get('pass'))

    fetch('post.php',{
        method: 'POST',
        body: datos
    })
    .then(res => res.json())
    .then(data=>{
        if(data==='error'){
            respuesta.innerHTML = `
            
            <div class="alert alert-danger" role="alert">
                ¡Llene todos los campo estupido de mierda!
            </div>
            
            `
        }else{
            respuesta.innerHTML += `
            
            <div class="alert alert-success" role="alert">
                Exitoso (ella no te quiere)
                ${data}
            </div>
            
            `
        }
    })

})

fetch('http://localhost/ajax-libros/get.php')
.then(resi => resi.json())
.then(dato=>{
    for(let i=0; i<20; i++){
        allUser.innerHTML += `
        
        <div id="alluser">
            <div class="user_content">
                <h3>Usuario: <span>${dato[i].user}</span></h3>
             </div>
    
            <div class="pass_content">
                <h3>Contraseña: <span>${dato[i].pass}</span>
                </h3>
            </div>
        </div>
        
        `
        
    }
})
