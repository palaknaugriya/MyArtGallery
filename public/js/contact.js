(function() {
    // var global = ('/pages/global.json')
    // console.log(global)


    $("#btn-contact-submit").click(function(e) {
        if (e) {
            e.preventDefault()
        }
        var visitor = {
            name: $("#contact-form-name").val(),
            email: $("#contact-form-email").val(),
            message: $("#contact-form-message").val(),
        }

        if (visitor.name.length == 0) {
            alert("Enter name")
            return
        }

        if (visitor.email.length == 0) {
            alert("Enter email")
            return
        }

        if (visitor.message.length == 0) {
            alert("Enter message")
            return
        }

        $.ajax({
            url: "/api/subscriber",
            type: 'POST',
            data: visitor,
            success: function(response) {
                if (response.confirmation != 'success') {
                    alert("Error: " + response.message)
                    return
                }
                // console.log(global.subscriber_confirmation)
                visitor.name = '',
                    visitor.email = ''
                visitor.message = ''
                alert("Thank you for collaborating! We will contact you shortly.")
            },
            error: function(response) {
                console.log("Error-" + JSON.stringify(response))
            }
        })
    })
})()

// (function() {
//     $('#btn-contact-submit').click(function(event) {
//         if (event)
//             event.preventDefault()

//         var visitor = {
//             name: $("#contact-form-name").val(),
//             email: $("#contact-form-email").val(),
//             message: $("#contact-form-message").val(),
//         }

//         $.ajax({
//             url: '/api/subscriber',
//             type: 'POST',
//             data: visitor,
//             success: function(response) {
//                 if (response.confirmation != 'success') {
//                     alert("Error: " + response.message)
//                     return
//                 }
//                 alert(global.subscriber_confirmation)
//             },
//             error: function(response) {
//                     console.log("Error-" + JSON.stringify(response))
//                 }
//                 //     console.log(response)
//                 // },
//                 // error: function(response) {
//                 //     console.log(response)
//                 // }
//         })
//     })
// })()