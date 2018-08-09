

    const productarea = $('.productarea').val()
    //MINIMUM SALARY DEEPENING ON AREA OF EXPERTISE
    function MinSalaryIt() {
        if ($('.productarea .opts').val() === "IT" && $('.experience').val() === "1 year" && Number($('.salary').val()) < 33000){
            alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå");
            return true
        }  else if ($('.productarea .opts').val() === "IT" && $('.experience').val() === "Just Graduated" && Number($('.salary').val()) < 25000){
              alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
              return true
          }
        else if ($('.productarea .opts').val() === "IT" && $('.experience').val() === "2 years" && Number($('.salary').val()) < 37000){
            alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
            return true
        }
        else if ($('.productarea .opts').val() === "IT" && $('.experience').val() === "3 years" && Number($('.salary').val()) < 40000){
            alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
            return true
        }
        else if ($('.productarea .opts').val() === "IT" && $('.experience').val() === "4 years" && Number($('.salary').val()) < 45000){
            alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
            return true
        }
        else if ($('.productarea .opts').val() === "IT" && $('.experience').val() === "5 years" && Number($('.salary').val()) < 50000){
            alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
            return true
        }     else if ($('.productarea .opts').val() === "IT" &&  Number($('.salary').val()) < 20000){
                alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                return true
            }
    };
    function MinSalaryFinance() {
        if ($('.productarea .opts').val() === "Finans/Ekonomi" && $('.experience').val() === "1 year" && Number($('.salary').val()) < 33000){
            alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå");
            return true
        }
        else if ($('.productarea .opts').val() === "Finans/Ekonomi" && $('.experience').val() === "Just Graduated" && Number($('.salary').val()) < 25000){
              alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
              return true
          }
        else if ($('.productarea .opts').val() === "Finans/Ekonomi" && $('.experience').val() === "2 years" && Number($('.salary').val()) < 37000){
            alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
            return true
        }
        else if ($('.productarea .opts').val() === "Finans/Ekonomi" && $('.experience').val() === "3 years" && Number($('.salary').val()) < 40000){
            alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
            return true
        }
        else if ($('.productarea .opts').val() === "Finans/Ekonomi" && $('.experience').val() === "4 years" && Number($('.salary').val()) < 45000){
            alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
            return true
        }
        else if ($('.productarea .opts').val() === "Finans/Ekonomi" && $('.experience').val() === "5 years" && Number($('.salary').val()) < 50000){
            alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
            return true
        }     else if ($('.productarea .opts').val() === "Finans/Ekonomi" &&  Number($('.salary').val()) < 20000){
                alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                return true
            }
      };
    function MinSalaryMarketing() {
          if ($('.productarea .opts').val() === "Marknadsföring" && $('.experience').val() === "1 year" && Number($('.salary').val()) < 33000){
              alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå");
              return true
          }
          else if ($('.productarea .opts').val() === "Marknadsföring" && $('.experience').val() === "Just Graduated" && Number($('.salary').val()) < 25000){
                alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                return true
            }
          else if ($('.productarea .opts').val() === "Marknadsföring" && $('.experience').val() === "2 years" && Number($('.salary').val()) < 37000){
              alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
              return true
          }
          else if ($('.productarea .opts').val() === "Marknadsföring" && $('.experience').val() === "3 years" && Number($('.salary').val()) < 40000){
              alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
              return true
          }
          else if ($('.productarea .opts').val() === "Marknadsföring" && $('.experience').val() === "4 years" && Number($('.salary').val()) < 45000){
              alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
              return true
          }
          else if ($('.productarea .opts').val() === "Marknadsföring" && $('.experience').val() === "5 years" && Number($('.salary').val()) < 50000){
              alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
              return true
          }     else if ($('.productarea .opts').val() === "Marknadsföring" &&  Number($('.salary').val()) < 20000){
                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                  return true
              }
        };
    function MinSalaryCustomerService() {
              if ($('.productarea .opts').val() === "Kundtjänst" && $('.experience').val() === "1 year" && Number($('.salary').val()) < 33000){
                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå");
                  return true
              }
              else if ($('.productarea .opts').val() === "Kundtjänst" && $('.experience').val() === "Just Graduated" && Number($('.salary').val()) < 25000){
                    alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                    return true
                }
              else if ($('.productarea .opts').val() === "Kundtjänst" && $('.experience').val() === "2 years" && Number($('.salary').val()) < 37000){
                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                  return true
              }
              else if ($('.productarea .opts').val() === "Kundtjänst" && $('.experience').val() === "3 years" && Number($('.salary').val()) < 40000){
                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                  return true
              }
              else if ($('.productarea .opts').val() === "Kundtjänst" && $('.experience').val() === "4 years" && Number($('.salary').val()) < 45000){
                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                  return true
              }
              else if ($('.productarea .opts').val() === "Kundtjänst" && $('.experience').val() === "5 years" && Number($('.salary').val()) < 50000){
                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                  return true
              }     else if ($('.productarea .opts').val() === "Kundtjänst" &&  Number($('.salary').val()) < 20000){
                      alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                      return true
                  }
            };
    function MinSalaryTechnology() {
                  if ($('.productarea .opts').val() === "Teknologi/Ingenjörer" && $('.experience').val() === "1 year" && Number($('.salary').val()) < 33000){
                      alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå");
                      return true
                  }
                  else if ($('.productarea .opts').val() === "Teknologi/Ingenjörer" && $('.experience').val() === "Just Graduated" && Number($('.salary').val()) < 25000){
                        alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                        return true
                    }
                  else if ($('.productarea .opts').val() === "Teknologi/Ingenjörer" && $('.experience').val() === "2 years" && Number($('.salary').val()) < 37000){
                      alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                      return true
                  }
                  else if ($('.productarea .opts').val() === "Teknologi/Ingenjörer" && $('.experience').val() === "3 years" && Number($('.salary').val()) < 40000){
                      alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                      return true
                  }
                  else if ($('.productarea .opts').val() === "Teknologi/Ingenjörer" && $('.experience').val() === "4 years" && Number($('.salary').val()) < 45000){
                      alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                      return true
                  }
                  else if ($('.productarea .opts').val() === "Teknologi/Ingenjörer" && $('.experience').val() === "5 years" && Number($('.salary').val()) < 50000){
                      alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                      return true
                  }     else if ($('.productarea .opts').val() === "Teknologi/Ingenjörer" &&  Number($('.salary').val()) < 20000){
                          alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                          return true
                      }
                };
    function MinSalaryLogistics() {
                              if ($('.productarea .opts').val() === "Lager/Logistik" && $('.experience').val() === "1 year" && Number($('.salary').val()) < 33000){
                                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå");
                                  return true
                              }
                              else if ($('.productarea .opts').val() === "Lager/Logistik" && $('.experience').val() === "Just Graduated" && Number($('.salary').val()) < 25000){
                                    alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                                    return true
                                }
                              else if ($('.productarea .opts').val() === "Lager/Logistik" && $('.experience').val() === "2 years" && Number($('.salary').val()) < 37000){
                                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                                  return true
                              }
                              else if ($('.productarea .opts').val() === "Lager/Logistik" && $('.experience').val() === "3 years" && Number($('.salary').val()) < 40000){
                                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                                  return true
                              }
                              else if ($('.productarea .opts').val() === "Lager/Logistik" && $('.experience').val() === "4 years" && Number($('.salary').val()) < 45000){
                                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                                  return true
                              }
                              else if ($('.productarea .opts').val() === "Lager/Logistik" && $('.experience').val() === "5 years" && Number($('.salary').val()) < 50000){
                                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                                  return true
                              }     else if ($('.productarea .opts').val() === "Lager/Logistik" &&  Number($('.salary').val()) < 20000){
                                      alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                                      return true
                                  }
                            };
    //MINMUM SALARY DEEPENDING ON EXPERIANCE
    function experianceVsPositionPercentage(){
      var experience = $('.experience').val();
      var percentage = $('.percentage').val();

      if (percentage !== "100 %" && experience !== "Student" && experience !== "Nyexad") {
        alert("Personen du söker kommer inte att vara intresserad i en deltidstjänst. Vänligen uppdatera ställnings procenten eller sänk erfarenhets nivån till Nyexad.");
       return true
      };
    };

    //ON CLICK OF SHOW SUPPLIER RESTRICTIONS
    function showSuppliers(){$('#show').click(function (e){

      var isValid = true;
      // e.preventDefault(); // preventss default behavior
       if(Date.parse($('.start_date').val()) > Date.parse($('.end_date').val())){
        alert("start datum kan inte förekomma efter slut datum");
        isValid = false
      }
      else if(Date.parse($('.start_date').val()) < Date.now()){
        alert("start datum måste förekomma efter dagens datum");
        isValid = false
      }
      else if (experianceVsPositionPercentage() === true ){
        // return false
        isValid = false
      }
      else if (MinSalaryIt() === true ){
        // return false
        isValid = false
      }
      else if (MinSalaryFinance() === true ){
        // return false
        isValid = false
      }
      else if (MinSalaryMarketing() === true ){
        // return false
        isValid = false
      }
      else if (MinSalaryCustomerService() === true ){
        // return false
        isValid = false
      }
      else if (MinSalaryTechnology() === true ){
        // return false
        isValid = false
      }
      else if (MinSalaryLogistics() === true ){
        // return false
        isValid = false
      }
      else {
        isValid = true
      };
      if (!isValid) {
        e.preventDefault();
        };
      });
    //  window.scrollTo(0,document.body.scrollHeight);
    };
    ///// THIS WORKS!!!!THIS WORKS!!!!!!!!
    function choose_Supplier(){$('.välj_leverator').click(function(event){

      $('.btn.btn-primary.test').trigger('click')
          var product_area = $('.productarea').val()
          var position = $('#position').val()
          var start_date = $("#start_date").val()
          var end_date = $("#end_date").val()
          var city = $("#city").val()
          var percentage = $(".percentage").val()
          var experiance = $(".experiance").val()
          var salary = $("#salary").val()
          var antal = $("#antal").val()

          // var supplier = $('.supplier_table').closest('supplier_div');


          var supplier = event.target.closest('.supplier_div');
          var supplier_name = supplier.children[0].childNodes[1].textContent;
          var supplier_id = supplier.children[4].childNodes[1].textContent;
          var supplier_price = supplier.children[3].childNodes[1].textContent;
          var supplier_recruitment = supplier.children[2].childNodes[1].textContent;


          var type_of_service = $('.rent_or_recruit').val()

        var string =  "<p id='product_area'> Område: " + product_area +"</p>" + "<p id='position'> Tjänst: " + position +"</p>" + "<p id='antal'> Antal: " + antal + "</p>" + "<p id='start_date'> Start datum: " + start_date + "</p>" + "<p id='end_date'> Slut Datum: " + end_date + "</p>" + "<p id='city'> Stad: " + city + "</p>" + "<p id='percentage'> Ställningsprocent: " + percentage + "</p>" + "<p id='city'> Erfarenhet: " + experiance + "</p>" +  "<p id='supplier_price'>" + supplier_price +"</p>"+ "<p id='supplier_recruitment'>" + supplier_recruitment +"</p>" + "<p id='supplier_name'> Leverantör: " + supplier_name + "</p>"+ "<p hidden id='supplier_id'>" + parseInt(supplier_id); + "</p>"+ "<p id='supplier_price'>" + supplier_price + "</p>";

        $('.modal-body').html(string);
        event.preventDefault();

        // SENDING DATA TO BACKEND VIA AJAXCALL
        $('.btn.btn-secondary.confirm_order').click(function(){
          $.ajax({
            type: "GET",
            url: "/confirm_order_and_email",
            data: {contracts: { productarea: product_area, position: position, start_date: start_date, end_date: end_date, city: city, percentage: percentage, experiance: experiance, salary: salary, supplier_name: supplier_name, supplier_id: supplier_id, supplier_price: supplier_price, type_of_service: type_of_service}}

          });
          window.location.reload();
        });
      });
    };


