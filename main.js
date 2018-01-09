$(document).ready(function(){
 

  var that_active = $('#side-list');

  $('#side-list').on('click', 'li', function(ev) {
    // this 指向委托的对象 li
    that_active.toggleClass('active');
    if(this.id==='creat-list'){
      $(this).before('<li class="todo-list active"></li>');
      that_active = $(this).prev();
    }
    else{
      $(this).toggleClass('active');
      that_active = $(this);
    }
    
   
    
})





});