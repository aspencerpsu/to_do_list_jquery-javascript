$(document).ready(function() {

  var today_date = new Date().toString().slice(0, 16);

  var sub_head = $('#wrapper > h6').html();

  var i = 5;


// This prevents the function from submitting onto the next page, will stay on the page
  $("#formlist").on('click', "input:submit", function(arg) {

  		arg.preventDefault();

      var index_no = $(this).index('input:submit');

      var $check = $('input:checkbox:eq('+index_no+')').is(':checked');
      console.log($check);

      // collect the index number of the submit value
      
  		var remove = prompt("Are you sure you want to delete this? Enter \"yes\" to fufill or hit cancel to exit");

      console.log($(this).parent()[0].tagName);
      // This checkbox that was clicked will return a true (but where exactly are you returning to?)
      if (remove == "yes" && $check == true) {
        console.log(index_no);
       (($(this).parent()[0].tagName).toString() == "DIV")? $(this).parent()[0].remove() : console.log("you safe bro"); $('#formlist > input:checkbox:eq('+index_no+')').remove(); $('#formlist > textarea:eq('+index_no+')').remove(); $('#formlist > li:eq('+index_no+')').remove();$(this).remove();
        alert(i);
      }

      else if (remove == "no" || $check == false){
        alert("Please check box to remove");
        return;
      }
      else {
        return; 
      }
    });


 $("#form_2").on('click', 'input:submit:last', function(e) {  
    // bind the submit event handler to the function for the 2nd form (adding section);
    e.preventDefault()
    // return a boolean true before adding the chore to the list
    var $check = $("input:checkbox").is(':checked');
    // get the text value to add to the list of items
    var $gettext = $('input:text').filter(":last").val();
    var additem = prompt("Add" + " " + $gettext + " " + "to the list? Write \"yes\" to proceed or select cancel to exit");
    if ($check == true && additem == 'yes'){

      $('#formlist').append("<div id=\"list${i}\"></div>".replace('${i}', i));
      $("#list" +i).prepend("<li class = \"oneanddun\">" + $gettext + "</li>");

      $("#list" + i).append('<input type = "checkbox" class = "check">' + '<textarea type = "text" class = "boxtext" placeholder = "Describe the chore"></textarea>' + '<input type = "submit" id = "sub" value = "%{i}">'.replace('%{i}', i));

      $('#list' + i).addClass('list-sect');

      console.log($check);
      $("input:text").filter(":last").val('');



      $('#list'+i).prepend("<div class=\"tracker\">" + "<li>Added " + today_date + "at " + getFormattedTime() + "</li>");

      // keep track of the list items with a counter increment outside the anonymous_function;
       i += 1;
      }    
    else if ($check == false && additem == 'yes') {
        alert("you forgot to click the \"check\" button");
        i; t
      }
      else {
        alert("please choose what to do with this chore");
      }
            
      });

  $('button').on('click', function(e){
    e.preventDefault();
    var $check_del = $("#Remove-All > input:checkbox").is(':checked');
    var $clean_up = prompt("Once you delete everything, you cannot go back, continue? Write \"yes\" for completion or hit cancel to exit");
    if ($check_del == true && $clean_up == 'yes'){
      $('#formlist').empty();
      }
    else if ($check_del == false){
        alert('click on the checkbox to remove everything');
      }
  });


// <====================== Add the date on the top of the list ==========================>


getFormattedTime = function () {

    var getDate = new Date();

    var hours24 = parseInt(getDate.getHours(), 10);
    var minutes = parseInt(getDate.getMinutes(), 10);
    var seconds = getDate.getSeconds().toString();
    var hours = ((hours24 + 11) % 12) + 1;
    var amPm = hours24 > 11 ? ' PM' : ' AM';

    return hours + ':' + minutes + ':' + (seconds.length == 1? "0" + seconds : seconds) + amPm;
};

// Couldn't figure out a way to add that date onto the correct date;

$('#wrapper > h6').html(sub_head + today_date + " " + getFormattedTime());

console.log(today_date);
console.log(sub_head);

});