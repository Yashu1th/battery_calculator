function calculate(){
    var battery_capacity=document.getElementById("bat_cap").value;
    document.getElementById("bat-cap-val").textContent=battery_capacity+" mah";
    var pow_consumption=document.getElementById("pow_con").value;
    document.getElementById("pow-con-val").textContent=pow_consumption+" mah";
    var ds_pow_con=document.getElementById("ds_pow_con").value;
    document.getElementById("ds-pow-con-val").textContent=ds_pow_con+" mah";
    var work_hrs=document.getElementById("work_hrs").value;
    document.getElementById("work-hrs-val").textContent=work_hrs+" hrs";
    var drain=document.getElementById("drain").value;
    document.getElementById("drain-val").textContent=drain+" %";
    var secs=86400;
    
    var active =document.getElementById('active-time').value;
    if(document.getElementById('input1').checked){
        var sleep=60-active;
        var mins=1440;
        oneMinute(mins,pow_consumption,ds_pow_con,battery_capacity,active,sleep);
        pOneMinute(mins,pow_consumption,ds_pow_con,battery_capacity,drain,active,sleep);
    }
    else if (document.getElementById('input2').checked){
        var sleep=300-active;
        var mins=1440;
        var mins=mins/5;
        oneMinute(mins,pow_consumption,ds_pow_con,battery_capacity,active,sleep);
        pOneMinute(mins,pow_consumption,ds_pow_con,battery_capacity,drain,active,sleep);
    }
    else if(document.getElementById('input3').checked){
        var sleep=3600-active;
        var mins=1440;
        var mins=mins/60;
        oneMinute(mins,pow_consumption,ds_pow_con,battery_capacity,active,sleep);
        pOneMinute(mins,pow_consumption,ds_pow_con,battery_capacity,drain,active,sleep);
    }
    else if(document.getElementById('input4').checked){
        var mins=1440;
        whNwh(mins,pow_consumption,ds_pow_con,battery_capacity,work_hrs,active);
        pWhNwh(mins,pow_consumption,ds_pow_con,battery_capacity,work_hrs,drain,active);
    }
    else{
        alert("please select the mode");
    }
}

function oneMinute(mins,pow_consumption,ds_pow_con,battery_capacity,active,sleep){
    
    var total=(((mins*active)/60)*pow_consumption+((mins*sleep)/60)*ds_pow_con)/60;
    var output=Math.floor(battery_capacity/total);
    var result=document.getElementById("result");
    result.textContent=`${output} days`;
}
function whNwh(mins,pow_consumption,ds_pow_con,battery_capacity,work_hrs,active){
    var sleep1=300-active;
    var sleep2=3600-active;
    var a=((mins/5)*sleep1)*work_hrs/24;
    var b=((mins/5)*active)*work_hrs/24;
    var c=((mins/60)*sleep2)*(24-work_hrs)/24;
    var d=((mins/60)*active)*(24-work_hrs)/24;
    var e=((a+c)/60)*ds_pow_con;
    var f=((b+d)/60)*pow_consumption;
    var g=(e+f)/60;
    var output4=Math.floor(battery_capacity/g);
    var result4=document.getElementById("result");
    result4.textContent=`${output4} days`;
}
function pOneMinute(mins,pow_consumption,ds_pow_con,battery_capacity,drain,active,sleep){
    var total=(((mins*active)/60)*pow_consumption+((mins*sleep)/60)*ds_pow_con)/60;
    var output=Math.floor((battery_capacity-(drain*0.01*battery_capacity))/total);
    var result=document.getElementById("result1");
    result.textContent=`${output} days`;
}
function pWhNwh(mins,pow_consumption,ds_pow_con,battery_capacity,work_hrs,drain,active){
    var sleep1=300-active;
    var sleep2=3600-active;
    var a=((mins/5)*sleep1)*work_hrs/24;
    var b=((mins/5)*active)*work_hrs/24;
    var c=((mins/60)*sleep2)*(24-work_hrs)/24;
    var d=((mins/60)*active)*(24-work_hrs)/24;
    var e=((a+c)/60)*ds_pow_con;
    var f=((b+d)/60)*pow_consumption;
    var g=(e+f)/60;
    var output4=Math.floor((battery_capacity-(drain*0.01*battery_capacity))/g);
    var result4=document.getElementById("result1");
    result4.textContent=`${output4} days`;
}