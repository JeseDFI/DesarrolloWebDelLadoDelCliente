$(document).ready(function(){
    $("#agregarCompra").click(function(){

        //capturamos el campo input y creamos un nodo y lo injertamos
        if($("#compra").val() == "") return;

        var nuevoTexto = $("#compra").val();
        var nuevoLi = document.createElement("li");
        $(nuevoLi).html(nuevoTexto);
        $("#listaCompra").append(nuevoLi);

        //reseteamos el campo input
        $("#compra").val("");

        //asiganmos eventos al nodo creado
        $(nuevoLi).on({ click:function(){
                $(this).css({
                    "text-decoration":"line-through",
                    "font-style":"italic"
                });
            },
            dblclick: function(){
                $(this).remove();
            }
        })
    })

    $("#reset").click(function(){
        $("li").remove()
    })
})