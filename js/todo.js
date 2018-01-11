

// 存储数组对象

    // job对象
    var job = function(str,jobtime,Isjobend,hash){
        this.str = str;
        this.jobtime = jobtime;
        this.Isjobend = Isjobend;
        this.hash = hash;
    }




// 键盘创建job
$("#creat-jobs").on('keydown',(e)=>{
    let input_value= $("#creat-jobs").val();
    if(e.keyCode == 13){
        if(input_value){
            creatJob(input_value);
            $("#creat-jobs").val(null);
        }else{
            return ;
        }

    }
});

// 生成随机id
function randId(){
  return  Math.random().toString(36).substr(2);
}

// 生成时间
function getTime(){
    let time = new Date();
    
    return time.getTime();

}

// 删除
$('#job-list').on('click','button',(e)=>{
  
    var target = $(e.target);
    console.log(target.parent());
    delStroe(target.parent()[0].dataset.jobid);
    target.parent().remove();
})




// 生成job
function creatJob(str){
    let hash = window.location.hash.slice(2);
    let jobid = randId();
    let jobtime = getTime();
    let Isjobend = 0;
    $("#job-list").append(`<li data-jobid="${jobid}" data-time="${jobtime}" data-Isjobend="${Isjobend}">
    <span>${str}</span><input type="checkbox"><button id="deljob">删除</button>
</li>`);

    let job_child = new job(str,jobtime,Isjobend,hash);
    console.log(job_child);
    saveStroe(jobid,job_child);

     
}




// 标记完成
$("#job-list").on('change',(e)=>{

    let _flag = e.target.checked;//判断是否选中
    let _target = $(e.target);
    let _end_job = _target.parent();
    let _id = _end_job[0].dataset.jobid;
   
    console.log(_end_job);
    console.log(_end_job[0].dataset);
    if(_flag){
        _end_job.css('color','red');
        _end_job[0].dataset.Isjobend = 1;
        let job_child = getStroe(_id);
        job_child.Isjobend = 1;
        saveStroe(_id,job_child);
    

    }else{
        _end_job.css('color','black');
        _end_job[0].dataset.Isjobend = 0;
        let job_child = getStroe(_id);
        job_child.Isjobend = 0;
        saveStroe(_id,job_child);
    }
   
});

// 添加
$('#add').click((e)=>{
    let input_value= $("#creat-jobs").val();
    if(input_value){
        creatJob(input_value);
        $("#creat-jobs").val(null);
        
    }else{
        return ;
    }
});


// 比较排序
function letterSort(arr){
    let newArr = [];
    let list =document.getElementById('job-list');
    let l = arr.length;
    for(let i=0;i<l;i++){
        newArr[i]=arr[i];
      
    }
   
    newArr.sort((time1,time2)=>{
        let a = time1.innerText.charCodeAt();
        let b=  time2.innerText.charCodeAt();
        console.log(a);
        return a>b;
        
    });

    for(let i=0;i<l;i++){
        list.appendChild(newArr[i]);
    }
  
}


// 排序
$('#sort-letter').click((e)=>{
    letterSort($('#job-list li'));
    

});

// 刷新页面
function renderView(){
    console.log('zhelishimain.js');

    let hash = window.location.hash.slice(2);

    let storage =window.localStorage;
    let val =  storage.valueOf();
    let arr = Object.keys(val);
    for(let i=0;i<arr.length;i++){
        let obj = getStroe(arr[i]);
        if(obj.hash == hash){
            $('#job-list').append(`<li data-jobid="${arr[i]}" data-time="${ obj.jobtime}" data-Isjobend="${obj.Isjobend}">
            <span>${obj.str}</span><input type="checkbox"><button id="deljob">删除</button>
            </li>`);
            }
            let ck = $(`#job-list li[data-Isjobend="1"`).children('input[type=checkbox]');
        
            $(`#job-list li[data-Isjobend="1"`).css('color','red');
            
            for(let j=0;j<ck.length;j++){
                ck[j].checked =true;
            }
        }
       
       
       
    

}

function clearFull(){
    $('#job-list li').remove();
}


// 保存数据
function saveStroe(jobid,job){
    let storage = window.localStorage;
    jobs = JSON.stringify(job);
    storage.setItem(jobid,jobs);
}

// 请求数据
function getStroe(jobid){
    let storage = window.localStorage;
    
    let infoStr =  storage.getItem(jobid);
    return JSON.parse(infoStr);
}

// 删除数据
function delStroe(jobid){
    let storage = window.localStorage;
    storage.removeItem(jobid);
}


renderView();

//页面路由



