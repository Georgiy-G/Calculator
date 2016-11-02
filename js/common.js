$(function() {
	var equalBoolean = true;
	//Адаптив-header-menu
	$(".burger-menu").click(function() {
		$(".navigation li").slideToggle();
	})
	//Переключение калькулятора НДС
	$(".nds-calculator__form li:last-child").click(function(e) {
		e.preventDefault();
		$(".nds-calculator__form li").removeClass("active");
		$(this).addClass("active");
		$(".nds-calculator__result1").hide();
		$(".nds-calculator__result2").show();

	})
	$(".nds-calculator__form li:first-child").click(function(e) {
		e.preventDefault();
		$(".nds-calculator__form li").removeClass("active");
		$(this).addClass("active");
		$(".nds-calculator__result2").hide();
		$(".nds-calculator__result1").show();

	})
	


	//Отображение на экран
	
	$(".calculator__key").click( function () {
		if (equalBoolean == true) {
    	$('#calc__display').val( $('#calc__display').val() + $(this).attr('value') );
    } else {
    	$('#calc__display').val( $(this).attr('value') );

    }
    equalBoolean = true;
	});
	//Очищение
	$(".calculator__clear").click( function () {
		$('#calc__display').val('');
	});
	
	//Операторы + - / *
	$(".calculator__operator").click( function () {
		if (   !(($("#calc__display").val() == 0) ||
				($("#calc__display").val().charAt($("#calc__display").val().length -1) == '+') ||
				($("#calc__display").val().charAt($("#calc__display").val().length -1) == '-') ||
				($("#calc__display").val().charAt($("#calc__display").val().length -1) == '*') ||
				($("#calc__display").val().charAt($("#calc__display").val().length -1) == '/') ||
				($("#calc__display").val().charAt($("#calc__display").val().length -1) == '.') ) ) {

			$('#calc__display').val( $('#calc__display').val() + $(this).attr('value') );
		}
	});
	//Оператор дробных чисел
	$(".calculator_point").click( function () {
		if ($('#calc__display').val() == "") {
			$('#calc__display').val("0.");
		}
		if (   !(($("#calc__display").val().charAt($("#calc__display").val().length -1) == '+') ||
				($("#calc__display").val().charAt($("#calc__display").val().length -1) == '-') ||
				($("#calc__display").val().charAt($("#calc__display").val().length -1) == '*') ||
				($("#calc__display").val().charAt($("#calc__display").val().length -1) == '/') ||
				($("#calc__display").val().charAt($("#calc__display").val().length -1) == '.') ) &&
					((($("#calc__display").val().substring($("#calc__display").val().lastIndexOf("+")+1).indexOf(".") == -1)) || 
					(($("#calc__display").val().substring($("#calc__display").val().lastIndexOf("-")+1).indexOf(".") == -1)) ||
					(($("#calc__display").val().substring($("#calc__display").val().lastIndexOf("*")+1).indexOf(".") == -1)) ||
					(($("#calc__display").val().substring($("#calc__display").val().lastIndexOf("/")+1).indexOf(".") == -1)))) {

			$('#calc__display').val( $('#calc__display').val() + $(this).attr('value') );
		}
	 
		
	});
	//Удаление элемента
	$(".calculator__delete").click( function() {
		$('#calc__display').val($('#calc__display').val().substring(0, $('#calc__display').val().length - 1));
	});
	//Смена знака на +/-
	$(".calculator__sign").click( function() {
		if (!($('#calc__display').val().charAt($("#calc__display").val().length-1) == "-")) {
			$('#calc__display').val( ($("#calc__display").val())+"-");
		} else {
			$('#calc__display').val($("#calc__display").val().substring(0,$("#calc__display").val().length-1));
		}

	})
	//Подсчитать "="
	$(".calculator__equal").click (function() {
		equalBoolean = false;
		if (eval($('#calc__display').val())> 1) {
			$('#calc__display').val( eval($('#calc__display').val()));
		} else {
			$('#calc__display').val( eval($('#calc__display').val()).toFixed(2));
		}
	})
	// ----------------------------------------------------------

	//Калькудятор НДС
	$('.nds-calculator__result input').click( function(){
        $(this).select()
    })
    //Начислить
    $("#nds-calculator__sum1").on("input", function () {
    	$(".result__sum1").html( (parseInt($("#nds-calculator__sum1").val()) * parseInt($("#nds-calculator__percent1").val()))/100);
    	$(".result__sumall1").html( ((parseInt($("#nds-calculator__sum1").val()) * (parseInt($("#nds-calculator__percent1").val())+100)))/100);
    })
    $("#nds-calculator__percent1").on("input", function () {
    	$(".result__sum1").html( (parseInt($("#nds-calculator__sum1").val()) * parseInt($("#nds-calculator__percent1").val()))/100);
    	$(".result__sumall1").html( ((parseInt($("#nds-calculator__sum1").val()) * (parseInt($("#nds-calculator__percent1").val())+100)))/100);
    })
    //Выделить
    $("#nds-calculator__sum2").on("input", function () {
    	$(".result__sum2").html( (parseInt($("#nds-calculator__sum2").val())*(1-1/(parseInt($("#nds-calculator__percent2").val())/100+1))).toFixed(2));
    	$(".result__sumall2").html( (parseInt($("#nds-calculator__sum2").val())/(parseInt($("#nds-calculator__percent2").val())/100+1)).toFixed(2));

    })
    $("#nds-calculator__percent2").on("input", function () {
    	$(".result__sum2").html( (parseInt($("#nds-calculator__sum2").val())*(1-1/(parseInt($("#nds-calculator__percent2").val())/100+1))).toFixed(2));
    	$(".result__sumall2").html( (parseInt($("#nds-calculator__sum2").val())/(parseInt($("#nds-calculator__percent2").val())/100+1)).toFixed(2));
    })

    // ----------------------------------------------------------
    //Калькулятор процентов
    
    $(".button_ok1").click(function() { 
    	$(this).closest("p").siblings(".main__block__inline").children(".result").html( (parseInt($(this).siblings("#percent-calculator__input1").val())*parseInt($(this).siblings(".mobile-block").children("#percent-calculator__input2").val()))/100);
    })
    $(".button_ok2").click(function() { 
    	$(this).closest("p").siblings(".main__block__inline").children(".result").html( (parseInt($(this).siblings("#percent-calculator__input1").val())/parseInt($(this).siblings(".mobile-block").children("#percent-calculator__input2").val()))*100);
    })
    $(".button_ok3").click(function() { 
    	$(this).closest("p").siblings(".main__block__inline").children(".result").html( ((parseInt($(this).siblings("#percent-calculator__input1").val())+100)*parseInt($(this).siblings(".mobile-block").children("#percent-calculator__input2").val()))/100);
    })
    $(".button_ok4").click(function() { 
    	$(this).closest("p").siblings(".main__block__inline").children(".result").html( ((100-parseInt($(this).siblings("#percent-calculator__input1").val()))*parseInt($(this).siblings(".mobile-block").children("#percent-calculator__input2").val()))/100);
    })
    $(".button_ok").click(function() { 
    	$(this).closest("p").siblings(".main__block__inline").children(".vallInput1").html(($(this).siblings("#percent-calculator__input1").val()));
    	$(this).closest("p").siblings(".main__block__inline").children(".vallInput2").html(($(this).siblings(".mobile-block").children("#percent-calculator__input2").val()));
    	if (($(this).siblings("#percent-calculator__input1").val() == "") || ($(this).siblings(".mobile-block").children("#percent-calculator__input2").val() == "")) {
    		$(this).closest("p").siblings(".main__block__inline").find(".vallInput1").html("0");
	    	$(this).closest("p").siblings(".main__block__inline").find(".vallInput2").html("0");
	    	$(this).closest("p").siblings(".main__block__inline").find(".result").html("0");
    	}
    })
    //Инженерный калькулятор
      // ID для кнопок
	var buttons = [
	                  ['sin', 'asin', 'pi', 'mc', 'mr', 'mplus', 'mminus'],
					  ['cos', 'acos', 'e', 'sqrt', 'seven', 'eight', 'nine'],
					  ['tg', 'atg', 'supsqrt', 'supsqr', 'four', 'five', 'six'],
					  ['ctg', 'actg', 'sqr', 'plusminus', 'one', 'two', 'three'],
					  ['log', 'log2x', '10sup', 'percent', 'zero', '2zero', 'dot'],
					  ['ln', 'logyx', '1delx', 'plus', 'minus', 'umnj', 'del'],
					  ['colspan3', 'ravno', 'bspace', 'ac', 'c']
	              ],
		// Текст для кнопок
		txt = [
	                  ['sin', 'arcsin', '&prod;', 'MC', 'MR', 'M+', 'M-'],
					  ['cos', 'arccos', 'e', '&radic;X', '7', '8', '9'],
					  ['tg', 'arctg', '<sup>y</sup>&radic;X', 'X<sup>y</sup>', '4', '5', '6'],
					  ['ctg', 'arcctg', 'X<sup>2</sup>', '&plusmn;', '1', '2', '3'],
					  ['lgX', 'log<sub>2</sub>X', '10<sup>x</sup>', '%', '0', '00', '.'],
					  ['lnX', 'log<sub>y</sub>X', '1&divide;x', '+', '-', '&times;', '&divide;'],
					  ['<label class="labelactive"><input type="radio" checked name="rad" value="0" /> Градусы</label> <label><input type="radio" name="rad" value="1" /> Радианы</label>', '=', 'DEL', 'AC', 'C']
		        ],
		// Кнопки, имеющие силу в любой момент работы с калькулятором, и не являются тригонометрическими функциями
		go = ['bspace', 'ac', 'c', 'mminus', 'mplus', 'mc', 'mr', 'plusminus', 'sqrt', 'pi', 'sqr', '10sup', '1delx', 'log', 'ln', 'log2x'],
		// Тригонометрические функции
		go2 = ['sin', 'asin', 'cos', 'acos', 'tg', 'atg', 'ctg', 'actg'], 
		// Будем формировать таблицу
		table = '<table border="0" cellspacing="0" cellpadding="4"><tbody>',
		// Определённым ячейкам будем присваивать класс (от класса зависит цвет)
		cl = '',
		// Число, сохранённое в памяти калькулятора
		saved = 0,
		// Математическая операция между первым и вторым числом, которую надо произвести 
		// (берётся из атрибута data-index, совпадает с каким-либо значением из массива buttons),
		// только для мат.действий, не входящих в массивы go и go2
		action = '',
		// Первое число для мат.операции
		current = 0, 
		// Второе число для мат.операции
		current2 = 0,
		// При 0 - на табло записывается первое число. При 1 и 2 - второе. Мат.действия, 
		// не входящие в массивы go и go2 выполняются только при значении 2
		flag = 0, 
		// При ok = 1 выполняем мат.операции, содержащиеся в go и go2, при 0 - не содержащиеся
		ok = 0, 
		// 0 - использовать градусы для тригон.функций, 1 - радианы
		rad = 0,
		// Объект содержит набор мат.функций, определённое действие выполняется с помощью конструкции calc_actions[action](),
		// где action = параметр data-index и совпадает с каким-либо элементом массива buttons
		calc_actions =  {
                            'plus': function() {
                        	    $('#txt').html(current + ' + ' + current2 + ' = ' + (current + current2));
								return current + current2;
                        	},
                            'minus': function() {
                        		$('#txt').html(current + ' - ' + current2 + ' = ' + (current - current2));
								return current - current2;
                        	},
                            'umnj': function() {
                        		$('#txt').html(current + ' &times; ' + current2 + ' = ' + (current * current2));
								return current * current2;
                        	},
                            'del': function() {
                        		$('#txt').html(current + ' &divide; ' + current2 + ' = ' + (current / current2));
								return current / current2;
                        	},
							'supsqr': function() {
							    $('#txt').html(current + '<sup>' + current2 + '</sup>' + ' = ' + Math.pow(current, current2));
								return Math.pow(current, current2);
							},
							'sqrt': function() {
							    flag == 2 ? current = Math.sqrt(current2) : current = Math.sqrt(current);
								current2 = 0;
								flag = 0;
								action = '';
								$('#txt').html('&radic;' + Math.pow(current, 2) + ' = ' + current);
								$('#tablo').val(current);
							},
							'percent': function() {
							    if(action == 'plus' || action == 'minus') {
								    it = (current*current2)/100;
									if(action == 'plus') {
									    it = current + it;
										$('#txt').html(current + ' + ' + '((' + current + ' * ' + current2 + ')/100) = ' + it);
									} else {
									    it = current - it;
									    $('#txt').html(current + ' - ' + '((' + current + ' * ' + current2 + ')/100) = ' + it);
									}
								} else {
								    it = (current2*100)/current;
									$('#txt').html('(' + current2 + ' * 100)/' + current + ' = ' + it);
								}
								return it;
							},
							'sin' : function(x) {
							    rad == 0 ? deg = '&deg;' : deg = '';
								flag == 0 ? y = current : y = current2;
								$('#txt').html('sin(' + y + deg + ') = ' + Math.sin(x));
								return Math.sin(x);
							},
							'asin' : function(x) {
							    rad == 0 ? deg = '&deg;' : deg = '';
								flag == 0 ? y = current : y = current2;
								$('#txt').html('arcsin(' + y + deg + ') = ' + Math.asin(x));
								return Math.asin(x);
							},
							'cos' : function(x) {
							    rad == 0 ? deg = '&deg;' : deg = '';
								flag == 0 ? y = current : y = current2;
								$('#txt').html('cos(' + y + deg + ') = ' + Math.cos(x));
								return Math.cos(x);
							},
							'acos' : function(x) {
							    rad == 0 ? deg = '&deg;' : deg = '';
								flag == 0 ? y = current : y = current2;
								$('#txt').html('arccos(' + y + deg + ') = ' + Math.acos(x));
								return Math.acos(x);
							},
							'tg' : function(x) {
							    rad == 0 ? deg = '&deg;' : deg = '';
								flag == 0 ? y = current : y = current2;
								$('#txt').html('tg(' + y + deg + ') = ' + Math.tan(x));
								return Math.tan(x);
							},
							'atg' : function(x) {
							    rad == 0 ? deg = '&deg;' : deg = '';
								flag == 0 ? y = current : y = current2;
								$('#txt').html('arctg(' + y + deg + ') = ' + Math.atan(x));
								return Math.atan(x);
							},
							'ctg' : function(x) {
								rad == 0 ? deg = '&deg;' : deg = '';
								flag == 0 ? y = current : y = current2;
								$('#txt').html('ctg(' + y + deg + ') = ' + Math.sin(x)/Math.cos(x));
								return Math.sin(x)/Math.cos(x);
							},
							'actg' : function(x) {
							    rad == 0 ? deg = '&deg;' : deg = '';
								flag == 0 ? y = current : y = current2;
								$('#txt').html('arcctg(' + y + deg + ') = ' + (Math.PI/2)-Math.atan(x));
								return (Math.PI/2)-Math.atan(x);
							},
							'sqr' : function() {
							    flag == 2 ? it = Math.pow(current2, 2) : it = Math.pow(current, 2);
								flag == 2 ? $('#txt').html(current2 + '<sup>2</sup> = ' + Math.pow(current2, 2)) : $('#txt').html(current + '<sup>2</sup> = ' + Math.pow(current, 2));
								current = it;
								current2 = 0;
								action = '';
								flag = 0;
								$('#tablo').val(it);
								return it;
							},
							'supsqrt' : function() {
							    $('#txt').html('<sup>' + current2 + '</sup>&radic;' + current + ' = ' + Math.pow(current, 1.0/parseFloat(current2)));
								return Math.pow(current, 1.0/parseFloat(current2));
							},
							'10sup' : function() {
							    flag == 2 ? it = Math.pow(10, current2) : it = Math.pow(10, current);
								flag == 2 ? $('#txt').html('10<sup>' + current2 + '</sup> = ' + Math.pow(10, current2)) : $('#txt').html('10<sup>' + current + '</sup> = ' + Math.pow(10, current));
								current = it;
								current2 = 0;
								action = '';
								flag = 0;
								$('#tablo').val(it);
								return it;
							},
							'1delx' : function() {
							    flag == 2 ? it = 1/current2 : it = 1/current;
								flag == 2 ? $('#txt').html('1/' + current2 + ' = ' + it) : $('#txt').html('1/' + current + ' = ' + it);
								current = it;
								current2 = 0;
								action = '';
								flag = 0;
								$('#tablo').val(it);
								return it;
							},
							'log' : function() {
							    flag == 2 ? it = Math.log(current2)/Math.log(10) : it = Math.log(current)/Math.log(10);
								flag == 2 ? $('#txt').html('log<sub>10</sub>' + current2 + ' = ' + it) : $('#txt').html('log<sub>10</sub>' + current2 + ' = ' + it);
								current = it;
								current2 = 0;
								action = '';
								flag = 0;
								$('#tablo').val(it);
								return it;
							},
							'log2x' : function() {
							    flag == 2 ? it = Math.log(current2)/Math.log(2) : it = Math.log(current)/Math.log(2);
								flag == 2 ? $('#txt').html('log<sub>2</sub>' + current2 + ' = ' + it) : $('#txt').html('log<sub>2</sub>' + current + ' = ' + it);
								current = it;
								current2 = 0;
								action = '';
								flag = 0;
								$('#tablo').val(it);
								return it;
							},
							'logyx' : function() {
								$('#txt').html('log<sub>' + current2 + '</sub>' + current + ' = ' + Math.log(current)/Math.log(current2));
								return Math.log(current)/Math.log(current2);
							},
							'ln' : function() {
							    flag == 2 ? it = Math.log(current2) : it = Math.log(current);
								flag == 2 ? $('#txt').html('ln' + current2 + ' = ' + it) : $('#txt').html('ln' + current + ' = ' + it);
								current = it;
								current2 = 0;
								action = '';
								flag = 0;
								$('#tablo').val(it);
								return it;
							},
		                    'mc' : function() {
					            saved = 0;
					            flag == 2 ? it = current2 : it = current;
								$('#tablo').val(it);
					        },
					        'mplus' : function() {
					            if(flag == 2) {
					                current2 = Math.abs(current2);
									saved = current2;
					            } else {
					                current = Math.abs(current);
									saved = current;
					            }
								$('#tablo').val(saved);
					        },
					        'mminus' : function() {
					            if(flag == 2) {
					                current2 = -1*Math.abs(current2);
									saved = current2;
					            } else {
					                current = -1*Math.abs(current);
									saved = current;
					            }
								$('#tablo').val(saved);
					        },
					        'ac' : function() {
					            current = 0;
					            current2 = 0;
					            saved = 0;
					            action = '';
					            flag = 0;
								$('#tablo').val(0);
					        },
					        'c' : function() {
					            current = 0;
					            current2 = 0;
					            action = '';
					            flag = 0;
								$('#tablo').val(0);
					        },
					        'mr' : function() {
					            if(flag == 1 || flag == 2) {
								    current2 = saved;
									if(flag == 1) flag++;
								} else {
								    current = saved;
								}
								$('#tablo').val(saved);
					        },
					        'plusminus' : function() {
					            if(flag == 2) {
					                current2 > 0 ? current2 = -1*Math.abs(current2) : current2 = Math.abs(current2);
					                it = current2;
					            } else {
					                current > 0 ? current = -1*Math.abs(current) : current = Math.abs(current);
					                it = current;
					            }
								$('#tablo').val(it);
					        },
							'bspace' : function() {
							    if(flag == 1 || flag == 2) {
								    current2 = parseFloat(current2.toString().slice(0, -1));
									if(isNaN(current2)) current2 = 0;
									$('#tablo').val(current2);
								} else {
								    current = parseFloat(current.toString().slice(0, -1));
									if(isNaN(current)) current = 0;
									$('#tablo').val(current);
								}
							}
		                };
	// Формируем html-код калькулятора
	for(i = 0; i < buttons.length; i++) {
	    table += '<tr>'
		for(j = 0; j < buttons[i].length; j++) {
		    // Выставляем классы (цвет кнопок)
			i < buttons.length-1 && j < 3 ? cl = 'inj' : cl = 'grey';
			if($.isNumeric(txt[i][j]) || txt[i][j] == '.') cl = 'number';
			if((i == buttons.length-2 && j > 2) || (i == buttons.length-1 && j == 1)) cl = 'orange';
			if(i == buttons.length-1 && j > 1) cl = 'red';
			if(txt[i][j] == '') cl = '';
			// Для зелёной ячейки "особые" условия
			if(buttons[i][j] == 'colspan3') {
			    table += '<td colspan="3" id="button-' + buttons[i][j] + '" class="nobutton" data-index="' + buttons[i][j] + '">' + txt[i][j] + '</td>';
			} else {
			    table += '<td id="button-' + buttons[i][j] + '" class="' + cl + '" data-index="' + buttons[i][j] + '">' + txt[i][j] + '</td>';
			}
		}
		table += '</tr>';
	}
	table += '</tbody></table>';
	// Выводим таблицу
	$('#calculator').append(table);
	
	// Обрабатываем клик по кнопке
	$('#calculator table tbody tr td').click(function() {
	    var index = $(this).attr('data-index');
		// Если нажата цифра или точка, или число пи, или число e
		if($.isNumeric($(this).html()) || index == 'pi' || index == 'e' || index == 'dot') {
		    // Вводим первое число
			if(flag == 0) {
				if(index == 'pi') {
				    current = Math.PI;
				} else {
				    if(index == 'e') {
					    current = Math.E;
					} else {
					    if(index == 'dot') {
							if($('#tablo').val().indexOf('.') == -1) parseFloat($('#tablo').val()) == 0 ? current = "0." : current = $('#tablo').val() + '.';
						} else {
						    parseFloat($('#tablo').val()) == 0 ? current = parseFloat($(this).html()) : current = parseFloat($('#tablo').val() + '' + $(this).html());
						}
				    }
				}
				// Вывод числа на экран
				$('#tablo').val(current);
			} else {
				// Вводим второе число
				if(flag == 1) $('#tablo').val(0), flag++;
				if(index == 'pi') {
				    current2 = Math.PI;
				} else {
				    if(index == 'e') {
					    current2 = Math.E;
					} else {
					    if(index == 'dot') {
							if($('#tablo').val().indexOf('.') == -1) parseFloat($('#tablo').val()) == 0 ? current2 = "0." : current2 = $('#tablo').val() + '.';
						} else {
						    parseFloat($('#tablo').val()) == 0 ? current2 = parseFloat($(this).html()) : current2 = parseFloat($('#tablo').val() + '' + $(this).html());
						}
                    }
				}
				// Вывод числа на экран
				$('#tablo').val(current2);
			}
		} else {
			// Если нажата кнопка мат.действия - проверим, может ли действие выполняться в любой момент и не является при этом тригон.функцией
			for(i = 0; i < go.length; i++) {
			    if(go[i] == index) {
				    ok = 1;
					break;
				};
			}
			// Если может и не является, то выполняем
			if(ok == 1) {
				calc_actions[index]();
				ok = 0;
			} else {
				// При другом стечении обстоятельств проверим action, и если он есть, и введены оба числа, 
				// и нажата клавиша "равно" или "проценты" - покажем результат
				if(flag == 2 && action != '' && (index == 'ravno' || index == 'percent')) {
			        index == 'percent' ? current = calc_actions[index]() : current = calc_actions[action]();
			    	flag = 0;
			    	action = '';
					current2 = 0;
			    	$('#tablo').val(current);
			    } else {
			        // Если нажата не равно и не проценты, проверим, является ли нажатая кнопка тригонометрической функцией
					for(i = 0; i < go2.length; i++) {
					    if(go2[i] == index) {
						    ok = 1;
							break;
						};
					}
					// Если да, то проверяем, в градусах или радианах введены переменные, и вычисляем
					if(ok == 1) {
					    if(rad == 0) {
							flag == 0 ? current = calc_actions[index]((Math.PI/180)*current) : current = calc_actions[index]((Math.PI/180)*current2);
						} else {
						    flag == 0 ? current = calc_actions[index](current) : current = calc_actions[index](current2);
						}
						ok = 0;
						flag = 0;
						action = '';
						current2 = 0;
						$('#tablo').val(current);
					} else {
                        // Последнее, что нам остаётся, если ни одно из условий не подходит - просто выполнить операцию
						// это будут те операции, которые происходят между вводом чисел (например +, =, *, /),
						// и в котором участвуют две переменные (кроме действий с % - т.к. они выполняются выше)
						action = index;
			    	    if(flag == 0) flag++;
					}
			    }
			}
		}
	});

	// "Переключатель" между радианами и градусами (находится в зелёном блоке)
	$('.nobutton label input[name=rad]').change(function() {
		rad = parseInt($(this).val(), 10);
		$('.nobutton label').removeClass();
		$(this).parent('label').addClass('labelactive');
	});
	
	//Очищаем таблицу после нажатия на =
	$("#button-ravno, .inj").click(function () {
		equalButton = false;
	})
	$(".number").click(function() {
		if (!equalButton) {
			$("#tablo").val($(this).html());		
		}
		equalButton = true;
	})
	$("#tablo").click(function() {
		$(this).select();
	})
});
