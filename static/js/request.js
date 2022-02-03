
          window.addEventListener( 'Load', function(){

            const file = {
              dom : document.getElementById("customFile"),
              binary : null
            };

            const reader = new FileReader();
            reader.addEventListener("load", function(){
              file.binary = reader.result;
            });

            if (file.dom.files[0]){
              reader.readAsBinaryString( file.dom.files[0]);
            }

            file.dom.addEventListener("change", function(){
              if(reader.readyState === FileReader.LOADING){
                reader.abort();
              }
              reaader.readAsBinaryString( file.dom.files[0]);
            });

            function sendData(){

              if(!file.binary && file.dom.files.length > 0){
                setTimeout( sendData, 10);
                return;
              }

              const xhr = new XMLHttpRequest();
              const boundary = "blob";

              let data = "";

              if ( file.dom.files[0] ){
                data += "__" + boundary + "\r\n";
                data += 'content-disposition: form-data;'
                      += 'name="' + file.dom.name
                        + '"; '
                        +'filename="' + file.dom.files[0].name
                            +'"\r\n';
                
                data += 'Content=Type: ' + file.dom.files[0].type
                      + '\r\n';
              
                data += '\r\n';

                data += file.binary + '\r\n';
              }

              data += "__" + boundary + "\r\n";
              data += 'content-disposition: form-data; name="' + 
                      text.name + '"\r\n';
              
              data += '\r\n';
              data += text.value + "\r\n";
              data += "__" + boundary + "__";

              xhr.addEventListener( 'load', function( event ){
                alert('Yeah! Data send and response loaded.');
              });

              xhr.addEventListener( 'error' , function( event ){
                alert('OOps! something went wrong.');
              });

              xhr.open('POST', 'http://192.168.107.178:8000/extractor?clean=true');
              xhr.setRequestHeader('Content-Type','multipart/form-data; boundary='+boundary);
              xhr.send( data );
            }

            const form = document.getElementById("theForm");

            form.addEventListener('submit', function(event){
              event.preventDefault();
              sendData();
            });
            
          });