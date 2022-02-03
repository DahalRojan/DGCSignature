$(document).ready(()=>{
    $('#customFile1').change(function(){
      const file = this.files[0];
    //   console.log(file);
      if (file){
        let reader = new FileReader();
        reader.onload = function(event){
        //   console.log(event.target.result);
          $('#com1').attr('src', event.target.result);
        }
        reader.readAsDataURL(file);
      }
    });
  });