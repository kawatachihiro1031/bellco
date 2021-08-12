$(function () {
	$.fatNav();
});

$(function () {
	var topBtn = $('.c-pagetop-btn');
	topBtn.hide();

	$(window).scroll(function () {
		if ($(this).scrollTop() > 80) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});

	topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});

$(function () {
	// #で始まるアンカーをクリックした場合に処理
	$('a[href^="#"]').on('click', function () {

		// 移動先を取得
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top;
		// スムーススクロール
		$('body,html').animate({ scrollTop: position }, 300, 'swing');
		return false;
	});
});

// ふわっと
$(function () {
	load_effect();
	$(window).scroll(function () {
		scroll_effect();
	});
});

//ふわっとロード
function load_effect() {
	var tt = $(window).scrollTop();
	var hh = $(window).height();
	$('.load-fade').each(function () {
		var yy = $(this).offset().top;
		if (tt > yy - hh) {
			$(this).addClass('done');
		}
	});
	$('.load-up').each(function () {
		var yy = $(this).offset().top;
		if (tt > yy - hh) {
			$(this).addClass('done');
		}
	});
}

//ふわっとスクロール
function scroll_effect() {
	var tt = $(window).scrollTop();
	var hh = $(window).height();
	$('.scroll-fade').each(function () {
		var yy = $(this).offset().top + 150;//効果発生開始タイミングを操作したい場合は数値を変更する
		if (tt > yy - hh) {
			$(this).addClass('done');
		}
	});
	$('.scroll-up').each(function () {
		var yy = $(this).offset().top + 150;//効果発生開始タイミングを操作したい場合は数値を変更する
		if (tt > yy - hh) {
			$(this).addClass('done');
		}
	});
}

//transition調整
$(window).on('load', function () {
	$('body').removeClass('preload');
});


//カウントダウン
function CountdownTimer(elm, tl, mes) {
	this.initialize.apply(this, arguments);
}
CountdownTimer.prototype = {
	initialize: function (elm, tl, mes) {
		this.elem = document.getElementById(elm);
		this.tl = tl;
		this.mes = mes;
	}, countDown: function () {
		var timer = '';
		var today = new Date();
		var day = Math.floor((this.tl - today) / (24 * 60 * 60 * 1000));
		var hour = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
		var min = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
		var sec = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
		var milli = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 10) % 100;
		var me = this;

		if ((this.tl - today) > 0) {
			if (day)
				timer += '' + day + '日';
			if (hour)
				timer += '' + hour + '時間';
			timer += '' + this.addZero(min) + '分' +
				this.addZero(sec) + '秒';
			this.elem.innerHTML = timer;
			tid = setTimeout(function () {
				me.countDown();
			}, 10);
		} else {
			this.elem.innerHTML = this.mes;
			return;
		}
	}, addZero: function (num) {
		return ('0' + num).slice(-2);
	}
}
function CDT() {
	var tl = new Date('2021/8/31 23:59:59');// ここで日付を指定
	var timer = new CountdownTimer('CDT', tl, '終了しました');
	timer.countDown();
}


function CDT01() {
	var tl = new Date('2021/8/31 23:59:59');// ここで日付を指定
	var timer = new CountdownTimer('CDT01', tl, '終了しました');
	timer.countDown();
}
window.onload = function () {
	CDT();
	CDT01();
}

//slider
$(function () {
	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true
	});
});