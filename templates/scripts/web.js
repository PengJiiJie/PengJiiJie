$(document).ready(function() {
	//展示顶部日历
	showCalendar()
	//顶部导航切换
	topNav()
	//首页tabItem
	indexSwipeChange()
	indexSwipeArrow()
	navBarToggle()
	searchBarToggle()
	tabItemToggle()
	hotList()
	topicIconChange()
	hotPointEffect()
	weibo_wechat()
	//底部导航切换
	footerNav()
	//focus_news切换
	focusNewsChange()
	//二级页banner
	subBannerChange()
	// 滑动滚动条
	$(window).scroll(function() {
		// 滚动条距离顶部的距离 大于 200px时
		if ($(window).scrollTop() >= 30) {
			$(".nav_wrap").css({
				'top': 0
			})
		} else {
			$(".nav_wrap").css({
				'top': 30
			})
		}
		// if ($(window).scrollTop() >= 100) {
		// 	$(".sub_aside").addClass('sub_aside_fixed')
		// } else {
		// 	$(".sub_aside").removeClass('sub_aside_fixed')
		// }
	})
	if ($(window).width() > 1199) {
		$("#showkeycode270998").on('keyup', function() {
			if ($(this).val() !== '') {
				$("#btnSearch").show()
				$("#closeSearch").hide()
			} else {
				$("#btnSearch").hide()
				$("#closeSearch").show()
			}
		})
		$("#closeSearch").on('click', function() {
			$(".search_wrap form").fadeOut('fast')
		})
	}	
});

var navBarFlag = true

function navBarToggle() {
	var topNav = $(".top_nav")
	$(".nav_bar").on('click', function() {
		if (navBarFlag) {
			topNav.fadeIn('fast')
		} else {
			topNav.fadeOut('fast')
		}
		navBarFlag = !navBarFlag
	})
}

var searchBarFlag = true

function searchBarToggle() {
	var searchForm = $(".search_wrap form")
	$(".search_bar").on('click', function() {
		if (searchBarFlag) {
			searchForm.fadeIn('fast').css({
				display: 'flex'
			})
		} else {
			searchForm.fadeOut('fast')
		}
		searchBarFlag = !searchBarFlag
	})
}

var indexSwipeIndex = 0
var indexSwipeChangeHandler = null

function indexSwipeArrow() {
	var indexSwipeImg = $(".swipe img.pos_a")
	var swipeNavItem = $(".swipe_nav_item")
	$(".arrow_nav_left").on("click", function() {
		clearTimeout(indexSwipeChangeHandler)
		indexSwipeIndex--;
		if (indexSwipeIndex < 0) {
			indexSwipeIndex = indexSwipeImg.length - 1
		}
		// console.log(indexSwipeIndex)
		indexSwipeImg.fadeOut(1500).eq(indexSwipeIndex).fadeIn(1500)
		swipeNavItem.removeClass('swipe_nav_item_current').eq(indexSwipeIndex).addClass(
			'swipe_nav_item_current')
		indexSwipeChangeHandler = setTimeout(function() {
			indexSwipeChange()
		}, 5000)
	})
	$(".arrow_nav_right").on("click", function() {
		clearTimeout(indexSwipeChangeHandler)
		indexSwipeIndex++;
		if (indexSwipeIndex > indexSwipeImg.length - 1) {
			indexSwipeIndex = 0
		}
		// console.log(indexSwipeIndex)
		indexSwipeImg.fadeOut(1500).eq(indexSwipeIndex).fadeIn(1500)
		swipeNavItem.removeClass('swipe_nav_item_current').eq(indexSwipeIndex).addClass(
			'swipe_nav_item_current')
		indexSwipeChangeHandler = setTimeout(function() {
			indexSwipeChange()
		}, 5000)
	})

	$(".swipe_nav_item").each(function(index, el) {
		$(this).on('click', function() {
			clearTimeout(indexSwipeChangeHandler)
			indexSwipeImg.fadeOut(1500).eq(index).fadeIn(1500)
			swipeNavItem.removeClass('swipe_nav_item_current').eq(index).addClass(
				'swipe_nav_item_current')
			indexSwipeIndex = index
			indexSwipeChangeHandler = setTimeout(function() {
				indexSwipeChange()
			}, 5000)
		})
	})
}

function indexSwipeChange() {
	var indexSwipeImg = $(".swipe a img.pos_a")
	var swipeNavItem = $(".swipe_nav_item")
	var h = indexSwipeImg.eq(0).height()
	$(".swipe").height(h)
	$(".arrow_nav").css({
		top: ((h / 2) + 50)
	})
	if (indexSwipeImg.length > 0) {
		if (indexSwipeIndex > (indexSwipeImg.length - 1)) {
			indexSwipeIndex = 0
		}
		console.log(indexSwipeIndex)
		indexSwipeImg.fadeOut(1500).eq(indexSwipeIndex).fadeIn(1500)
		swipeNavItem.removeClass('swipe_nav_item_current').eq(indexSwipeIndex).addClass('swipe_nav_item_current')
		indexSwipeChangeHandler = setTimeout(function() {
			indexSwipeChange()
		}, 7000)
		indexSwipeIndex++;
	}
}

