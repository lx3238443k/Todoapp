$(document).ready(function(){
 

  let that_active = $('#side-list');

  function randTitle(num){
    
    let a='未命名标题';
    return a+num;

  }

  let num =0;

  $('#side-list').on('click', 'li', function(ev) {
    // this 指向委托的对象 li
    that_active.toggleClass('active');
    if(this.id==='creat-list'){
      num++;
      let title = randTitle(num);
      $(this).before(`<li class="todo-list active">
                        <div class="list-logo">
                            <i class="icon-list"></i>
                        </div>
                        <div class="list-title">${title}</div>
                        <div class="list-num"></div>
                      </li>`);
      that_active = $(this).prev();
    }
    else{
      $(this).toggleClass('active');
      that_active = $(this);
    }
    
   
    
})





});