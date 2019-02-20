const date_area = document.querySelector("#date_area"),
    month_val = document.querySelectorAll(".month_area"),
    year_area = document.querySelectorAll(".year_val"),
    vis = document.querySelector("#vis");

    var bool_vis = false;
    console.log(year_area);


month_val.forEach(function(month){
    month.addEventListener('click',()=>{
        console.log("fg");
        var feb = document.querySelectorAll(".not_feb"),
        month_area = document.querySelector("#month").value,
        big_month = document.querySelector("#big_month");

        feb.forEach(function(feb_date){
        //Проверка месяца
        if(month_area==2){
            feb_date.style.display = 'none';
                if(date_area.value>28){
                    date_area.value = 1;
                }
                if(bool_vis==true){
                    vis.style.display = "block";
                }
         
        }else if(month_area<8 && month_area%2==0){
            feb_date.style.display = 'block';
            big_month.style.display='none';
        }else if(month_area>8 && month_area%2!=0){
            feb_date.style.display = 'block';
            big_month.style.display='none';
        }else{
            feb_date.style.display = 'block';
            big_month.style.display='block';
        }
    });
    });
});

year_area.forEach(function(year){
    year.addEventListener('click',()=>{
            var month_area = document.querySelector("#month");
            

            date_area.value = 1;
            month_area.value = 1;
        //Проверка високосности
        if(year.value%4==0&&year.value%100!=0 || year.value%400==0){
            bool_vis = true;
        }else{
            bool_vis = false;
        }
    });
});