  
      //calculate factorial of the given number
      function factorial(x){
        var f=1;
        for(var i=1;i<=x;i++){
           f=f*i;
        } 
        return f;    
     }
     //jquery code is always writen inside ready event of the document
     $(document).ready(function(){
         //assign click event to add button
         $('#add').click(function(){
             //retrieve the data in the value property
            var x=parseInt($('#num1').val()); 
            var y=parseInt($('#num2').val());
            //asign the data to value property
            $('#result').val(x+y);
            $('#answer').html(x+y)
         })
         $('#factorial').click(function(){
             var x=parseInt($('#num1').val());
             var ans=factorial(x); 
            //asign the data to value property
            $('#result').val(ans);
            $('#answer').html(ans)
         })
     })