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
    var mins=1440;
    oneMinute(mins,pow_consumption,ds_pow_con,battery_capacity);
    fiveMinute(mins,pow_consumption,ds_pow_con,battery_capacity);
    oneHour(mins,pow_consumption,ds_pow_con,battery_capacity);
    whNwh(mins,pow_consumption,ds_pow_con,battery_capacity,work_hrs);
    pOneMinute(mins,pow_consumption,ds_pow_con,battery_capacity,drain);
    pFiveMinute(mins,pow_consumption,ds_pow_con,battery_capacity,drain);
    pOneHour(mins,pow_consumption,ds_pow_con,battery_capacity,drain);
    pWhNwh(mins,pow_consumption,ds_pow_con,battery_capacity,work_hrs,drain);
}

function oneMinute(mins,pow_consumption,ds_pow_con,battery_capacity){
    var total=(((mins*4)/60)*pow_consumption+((mins*56)/60)*ds_pow_con)/60;
    var output=Math.floor(battery_capacity/total);
    var result=document.getElementById("result1");
    result.textContent=`1 minute deep sleep mode: ${output} days`;
}
function fiveMinute(mins,pow_consumption,ds_pow_con,battery_capacity){
    var total=((((mins/5)*4)/60)*pow_consumption+(((mins/5)*296)/60)*ds_pow_con)/60;
    var output=Math.floor(battery_capacity/total);
    var result=document.getElementById("result2");
    result.textContent=`5 minute deep sleep mode:${output} days`;
}
function oneHour(mins,pow_consumption,ds_pow_con,battery_capacity){
    var total=((((mins/60)*4)/60)*pow_consumption+(((mins/60)*3596)/60)*ds_pow_con)/60;
    var output=Math.floor(battery_capacity/total);
    var result=document.getElementById("result3");
    result.textContent=`1 hour deep sleep mode:${output} days`;
}
function whNwh(mins,pow_consumption,ds_pow_con,battery_capacity,work_hrs){
    var a=((mins/5)*296)*work_hrs/24;
    var b=((mins/5)*4)*work_hrs/24;
    var c=((mins/60)*3596)*(24-work_hrs)/24;
    var d=((mins/60)*4)*(24-work_hrs)/24;
    var e=((a+c)/60)*ds_pow_con;
    var f=((b+d)/60)*pow_consumption;
    var g=(e+f)/60;
    var output4=Math.floor(battery_capacity/g);
    var result4=document.getElementById("result4");
    result4.textContent=`WH and NWH mode: ${output4} days`;
}
function pOneMinute(mins,pow_consumption,ds_pow_con,battery_capacity,drain){
    var total=(((mins*4)/60)*pow_consumption+((mins*56)/60)*ds_pow_con)/60;
    var output=Math.floor((battery_capacity-(drain*0.01*battery_capacity))/total);
    var result=document.getElementById("result5");
    result.textContent=`1 minute deep sleep mode: ${output} days`;
}
function pFiveMinute(mins,pow_consumption,ds_pow_con,battery_capacity,drain){
    var total=((((mins/5)*4)/60)*pow_consumption+(((mins/5)*296)/60)*ds_pow_con)/60;
    var output=Math.floor((battery_capacity-(drain*0.01*battery_capacity))/total);
    var result=document.getElementById("result6");
    result.textContent=`5 minute deep sleep mode:${output} days`;
}
function pOneHour(mins,pow_consumption,ds_pow_con,battery_capacity,drain){
    var total=((((mins/60)*4)/60)*pow_consumption+(((mins/60)*3596)/60)*ds_pow_con)/60;
    var output=Math.floor((battery_capacity-(drain*0.01*battery_capacity))/total);
    var result=document.getElementById("result7");
    result.textContent=`1 hour deep sleep mode:${output} days`;
}
function pWhNwh(mins,pow_consumption,ds_pow_con,battery_capacity,work_hrs,drain){
    var a=((mins/5)*296)*work_hrs/24;
    var b=((mins/5)*4)*work_hrs/24;
    var c=((mins/60)*3596)*(24-work_hrs)/24;
    var d=((mins/60)*4)*(24-work_hrs)/24;
    var e=((a+c)/60)*ds_pow_con;
    var f=((b+d)/60)*pow_consumption;
    var g=(e+f)/60;
    var output4=Math.floor((battery_capacity-(drain*0.01*battery_capacity))/g);
    var result4=document.getElementById("result8");
    result4.textContent=`WH and NWH mode: ${output4} days`;
}