$(function(){
	$('#initial_position').click(function(){
		
		//Сначала переведем координаты фигуры из нотации с латинскими буквами в систему координат
		var initialPosition = $('#input_field').val();//забираем значение из поля ввода
		var x;
		var y = Number(initialPosition[1]);//координата y 
		switch (initialPosition[0]) {//координатy х определяем переводом из латиницы в цифры
			case "A": x = 1; break;
			case "B": x = 2; break;
			case "C": x = 3; break;
			case "D": x = 4; break;
			case "E": x = 5; break;
			case "F": x = 6; break;
			case "G": x = 7; break;
			case "H": x = 8; break;
			default: alert("Таких координат нет");
		}

		console.log("Текущие координаты: " + x + "/" + y);

		//Далее создаем массивы с координатами возможных полей и выводим только те, которые удовлетворяют ограничениям на размер доски
		var x1, x2, x3, x4, x5, x6, x7, x8;
		var y1, y2, y3, y4, y5, y6, y7, y8;

		x1 = x6 = x - 1;
		x2 = x5 = x + 1;
		x3 = x4 = x + 2;
		x7 = x8 = x - 2;

		y1 = y2 = y + 2;
		y3 = y8 = y + 1;
		y4 = y7 = y - 1;
		y5 = y6 = y - 2;

		var arrx = [x1, x2, x3, x4, x5, x6, x7, x8];
		var arry = [y1, y2, y3, y4, y5, y6, y7, y8];
		var result = "";//переменная для записи и вывода строки с результатами 


		for (var i = 0; i <= 7; i++) {
			if (arrx[i] > 0 && arry[i] > 0 && arrx[i] <= 8 && arry[i] <= 8) {//заданы условия на границы шахматной доски
				switch (arrx[i]) {//обратный перевод координаты х из чисел в латинские буквы
				case 1: x = "A"; break;
				case 2: x = "B"; break;
				case 3: x = "C"; break;
				case 4: x = "D"; break;
				case 5: x = "E"; break;
				case 6: x = "F"; break;
				case 7: x = "G"; break;
				case 8: x = "H"; break;
			}
				console.log(x + "/" + arry[i]);
				result = result + x + arry[i] + " ";
			}	
		}

		alert(result);



	}
		)


})
