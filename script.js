$(document).ready(function() {

// This prevents the function from submitting onto the next page, will stay on the page
  $("#formlist").on('click', "input:submit", function(event) {
      // A work in progress 
  		event.preventDefault();
      var $check = $("input:checkbox").is(':checked');
      console.log($check);
      // collect the index number of the submit value
      var index_no = $(this).index('input:submit');
  		var remove = prompt("Are you sure you want to delete this?");
      // This checkbox that was clicked will return a true (but where exactly are you returning to?)
      if (remove == "yes" && $check == true) {
        console.log(this);
        $(this).remove();
        console.log(index_no);
        $('#formlist > input:checkbox:eq('+index_no+')').remove();
        $('#formlist > textarea:eq('+index_no+')').remove();
        $('#formlist > li:eq('+index_no+')').remove();
      //   var $fcheck = $("input:checkbox");
      //   $fcheck.filter(':first').remove();
      //   var $box = $(".boxtext");
      //   $box.filter(':first').remove();
      }

      else if (remove == "no" || $check == false){
        alert("Please check box to remove");
        return;
      }
      else {
        alert("Remove this item or no?");
        return; 
      }
    });
  	// alert($('input').val());       //This function will post a window with the value, from the selection


//   $listItems.on('click', function(){
//     $(this).addClass('complete');
//   });

      // create the last submit variable that's clicked to perform the following directions
      var i = 5
 $("#form_2").on('click', 'input:submit:last', function(e) {  
    // bind the submit event handler to the function for the 2nd form (adding section);
    e.preventDefault()
    // return a boolean true before adding the chore to the list
    var $check = $("input:checkbox").is(':checked');
    // get the text value to add to the list of items
    var $gettext = $('input:text').filter(":last").val();
    var additem = prompt("Add" + " " + $gettext + " " + "to the list?");
    if ($check == true && additem == 'yes'){
      $("#formlist").append('<li class = "oneanddun">' + $gettext + '</li">');
      $("#formlist").append('<input type = "checkbox" class = "check">' + '<textarea type = "text" class = "boxtext" placeholder = "Describe the chore"></textarea>' + '<input type = "submit" id = "sub" value = "%{i}">'.replace('%{i}', i));
      $("#formlist").append('<br></br>');
      console.log($check);
      $("input:text").filter(":last").val('');
      // keep track of the list items with a counter increment outside the anonymous_function;
       i += 1;
      }    
    else if ($check == false && additem == 'yes') {
        alert("you forgot to click the \"check\" button");
        i; 
      }
      else {
        alert("please choose what to do with this chore");
      }
            
      });
});