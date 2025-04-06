
  export default function sendForm(){
const btn = document.querySelector('.submit-button');
      let input= Array.from(document.getElementsByClassName("contact-input"));    console.log(input);
   
       
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.innerHTML = 'Sending...';

   const serviceID = 'service_ax27lze';
   const templateID = 'template_j070jzr';

   emailjs.sendForm(serviceID, templateID, form)
    .then(( ) => {
     
        input.forEach((input)=>{
          input.value=""
          
         }
        )
     
      btn.innerHTML = 'Send Email';

      alert('Sent!');
    }, (err) => {
      btn.innerHTML = 'Send Email';
      
      alert(JSON.stringify(err));
    });
});
  




}