$(document).ready(function() {

    $(function() {
      $("#datepicker").datepicker();
    });
  
    $(function() {
      $("#timepicker").timepicker();
    });


  let ourtickets = JSON.parse(localStorage.getItem("ticket")) || [];



    var tnum, tnam, ttime, tcost, classname;
    var from, to, date, availableCities = [
      "Ramses Station",
      "Alexandria",
      "Suez",
      "Ismailia",
      "Port Said",
      "Mansoura",
      "Damietta",
      "Giza",
      "Beni Suef",
      "Minya",
      "Asyut",
      "Sohag",
      "Qena",
      "Luxor",
      "Aswan",
    ];
    $("#from").autocomplete({
      source: availableCities
      
    });
    $("#to").autocomplete({
      source: availableCities
    });
    
    // $("#search").click(function(){
    //   let x=true;
    //   availableCities.forEach((e)=>{

    //     if(e==($("#from").value)) { x=true;}
    //     else{ x=false;}
    //   });

    //   if(!x){  alert("the station is not found"); }

    // });
  
    $(".invis").hide();
    $("#page2").hide();
    $(".final").hide();
  
    $("#search").click(function() {
      from = $("#from").val();
      to = $("#to").val();
      date = $("#datepicker").val();
      if (!(from && to && date)) {

        // alert("Please Select All Fields !");

    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Please Select All Fields !',
    
  });
        return False; // break out موووووووووت

      } else if (from == to) {
        // alert("From and To can't be same");
        
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'From and To can not be same !',
      
    });
    
        return False;
      }
      else if(!((availableCities.includes(from)) && (availableCities.includes(to)))){

       // alert("the station not found ");


       Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'the station not found !',
        
      });



        return False;

      }


      $("#page1").hide();
      $("#page2").show();
  
      $("#trainname1").html(from + " Express");
      $("#trainname2").html(to + " Express");
      $("#trainname3").html(from + " Passenger");
      $("#trainname4").html(to + " Passenger");
      $("#trainname5").html(from + " - " + to + " Super Fast Train");
  
      $("tbody > tr").mouseover(function() {
        $(this).css("backgroundColor", "rgba(41, 103, 182, 0.89)");
  
      }).mouseout(function() {
        $(this).css("backgroundColor", "");
      });
  
      // $("tbody > tr").click(function() {
      //   $(this).parent().children().removeClass("selected");
      //   $(this).addClass("selected");
      // });

  
      $("tbody > tr").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".selected").css("backgroundColor", "rgba(41, 103, 182, 0.89)");
      });

      $(".book").click(function() {
        tcost = $(".selected").find(".tcost")
          .text();
        tnum = $(".selected").find(".tnum").text();
  
        tnam = $(".selected").find(".tnam").text();
  
        ttime = $(".selected").find(".ttime").text();
        /* alert(tnum);*/
        if (!tnum) {

         // alert("Please Select Your Train !")

         Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please Select Your Train !',
          
        });
         
          return False;
        }
        $(".invis").show();
  
        $(".booknow").click(function() {
          classname = document.querySelector('input[name="toggle"]:checked+span').innerHTML;
          $("#classifiy").html(classname);
          //  console.log(tnam);    //readed it 
         

       

       

          $(".invis").hide(function() {
            $("#page2").hide()
          });
          $(".index").hide();
          $(".final").show();

          

          let ticket = {
            current: from ,
            distination: to ,
            day: date ,
            trainName: tnam ,
            trainNumber: tnum ,
            classifiy: classname ,

        };
        ourtickets.push(ticket);
        localStorage.setItem("ticket" , JSON.stringify(ourtickets));
       // window.alert("saved successfully");

      Swal.fire(
        'Good job!',
        'ticket is reserved successfully !',
        'success'
      );




  
        });
        $(".bookcancel").click(function() {
  
          $(".invis").hide();
        })
  
        $("#From").html(from);
        $("#To").html(to);
        $(".trainname").html(tnam);
        $("#number").html(tnum);
        $("#date").html(date);
        
  
        // var d = new Date();
        // var n = d.toLocaleDateString();
        // document.getElementById("date").innerHTML = n;
  
   
  
      });
  
    })
  
  });