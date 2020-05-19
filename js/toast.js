function createMessage(body, type) {
    let message=document.createElement('div',);
    let duration=document.getElementById('duration').value * 1000;
    message.setAttribute('class', 'message '+ type)
    
    message.innerHTML=
                '<div class="message-body"><p>'+body+'</p></div> \
                <div class="message-close"><img src="https://image.flaticon.com/icons/svg/748/748122.svg"/> </div>'
    




    //destruction by click with animation
    message.getElementsByClassName('message-close')[0].onclick=function (){
        $(message).animate({
            padding: "0px",
               'margin-right':'-10px',
            'font-size': "0px"
          }, 100, function() {
                
              $(message).remove();      
          });
     }




    //show message with animation
    var container = document.body.getElementsByClassName('message-container')[0];    
    container.appendChild(message);
    $(message).show( "fast" );
    
    
    
    //destrction by time with animation
    setTimeout(() => {
        $(message).animate({
            padding: "0px",
               'margin-right':'-10px',
            'font-size': "0px"
          }, 100, function() {
                
              $(message).remove();      
          });


    }, duration);
  }
 
  

















// function createMessage(body) {
//     var message=document.createElement('div',);
//     message.setAttribute('class', 'revealator-slideup revealator-delay1 revealator-once message')
//     message.innerHTML='<div class="my-message-body">'+body+'</div> \
//                 <div class="closeLabel"> Закрыть </div>'
    
//     message.getElementsByClassName('closeLabel')[0].onclick=function (){
//         message.remove();
//      }

//     var container = document.body.getElementsByClassName('message-container')[0];      
//     container.appendChild(message);
//     setTimeout(() => message.remove(), 15000);
//   }
 

// function setupMessageButton(title, body) {
//     createMessage(title, body);
// }

//   var d=document.createElement('div',);
//         d.setAttribute('class', 'message')
//         d.innerHTML='<div class="message-body">'+body+'</div> \
//                     <div class="message-close"> Закрыть </div>'

//         d.getElementsByClassName('message-close')[0].onclick=function (){
//             d.remove();
//         }
        
//         document.body.prepend(d);

//         setTimeout(() => d.remove(), 15000);