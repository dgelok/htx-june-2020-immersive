// const { delete } = require("../../routes/api");

$(()=>{


    // make API call to the endpoint: /api

    $.getJSON('/api', updateFeedback)

    $('.feedback-form').submit((e)=>{
        e.preventDefault();
        console.log("submitted!")
        
        $.post('/api', {
            name: $('#feedback-form-name').val(),
            title: $('#feedback-form-title').val(),
            message: $('#feedback-form-message').val()
        }, updateFeedback)
        
    })

    $('.feedback-messages').click((e)=>{
        e.preventDefault();
        console.log(e.target.className)
        if (e.target.className == "glyphicon glyphicon-remove") {
            // $.ajax --- there IS NO $.delete
            $.ajax({
                url: `/api/${e.target.id}`,
                type: 'DELETE',
                success: updateFeedback
            })
        }
    })

    function updateFeedback (data) {
        var output = ""
        $.each(data,function(key, item) {
            output += '     <div class="feedback-item item-list media-list">';
            output += '       <div class="feedback-item media">';
            output += '       <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
            output += '         <div class="feedback-info media-body">';
            output += '           <div class="feedback-head">';
            output += '             <div class="feedback-title">' + item.title + ' <small class="feedback-name label label-info">' + item.name + '</small></div>';
            output += '           </div>';
            output += '           <div class="feedback-message">' + item.message + '</div>';
            output += '         </div>'; 
            output += '       </div>';
            output += '     </div>';
        });

        // find the div with .feedback-message class
        // fill div container with output messages
        $('.feedback-messages').html(output)  
    }

})