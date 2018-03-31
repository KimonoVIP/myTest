/* js Галины */
/*Маска для телефона +7 (___) ___-__-__ */
function mask(inputName, mask, evt) {
	try {
		var text = document.getElementById(inputName);
		var value = text.value;
		// If user pressed DEL or BACK SPACE, clean the value
		try {
			var e = (evt.which) ? evt.which : event.keyCode;
			if (e == 46 || e == 8) {
				text.value = "";
				return;
			}
		} catch (e1) {}
		var literalPattern = /[0\*]/;
		var numberPattern = /[0-9]/;
		var newValue = "";
		for (var vId = 0, mId = 0; mId < mask.length;) {
			if (mId >= value.length)
				break;
			// Number expected but got a different value, store only the valid portion
			if (mask[mId] == '0' && value[vId].match(numberPattern) == null) {
				break;
			}
			// Found a literal
			while (mask[mId].match(literalPattern) == null) {
				if (value[vId] == mask[mId])
					break;
				newValue += mask[mId++];
			}
			newValue += value[vId++];
			mId++;
		}
		text.value = newValue;
	} catch (e) {}
}
/*анимация и переход для выпадающего списка*/

var element = document.getElementById('dd');

if (element) {
	function DropDown(el) {
		this.dd = el;
		this.initEvents();
	}
	DropDown.prototype = {
		initEvents: function () {
			var obj = this;
			obj.dd.on('click', function (event) {
				$(this).toggleClass('active');
				event.stopPropagation();
			});
		}
	}

	$(function () {

		var dd = new DropDown($('#dd'));

		$(document).click(function () {
			// all dropdowns
			$('.wrapper-dropdown-5').removeClass('active');
		});

	});
	/*Взависимости от выбранного пункта выпадающего списка загружается другая карта*/
	document.querySelector('#drag').addEventListener('click', function (e) {
		var id = e.target.id;
		document.querySelector('#header_list  strong').innerHTML = id;
		var res = "";
		switch (id) {
			case 'г.Кемерово':
				res = 'https://yandex.ru/map-widget/v1/?um=constructor%3A2c0346fcc0a927ea059610704b7e35494b3f150f80412aa3b805222a0349adf3&amp;source=constructor';
				break;
			case 'г.Санкт-Петербург':
				res = 'https://yandex.ru/map-widget/v1/?um=constructor%3Ac91f321d783971632c7eefcf19753b58e6b1b7028183fa2a497d9acc216276df&amp;source=constructor';
				break;
			case 'г.Ростов-на-Дону':
				res = 'https://yandex.ru/map-widget/v1/?um=constructor%3A0706bc4a24534cf56cd0a3fdb3f7ea45be42b6f02982d469f73fb20290070814&amp;source=constructor';
				break;
			case 'г.Самара':
				res = 'https://yandex.ru/map-widget/v1/?um=constructor%3A461617eb5782160a6115fbb359af867a00cb27e3bc6679ad4dc3dd7950e89cd0&amp;source=constructor';
				break;
			case 'г.Таганрог':
				res = 'https://yandex.ru/map-widget/v1/?um=constructor%3A7bb02fa806cf9e9785777ab4bdde1a066cef80783493ef1250049f826891da80&amp;source=constructor';
				break;
		}

		document.getElementById('map').getElementsByTagName('iframe')[0].src = res;
	});
}


function visibleProperty(num) {
	var el0 = document.getElementsByClassName('prorertyProduct');
	var el = document.getElementsByClassName('collapseProrerty');
	//alert(el.length);
	var ind = $(num).parent().index() - 1;
	el[ind * 2 + 1].style.display = 'block';
	el[ind * 2].style.display = 'none';
	el0[ind].style.overflowY = 'visible';
	el0[ind].style.maxHeight = 'none';
	
}

function hiddenProperty(num) {
	var el0 = document.getElementsByClassName('prorertyProduct');
	var el = document.getElementsByClassName('collapseProrerty');
	
	var ind = $(num).parent().index() - 1;
	el[ind * 2 + 1].style.display = 'none';
	el[ind * 2].style.display = 'block';
	el0[ind].style.overflowY = 'hidden';
	
	if(960 > document.documentElement.clientWidth){
		el0[ind].style.maxHeight = '70px';
	}
	else{
		el0[ind].style.maxHeight = '100px';
	}
}

$(function () {
var el = document.getElementsByClassName('collapseProrerty');
var r = document.getElementsByClassName('prorertyProduct_Basket');
	for(var k = 0; k < r.length; k++)
		{
			if(3 < $(r[k]).children().length){
				el[k * 2+1].style.display = 'block';
			}
		}
	});