var subBannerIndex = 0

function subBannerChange() {
	var subBannerImg = $("#sub_banner img")
	$("#sub_banner").height(subBannerImg.eq(0).height())
	if (subBannerImg.length > 0) {
		if (subBannerIndex > (subBannerImg.length - 1)) {
			subBannerIndex = 0
		}
		//console.log(subBannerIndex)
		subBannerImg.fadeOut(1500).eq(subBannerIndex).fadeIn(1500)
		setTimeout(function() {
			subBannerChange()
		}, 7000)
		subBannerIndex++;
	}
}

function weibo_wechat() {
	var qrCode = $(".qr_code")
	$("#weibo").hover(function() {
		qrCode.addClass("qr_code_weibo").fadeIn().find('img').attr('src', '/templates/images/qr_code_weibo.jpg')
	}, function() {
		qrCode.hide().removeClass("qr_code_weibo")
	})
	$("#wechat").hover(function() {
		qrCode.addClass("qr_code_wechat").fadeIn().find('img').attr('src',
			'/templates/images/qr_code_wechat.jpg')
	}, function() {
		qrCode.hide().removeClass("qr_code_wechat")
	})
}

function hotPointEffect() {
	if ($(window).width() > 1199) {
		$(".focus_item2").each(function(index, el) {
			$(this).hover(function() {
				$(this).find('.focus_item_mask').hide()
				$(this).find('.title').animate({
					bottom: 40
				}, 300)
			}, function() {
				$(this).find('.focus_item_mask').fadeIn()
				$(this).find('.title').animate({
					bottom: 20
				}, 300)
			})
		})
	}
}

function topicIconChange() {
	$(".topic_link_item").each(function(index, el) {
		$(this).hover(function() {
				$(this).find(".topic_link_icon ").removeClass("topic_link_icon" + index).addClass(
					"topic_link_icon" + index +
					"_hover")
			},
			function() {
				$(this).find(".topic_link_icon ").removeClass("topic_link_icon" + index + "_hover")
					.addClass("topic_link_icon" + index)
			})
	})
}
var currList = true

function hotList() {
	var hotList = $(".hot_col_list")

	$("#hot_left").on("click", function() {
		listRun()
	})

	$("#hot_right").on("click", function() {
		listRun()
	})

	function listRun() {
		hotList.animate({
			left: (currList) ? "-1200px" : "0"
		}, 600)
		currList = !currList
	}
}

function tabItemToggle() {
	$("#tabItem span").each(function(index, el) {
		$(this).on("click", function() {
			$("#tabItem span").removeClass("cur_item");
			$(this).addClass("cur_item");
			$("#tabItemList .list_ul").hide().eq(index).fadeIn();
			return false;
		})
	})
}
var currFocus = true

function focusList() {
	var list_wrap = $(".focus_news_list_wrap")
	if (currFocus) {
		list_wrap.animate({
			"left": -1200 + "px"
		}, 600)
		$(".focus_item").eq(3).addClass('cur_focus')
		$(".focus_item").eq(4).css({
			"left": "1870px"
		});
		$(".focus_item").eq(5).css({
			"left": "2140px"
		});
	} else {
		list_wrap.animate({
			"left": 0
		}, 600)
		$(".focus_item").eq(0).addClass('cur_focus')
		$(".focus_item").eq(1).css({
			"left": "670px"
		});
		$(".focus_item").eq(2).css({
			"left": "940px"
		});
	}
	currFocus = !currFocus
}

function focusArrow() {
	$("#focus_arrow_right").on("click", function() {
		focusList();
	})
	$("#focus_arrow_left").on("click", function() {
		focusList()
	})
}

