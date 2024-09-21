
        

   $(window).on('load',function(){
       $(".loading-overlay , .loading-overlay .spinner").fadeOut(7800);
       $(".all").fadeIn(8000);
   });
   var x=document.getElementById('login');
            var y=document.getElementById('register');
            var z=document.getElementById('btn');
            function register()
            {
                x.style.left='-400px';
                y.style.left='50px';
                z.style.left='110px';
            }
            function login()
            {
                x.style.left='50px';
                y.style.left='450px';
                z.style.left='0px';
            }
    var modal = document.getElementById('login-form');
        var alert = document.querySelector(".alert"),
              pswrd_1 = document.querySelector(".pswrd_1"),
              pswrd_2 = document.querySelector(".pswrd_2"),
              btn = document.querySelector("#btn1");
      
          btn.onclick = function () {
            if(pswrd_1.value != pswrd_2.value){
              alert.style.display = "block";
              return false;
            }
            else{
              return true;
              
            }
          }
  