$(document).ready(function(){


  $(this).scrollTop(0);

  if (window.location.href.match('/page1?')){
    if ($('.supplier_div').length === 0 && $('.city').length !== 0) {
      console.log("Tyvärr har vi inga aktiva leverantörer i den stad du har önskat hjälp i. Skriv ett mail till oss så skall vi se till att hjälpa dig ändå, samt se till att vi i framtiden kommer vara aktiva i er stad")




      var currentCallback;

      // override default browser alert
      window.alert = function(msg, callback){
        $('.message2').text(msg);
        $('.customAlert2').css('animation', 'fadeIn 0.3s linear');
        $('.customAlert2').css('display', 'inline');
        setTimeout(function(){
          $('.customAlert2').css('animation', 'none');
        }, 300);
        currentCallback = callback;
      }

      $(function(){

        // add listener for when our confirmation button is clicked
        $('.confirmButton2').click(function(){
          $('.customAlert2').css('animation', 'fadeOut 0.3s linear');
          setTimeout(function(){
           $('.customAlert2').css('animation', 'none');
          $('.customAlert2').css('display', 'none');
          }, 300);
          currentCallback();
        })

        // our custom alert box
        setTimeout(function(){
          alert('Tyvärr har vi inga aktiva leverantörer i den stad som du har sökt på. Vänligen skriv ett mail till oss så skall vi se till att hjälpa dig ändå, samt se till att vi i framtiden kommer vara aktiva i din stad.', function(){
              console.log("Callback executed");
            });
        }, 500);
      });

    }
  }

  // Instruction Alert
  if (window.location.href.match('/page1')) {
      if ($('#city').val() === "") {

    var currentCallback;

    // override default browser alert
    window.alert = function(msg, callback){
      $('.message').text(msg);
      $('.customAlert').css('animation', 'fadeIn 0.3s linear');
      $('.customAlert').css('display', 'inline');
      setTimeout(function(){
        $('.customAlert').css('animation', 'none');
      }, 300);
      currentCallback = callback;
    }

    $(function(){

      // add listener for when our confirmation button is clicked
    	$('.confirmButton').click(function(){
        $('.customAlert').css('animation', 'fadeOut 0.3s linear');
        setTimeout(function(){
         $('.customAlert').css('animation', 'none');
    		$('.customAlert').css('display', 'none');
        }, 300);
        currentCallback();
      })

      // our custom alert box
      setTimeout(function(){
        alert('Fyll i fälten till vänster så att det matchar ditt nuvarande behov. Digirek kommer att ge dig råd om du råkar skriva in något felaktigt, exempelvis för låg ställningsprocent om du söker en väldigt erfaren person. Sedan klickar du bara på knappen "Sök Byråer" så ser du vilka leverantörer som kan hjälpa dig. Om du väljer en byrå och vill träffa dem måste du först logga in eller skapa ett konto (det tar 30 sekunder)', function(){
            console.log("Callback executed");
          });
      }, 500);
    });
    }
  }
});