function focusNewsChange() {
	if ($(window).width() > 1199) {
		focusArrow()
		var timer = 400
		$(".focus_item .thumb").each(function(index, el) {
			$(this).on('click', function() {
				// console.log(index)
				$(".focus_item.cur_focus").removeClass('cur_focus')
				$(this).parent().addClass('cur_focus')
				if (index == 0) {
					$(".focus_item").eq(1).animate({
						"left": "670px"
					}, timer);
					$(".focus_item").eq(2).animate({
						"left": "940px"
					}, timer);
				}
				if (index == 1) {
					$(".focus_item").eq(0).animate({
						"left": "0"
					}, timer);
					$(".focus_item").eq(1).animate({
						"left": "270px"
					}, timer);
					$(".focus_item").eq(2).animate({
						"left": "940px"
					}, timer);
				}
				if (index == 2) {
					$(".focus_item").eq(0).animate({
						"left": "0"
					}, timer);
					$(".focus_item").eq(1).animate({
						"left": "270px"
					}, timer);
					$(".focus_item").eq(2).animate({
						"left": "540px"
					}, timer);
				}
				if (index == 3) {
					$(".focus_item").eq(4).animate({
						"left": "1870px"
					}, timer);
					$(".focus_item").eq(5).animate({
						"left": "2140px"
					}, timer);
				}
				if (index == 4) {
					$(".focus_item").eq(3).animate({
						"left": "1200px"
					}, timer);
					$(".focus_item").eq(4).animate({
						"left": "1470px"
					}, timer);
					$(".focus_item").eq(5).animate({
						"left": "2140px"
					}, timer);
				}
				if (index == 5) {
					$(".focus_item").eq(3).animate({
						"left": "1200px"
					}, timer);
					$(".focus_item").eq(4).animate({
						"left": "1470px"
					}, timer);
					$(".focus_item").eq(5).animate({
						"left": "1740px"
					}, timer);
				}
				return false;
				// $(".focus_item.cur_focus").css("width", "260px").removeClass('cur_focus')
				// $(this).addClass('cur_focus').animate({
				// 	"width": "660px"
				// }, 300)
			})
		})
	}
}

function showCalendar() {
	var ns_calendar = calendar.solar2lunar()
	// console.log(ns_calendar)
	//tmp:2022年4月20日 星期三 壬寅年三月初九 本月20日 <谷雨>
	var calendarMsg = ns_calendar.cYear + "年" + ns_calendar.cMonth + "月" + ns_calendar.cDay + "日　" + ns_calendar
		.ncWeek
	calendarMsg += "　" + ns_calendar.gzYear + "年" + ns_calendar.IMonthCn + "" + ns_calendar.IDayCn
	// calendarMsg += "　" + ns_calendar.nsTerm
	$("#current_date").text(calendarMsg)
}

function footerNav() {
	if ($(window).width() > 1199) {
		$(".links_item:eq(0)").css({
			display: 'flex'
		})
		$(".links_categort_item").each(function(index, el) {
			$(this).on('mouseover', function(e) {
				// console.log(index)
				$(".links_categort_item").removeClass("cur_category").eq(index).addClass("cur_category")
				$(".links_item").hide().eq(index).css({
					display: 'flex'
				})
			})
		})
	} else {
		$(".links_item_wrap_close").on('click', function() {
			$(".links_item_wrap").css({
				display: 'none'
			})
			$(".links_categort_item").removeClass("cur_category")
		})
		$(".links_categort_item").removeClass("cur_category")
		$(".links_categort_item").each(function(index, el) {
			$(this).on('mouseover', function(e) {
				// console.log(index)
				$(".links_categort_item").removeClass("cur_category").eq(index).addClass("cur_category")
				$(".links_item_wrap").css({
					display: 'block'
				})
				$(".links_item").hide().eq(index).css({
					display: 'flex'
				})
			})
		})
	}
}


function topNav() {
	if ($(window).width() > 1199) {
		$(".top_nav_li a").each(function(index, el) {
			$(this).on('mouseover', function(e) {
				// console.log(index)
				$(".sub_nav_ul_wrap").fadeIn('fast')
				$(".sub_nav_ul").hide().eq(index).css({
					display: 'flex'
				})
				$(".sub_t_nav_ul_wrap").css({
					display: 'none'
				}).find('div').hide()
			})
		})
		$(".sub_nav_ul").each(function(index, el) {
			$(this).find('.sub_nav_li').each(function(index, el) {
				t_nav(index, el, $(this))
			})
		})
		$(".nav_wrap").hover(function() {}, function() {
			$(".sub_nav_ul_wrap").hide()
		})
	}
}

var tNavArr = ['deptNav', 'eduNav', 'scienceNav', 'admissionsNav', 'sub_1419', 'sub_1165', 'sub_1167', 'sub_1227']
var curTNav = ''

function t_nav(index, el, obj) {
	obj.find('a').hover(function() {
		var curId = obj.parent().attr('id');
		curTNav = curId
		//console.log(curTNav, index)
		if ($("#" + curTNav + "_menu").length > 0) {
			$(".sub_t_nav_ul_wrap").css({
				display: 'flex'
			})
			$(".sub_t_nav_ul").hide()
			$("#" + curTNav + "_menu").css({
				display: 'flex'
			}).find('.sub_t_nav_ul:eq(' + index + ')').css({
				display: 'flex'
			})
		}
	}, function() {
		if (tNavArr.indexOf(curTNav) === -1) {
			$(".sub_t_nav_ul_wrap").css({
				display: 'none'
			})
		}
	})

}
