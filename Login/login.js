$(window).ready(function(){
    
    $('#formulario_login').on('sumbit', function(e){

        e.preventDefault();

        let usuario = $('#txt_usuario').val();
        let pass = $('#txt_usuario').val();


        $.post('config/controlador.php', {usuario, pass}, function(data){ 

            data = JASON.parse(data);
            
            if(data == 'true'){
                location.href = 'admin.html'
            } else {
                swal.fire ({
                    title: '¡Error!',
                    icon: 'error',
                    text: data

                });
            }
        })
    });


});