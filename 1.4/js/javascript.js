var space_exp=/\s/;
var year_exp = /\d{4}/g;
var reg_exp = /\d{2}/g;
var logexp=/[0-9a-z]{3,10}/;
var pswexp=/(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z]{3,10}/g;

function valid_aut(autorisat){
    var login = autorisat.log.value;
    var password = autorisat.psw.value;

    if(logexp.test(login)==false&&pswexp.test(password)==false){
        alert("Заполните поля");
    }else if(logexp.test(login)==false){
        alert("Неверно введен логин");
    }else if(pswexp.test(password)==false){
        alert("Неверно введен пароль");
    }
}

function valid_otz(otz){
    var tx_ar_otz = otz.tx_ar.value;
        
    if(tx_ar_otz.length ==0 || space_exp.test(tx_ar_otz)==true){
        alert("Оставьте свой отзыв");
    }
    var radio_btn=otz.mark.value;
    if(radio_btn == ''){
        alert("Поставьте оценку");
    }
}

function valid_ankets(){
    var checkb=document.querySelectorAll('.ques');
    var counter =0;
    var count_quest=checkb.length/4;

    for(var i = 0; i<12;i+=4){
        for(var j = i; j<i+4; j++){
            if(checkb[j].children[0].checked){
                console.log('нажато');
                counter +=1;
                break;
            }
            else{
                bool=false;
            }
        }
    }
    
    if(counter!=count_quest){
        alert("Ответьте на все вопросы");
    }
}

function valid_clinics(clinics){
    //var symptomy = clinics.sympt.value;

    var nowDate = new Date(); 
    var our_year = nowDate.getFullYear();
    var our_month = nowDate.getMonth();
    var our_date = nowDate.getDate(); 
    our_month+=1;

    var symptomy= clinics.sympt.value;
    var date = clinics.date.value;
    var time = clinics.time.value;
    var hours = '';
    
    if(symptomy.length ==0 || space_exp.test(symptomy)==true){
        alert("Введите симптом");
    }

    if(date.length ==0){
        alert('Введите дату');
    }else{
        var year_users = date.match(year_exp);
        var month_users = date.match(reg_exp)[2];
        var date_users = date.match(reg_exp)[3];
        
        if(year_users!=our_year || month_users!=our_month || date_users<=our_date){
            alert('Введите корректную дату');
        }
    }

    if(time!=''){
        for(var i=1;i>=0;i--){
            hours = time[i] +  hours;
        }
    }
    if(hours >=16 || hours<=08){
        alert("Клиника работает с 8 до 16");
    }

}