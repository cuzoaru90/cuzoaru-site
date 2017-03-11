$(document).ready(function(){
	 
  
  /** Backgrounds Project content here **/
  var activeProject = null;
  
  $("#bloccit").css('background-image', 'url("images/bloccit.png")');
  
  $("#blocjams").css('background-image', 'url("images/blocjams.png")');
   
  $("#world").css('background-image', 'url("images/mapDefault.jpg")');
   
  $("#to-do-list").css('background-image', 'url("images/angular-todo.png")');
   
  
  
  
  /** Mouse functions begin here. Mouseovers will be refactored into one function at some point once more projects have been added.
**/
  
  /** Links **/
  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
  });

  /** Menu Fields **/
  $('#name').click(function(){
	
	  if (activeProject == "bloccit"){
	    $('#field').html("<p>&nbsp;</p><p> Bloccit </p>");
	  }
	
	  if (activeProject == "blocjams"){
	    $('#field').html("<p>&nbsp;</p><p> Bloc Jams </p>");
	  }
	
	  if (activeProject == "world"){
	    $('#field').html("<p>&nbsp;</p><p> World Capitals Quiz </p>");
	  }
	
  });

  $('#description').click(function(){
	
	  if (activeProject == "bloccit"){
	    $('#field').html("<p>&nbsp;</p><p> Create topics and post your thoughts on this Reddit style forum. Sign up today!</p>");
	  }
	
	  if (activeProject == "blocjams"){
	    $('#field').html("<p>&nbsp;</p><p> Enjoy a large library of great tunes with this web-based mp3 player!</p>");
	  }
	
	  if (activeProject == "world"){
	    $('#field').html("<p> Test your geographical knowledge by quizzing yourself on the capitals of the world!</p>");
	  }
	
  });
  
  /*==============================

  == Projects ==

  =================================*/
  $('#bloccit').mouseenter(function(){
    if ( $('#field').css('visibility') == 'hidden' || activeProject != "bloccit") {
      $('#field').html("<p>&nbsp;</p><p> Bloccit </p>");
      $('#field').css('visibility','visible').hide().fadeIn(1000);
   
      activeProject = "bloccit"; 
    }
   
  });

  $('#blocjams').mouseenter(function(){
    if ( $('#field').css('visibility') == 'hidden' || activeProject != "blocjams") {
      $('#field').html("<p>&nbsp;</p><p> Bloc Jams </p>");
      $('#field').css('visibility','visible').hide().fadeIn(1000);
   
      activeProject = "blocjams";
    }
   
  });


  $('#world').mouseenter(function(){
    if ( $('#field').css('visibility') == 'hidden' || activeProject != "world") {
      $('#field').html("<p>&nbsp;</p><p> World Capitals Quiz </p>");
      $('#field').css('visibility','visible').hide().fadeIn(1000);
   
      activeProject = "world";
    }
   
  });


});