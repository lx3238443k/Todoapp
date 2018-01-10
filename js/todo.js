$(document).ready(function(){

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

function randId(){
  return  Math.random().toString(36).substr(2);
}


function creatJob(str){
    let jobid = randId();
    $("#job-list").append(`<li data-jobid="${jobid}">
    <span>${str}</span><input type="checkbox">
</li>`);
}


$("#job-list").on('change',(e)=>{

    let _flag = e.target.checked;
    let _target = $(e.target);
    let _end_job = _target.parent();
    let _id = _end_job[0].dataset.jobid;
    // console.log(_id);
    
    if(_flag){
        _end_job.css('color','red');
    }else{
        _end_job.css('color','black');
    }
   
});


$('#add').click((e)=>{
    let input_value= $("#creat-jobs").val();
    if(input_value){
        creatJob(input_value);
        $("#creat-jobs").val(null);
    }else{
        return ;
    }
})



});