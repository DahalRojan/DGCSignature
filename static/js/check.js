
$(document).ready(()=>{
      $('#customFile3').change(function(){
        const file = this.files[0];
        console.log(file);
        if (file){
          let reader = new FileReader();
          reader.onload = function(event){
            console.log(event.target.result);
            $('#check').attr('src', event.target.result);
          }
          reader.readAsDataURL(file);
        }
      });
    });