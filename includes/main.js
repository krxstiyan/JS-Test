$(document).ready(function(){

    $('#first').click(function(){
        alert ("Clicked!");
    })

    $('#second').click(function(){
        alert($("#text").val());
    })

    $('#third').click(function(){
        $('#par').html($('#rep').val());
    })
    
    $('#green').mouseover(function(){
        $('body').css({
            "background-color" : "green"
        });
    })

    $('#blue').mouseover(function(){
        $('body').css({
            "background-color" : "blue"
        });
    })

    $('#red').mouseover(function(){
        $('body').css({
            "background-color" : "red"
        });
    })
    
    $('#colors').mouseout(function(){
        $('body').css({
            "background-color" : "transparent"
        });
    })

    $('#addList').click(function(e){
        e.preventDefault();
          var txt = $('#listText').val();
           $('#ulid').append("<li><a class='del'href = '#'>x</a>"+ txt +" </li>"); 
            });
            
    $(document).on('click', '.del', function(e){
        e.preventDefault();
        $(this).parent().hide();
    });


    $(document).on('click', '.numbt',function(){
        num = parseInt($(this).val());
        $('#calspan').append(num);

    })

    $(document).on('click', '.opbt',function(){
        $('#calspan').append($(this).val());
    })
    
    $(document).on('click', '.opbte', function(){
        notation = $('#calspan').text();
        $('#calspan').html(eval(notation));
    })
    
});






