$(document).ready(function () {
	$(function () {
		// CURSOR
		var cursor = $(".cursor");

		var posX = 0,
			posY = 0;
		var mouseX = 0,
			mouseY = 0;

		TweenMax.to({}, 0.016, {
			repeat: -1,
			onRepeat: function () {
				posX += (mouseX - posX) / 9;
				posY += (mouseY - posY) / 9;

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
			})
			.on("mouseleave", function () {
				cursor.removeClass("active");
			});
	});
	$(document).ready(function () {
		$(".tpc-list ul").hover(
			function () {
				// over
				$(".tpc-list ul").addClass("hover");
			},
			function () {
				// out
				$(".tpc-list ul li span").removeClass("hover");
				$(".tpc-list ul li span").removeClass("prev01");
				$(".tpc-list ul li span").removeClass("prev02");
				$(".tpc-list ul li span").removeClass("prev03");
				$(".tpc-list ul li span").removeClass("prev04");
				$(".tpc-list ul li span").removeClass("next01");
				$(".tpc-list ul li span").removeClass("next02");
				$(".tpc-list ul li span").removeClass("next03");
				$(".tpc-list ul li span").removeClass("next04");
				if ($(this).hasClass("active")) {
				} else {
					$(".tpc-list ul").removeClass("hover");
				}
			}
		);
		$(".tpc-list ul li span").hover(
			function () {
				// over
				$(".tpc-list ul li span").removeClass("hover");
				$(".tpc-list ul li span").removeClass("prev01");
				$(".tpc-list ul li span").removeClass("prev02");
				$(".tpc-list ul li span").removeClass("prev03");
				$(".tpc-list ul li span").removeClass("prev04");
				$(".tpc-list ul li span").removeClass("next01");
				$(".tpc-list ul li span").removeClass("next02");
				$(".tpc-list ul li span").removeClass("next03");
				$(".tpc-list ul li span").removeClass("next04");
				$(".tpc-list ul").addClass("hover");
				$(this).addClass("hover");
				$(this).parents("li").prev("li").find("span").addClass("prev01");
				$(this).parents("li").prev("li").prev("li").find("span").addClass("prev02");
				$(this).parents("li").prev("li").prev("li").prev("li").find("span").addClass("prev03");
				$(this).parents("li").prev("li").prev("li").prev("li").prev("li").find("span").addClass("prev04");
				$(this).parents("li").next("li").find("span").addClass("next01");
				$(this).parents("li").next("li").next("li").find("span").addClass("next02");
				$(this).parents("li").next("li").next("li").next("li").find("span").addClass("next03");
				$(this).parents("li").next("li").next("li").next("li").next("li").find("span").addClass("next04");
			},
			function () {
				// out
			}
		);
		$(".tpc-list ul li span").on("click", function () {
			if ($(this).hasClass("active")) {
				$(".tpc-thumbnail ul li").removeClass("active");
				$(".tpc-list ul").removeClass("active");
				$(".tpc-list ul").removeClass("hover");
				$(".tpc-list ul li span").removeClass("active");
				$(".tpc-list ul li span").removeClass("hover");
				$(".tpc-list ul li span").removeClass("prev01");
				$(".tpc-list ul li span").removeClass("prev02");
				$(".tpc-list ul li span").removeClass("prev03");
				$(".tpc-list ul li span").removeClass("prev04");
				$(".tpc-list ul li span").removeClass("next01");
				$(".tpc-list ul li span").removeClass("next02");
				$(".tpc-list ul li span").removeClass("next03");
				$(".tpc-list ul li span").removeClass("next04");
			} else {
				var idx = $(this).parents("li").index();
				$(".tpc-list ul").addClass("active");
				$(".tpc-list ul li span").removeClass("active");
				$(this).addClass("active");

				$(".tpc-thumbnail ul li").removeClass("active");
				$(".tpc-thumbnail ul li:eq(" + idx + ")").addClass("active");
			}
		});
	});
});
