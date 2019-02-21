const date_area = document.querySelector("#date_area"),
    month_val = document.querySelector('#month'),
    year_area = document.querySelector("#year_area"),
    vis = document.querySelector("#vis");
//Переменная високосного года
var bool_vis = false;
//Слушатель изменения месяца
month_val.addEventListener('change', () => {
    var feb = document.querySelectorAll(".not_feb"), //29,30,31-ое число
        big_month = document.querySelector("#big_month"); //31-ое число
    //Обнуление даты
    date_area.value = 1;

    feb.forEach(function (feb_date) {
        //Проверка месяца
        if (month_val.value == 2) {
            feb_date.style.display = 'none';
            if (date_area.value > 28) {
                date_area.value = 1;
            }
            if (bool_vis == true) {
                vis.style.display = "block";
            }

        } else if (month_val.value < 8 && month_val.value % 2 == 0) {
            feb_date.style.display = 'block';
            big_month.style.display = 'none';
        } else if (month_val.value > 8 && month_val.value % 2 != 0) {
            feb_date.style.display = 'block';
            big_month.style.display = 'none';
        } else {
            feb_date.style.display = 'block';
            big_month.style.display = 'block';
        }
    });
});

//Слушатель изменения года
year_area.addEventListener('change', () => {
    //Обнуление даты и месяца
    date_area.value = 1;
    month_val.value = 1;
    //Проверка високосности
    if (year_area.value % 4 == 0 && year_area.value % 100 != 0 || year_area.value % 400 == 0) {
        bool_vis = true;
    } else {
        bool_vis = false;
    }
});