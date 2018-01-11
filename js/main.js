$(function () {
 
});




 
  $(document).bind("contextmenu", function() { return false; });

  let that_active = $('#side-list');

  function randTitle(num){
    
    let a='未命名标题';
    return a+num;

  }

  let num =0;
  // 左侧栏事件监听
  $('#side-list').on('mouseup', 'li', function(ev) {
    // this 指向委托的对象 li

    if(ev.which===1||ev.button==0){
          that_active.toggleClass('active');
          if(this.id==='creat-list'){
            num++;
            let title = randTitle(num);
            $(this).before(`<a href="#/${num}">
                            <li class="todo-list active" data-listnum="${num}">
                              <div class="list-logo">
                                  <i class="icon-list"></i>
                              </div>
                              <div class="list-title">${title}</div>
                              <div class="list-num"></div>
                            </li></a>`);
            that_active = $(this).prev();
            $(this).prev().css("opacity","0");
            setTimeout(()=>{
              $(this).prev().css("opacity","1");
            },100)
          }
          else{
            $(this).toggleClass('active');
            that_active = $(this);
          }

          Router.route(`/${num}`, function() {
            clearFull()
             renderView();
          });


    }

    if(ev.which===3||ev.button==2){

      $('#dialog').css({
        "display":"block",
        "top":ev.clientY,
        "left":ev.clientX
      });

      $('#dialog .dialog-inner').append(` <li>
          <i class="icon-pause"></i>
                <span class="dialog-text">复制</span>
            </li>
            <li>
                <i class="icon-copy"></i>
                <span class="dialog-text">粘贴</span>
            </li>`);

      $('#dialog .dialog-warrin').append(`<li id="del-btn" data-dellist="${ev.currentTarget.dataset.listnum
      }">
      <label for="del-btn">
      <i class="icon-del"></i>
      <span class="dialog-text">删除</span></label>
        </li>`);


      

    }
   
  });
  
      // 关闭弹窗
       $('.left').on('mousedown', 'li', (e)=>{
       clearDialog();
      });
   
      // 删除内容 
      $('#dialog').on('click','li',(e)=>{

        console.log(e.target.dataset.dellist);

        $(`#side-list li[data-listnum="${e.target.dataset.dellist}"]`).remove();  
        clearDialog();
      });
  
  // 清空弹窗
  function clearDialog(){
        $('#dialog').css({
          "display":"none"
        });
  
  
        $('#dialog .dialog-inner li').remove();
        $('#dialog .dialog-warrin li').remove();
      }
    
    
    



