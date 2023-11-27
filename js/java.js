function obtenerListadeusuarios(){
    var listadeUsuarios=JSON.parse(localStorage.getItem('listadeUsuariosLs'));

    if(listadeUsuarios==null){
        listadeUsuarios=
        [
            ['1','pagina','admisnistrador','admi.pag@gmail.com','pagina1','1987-10-12','1'],
            ['2','Olman','usuarioria','usuar@gmail.com','pagina2','1993-04-17','2']
        ]
    }
    return listadeUsuarios
}
function validarCredenciales(pCorreo,pContrasenna){
    var listadeUsuarios=obtenerListadeusuarios();
    var bAcceso=false;

    for(var i=0;i< listadeUsuarios.length;i++){
        if(pCorreo==listadeUsuarios[i][3] && pContrasenna==
            listadeUsuarios[i][4]){
            bAcceso=true;
            sessionStorage.setItem('usuarioActivo',listadeUsuarios[i][1]+' '+
            listadeUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo',listadeUsuarios[i][6]);
        }
    }
    return bAcceso
}