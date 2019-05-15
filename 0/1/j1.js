JotForm.init(function(){
      setTimeout(function() {
          $('input_10').hint('ex: myname@example.com');
       }, 20);
    /*INIT-END*/
	});

   JotForm.prepareCalculationsOnTheFly([null,null,null,null,{"name":"yourName","qid":"4","text":"Your Name:","type":"control_fullname"},null,null,{"name":"messages7","qid":"7","text":"Messages:","type":"control_textarea"},null,{"name":"submit","qid":"9","text":"Submit","type":"control_button"},{"name":"emailAddress","qid":"10","subLabel":"Email","text":"Email Address:","type":"control_email"}]);
   setTimeout(function() {
JotForm.paymentExtrasOnTheFly([null,null,null,null,{"name":"yourName","qid":"4","text":"Your Name:","type":"control_fullname"},null,null,{"name":"messages7","qid":"7","text":"Messages:","type":"control_textarea"},null,{"name":"submit","qid":"9","text":"Submit","type":"control_button"},{"name":"emailAddress","qid":"10","subLabel":"Email","text":"Email Address:","type":"control_email"}]);}, 20); 
