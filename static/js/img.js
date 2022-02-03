
	function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);

        }

        reader.readAsDataURL(input.files[0]);
        
    }
}

$("#customFile").change(function(){
    readURL(this);


}



);


// 	function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             $('#com2').attr('src', e.target.result);

//         }

//         reader.readAsDataURL(input.files[0]);
//     }
// }

// $("#customFile2").change(function(){
//     readURL(this);
// });



// 	function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             $('#com1').attr('src', e.target.result);
//         }

//         reader.readAsDataURL(input.files[0]);
//     }
// }

// $("#customFile1").change(function(){
//     readURL(this);
// });





