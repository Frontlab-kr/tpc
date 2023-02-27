$(document).ready(function () {
	$(function () {
		// CURSOR
		var cursor = $(".cursor"),
			circle = $(".cursor-circle");

		var posX = 0,
			posY = 0;
		var mouseX = 0,
			mouseY = 0;

		TweenMax.to({}, 0.016, {
			repeat: -1,
			onRepeat: function () {
				posX += (mouseX - posX) / 9;
				posY += (mouseY - posY) / 9;

				TweenMax.set(circle, {
					css: {
						left: posX - 2,
						top: posY - 2,
					},
				});

				TweenMax.set(cursor, {
					css: {
						left: mouseX,
						top: mouseY,
					},
				});
			},
		});

		// cursor active area
		$("html")
			.on("mousemove", function (e) {
				mouseX = e.clientX;
				mouseY = e.clientY;
			})
			.on("mouseenter", function (e) {
				$(".cursor").css("opacity", 1);
			})
			.on("mouseleave", function (e) {
				$(".cursor").css("opacity", 0);
			});

		// link area css

		$(".link")
			.on("mouseenter", function () {
				cursor.addClass("active");
				circle.addClass("active");
			})
			.on("mouseleave", function () {
				cursor.removeClass("active");
				circle.removeClass("active");
			});

		$(".link-white")
			.on("mouseenter", function () {
				cursor.addClass("active");
				circle.addClass("active-white");
			})
			.on("mouseleave", function () {
				cursor.removeClass("active");
				circle.removeClass("active-white");
			});

		$(".link-cursor")
			.on("mouseenter", function () {
				cursor.addClass("hide");
				circle.addClass("hide");
			})
			.on("mouseleave", function () {
				cursor.removeClass("hide");
				circle.removeClass("hide");
			});
	});
});

const setVh = () => {
	document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);
};
window.addEventListener("resize", setVh);
setVh();

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function () {
	//index
	var moveIdx = rand(1, 3);
	$(".tpc-index__img").addClass("tpc-index__img--move" + moveIdx);
	AOS.init();

	//list
	$(".tpc-list ul li span, .tpc-list ul li a").hover(
		function () {
			// over
			var idx = $(this).parents("li").index();
			$(".tpc-thumbnail ul li").removeClass("active");
			$(".tpc-thumbnail ul li:eq(" + idx + ")").addClass("active");
		},
		function () {
			// out
			$(".tpc-thumbnail ul li").removeClass("active");
		}
	);
});

function makeNewPosition($container) {
	// Get viewport dimensions (remove the dimension of the div)
	var h = $container.height() - 50;
	var w = $container.width() - 50;

	var nh = Math.floor(Math.random() * h);
	var nw = Math.floor(Math.random() * w);

	return [nh, nw];
}

function animateDiv($target) {
	var newq = makeNewPosition($target.parent());
	var oldq = $target.offset();
	var speed = calcSpeed([oldq.top, oldq.left], newq);

	$target.animate(
		{
			top: newq[0],
			left: newq[1],
		},
		speed,
		function () {
			animateDiv($target);
		}
	);
}

function calcSpeed(prev, next) {
	var x = Math.abs(prev[1] - next[1]);
	var y = Math.abs(prev[0] - next[0]);

	var greatest = x > y ? x : y;

	var speedModifier = 0.1;

	var speed = Math.ceil(greatest / speedModifier);

	return speed;
}