$(document).on('ready', function(){

    showSuppliers();

    choose_Supplier();


  $('#productarea').val( localStorage.getItem("saveProductArea"));

  $('.experience').val( localStorage.getItem("saveExperiance"));

  $('.percentage').val( localStorage.getItem("savePercentage"));

  //$('.start_date').val( localStorage.getItem("saveStartDate"));

  //$('.end_date').val( localStorage.getItem("saveEndDate"));


//$('.position').val( localStorage.getItem("savePosition"));

//$('.city').val( localStorage.getItem("saveCity"));

});



function myFunction(e){

  var prodArea = $('#productarea').val();
  var experience = $('.experience').val();
  var percentage = $('.percentage').val();
  var startdate = Date.now();
  var enddate = $('.end_date').val();
  var position = $('.position').val();
  var city = $('.city').val();

  //
  //
   localStorage.setItem("saveProductArea", prodArea);
   localStorage.setItem("saveExperiance", experience);
   localStorage.setItem("savePercentage", percentage);
  // localStorage.setItem("saveStartDate", startdate);
  // localStorage.setItem("saveEndDate", enddate);
  // localStorage.setItem("savePosition", position);
  // localStorage.setItem('saveCity', city);

    //document.getElementById("main_form").submit();
}




function notLoggedIn(){

    if ($('.petterpetter').text()
   === "false"){
      alert("Vänligen logga in för att göra en beställning");
      document.getElementById("login").click();
    } else if ($('.petterpetter').text()
  ==="true") {
    alert("Tack för din beställning! Du har nu fått en orderbekräftelse till din mail, och leverantören du valde kommer kontakta dig inom kort")
    document.getElementById("hitta_lev").click();
    }

}


// VIKTIGT ATTT SPARA TILL LÖN OM DEN INTE SKALL GÅ ATT ÄNDRA
// , readonly: params["salary"] ? true : false
//
// function localStor(){
//
//
//   // document.getElementById("productarea").addEventListener("click", function(){
//   //   localStorage.setItem("productarea10", $('.productarea').val());
//   //
//   //    console.log(localStorage.getItem("productarea10"));
//   //
//   //
//   //
//   //
//   // });
//
//   // $('.productarea') = localStorage.getItem("productarea10");
//
//
//
// addEventListener('DOMContentLoaded', function(){
//   document.querySelector('select[name="assitance"]').onchange=changeEventHandler;},false);
//
//
// function changeEventHandler(event){
//  localStorage.setItem("productarea10", $('.productarea').val());
// };
//
//
// };
