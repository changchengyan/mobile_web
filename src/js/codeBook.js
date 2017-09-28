    $(document).ready(function () {
        var heights = $(window).height();
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 750 * 200 + "px";
        if (document.documentElement.clientWidth <= 320) {
            document.documentElement.style.fontSize = 60;
            $(".codeBar").css({
                // "right": "20%",
                "top": "28%"
            })
        }
        if (document.documentElement.clientWidth >= 750) {
            document.documentElement.style.fontSize = 240;
            $(".codeBook-content").css("height", '92.08%');
            $(".codeBook-content").css("top", '16.2%');
            $('.book').css('top', '56%')
            $(".codeBar").css({
                "right": "20%",
                "top": "26%"
            })
            $(".bg_two").css("backgroundSize", "100% 100%");
            $(".pics").css("backgroundSize", "100% 100%");
            $(".currentTxt-top").css("backgroundSize", "100% 100%");
            $(".bg-one").css("background", "url('./images/findWorld_bottom.png')no-repeat center");
            $(".haveFun .gap").css("backgroundSize", "100% 100%");
            $(".openWork").css('background',"url('./images/callMe.png') no-repeat center")
        }
        // var offSetTop = null;
        // var a = document.getElementById("sharking").offsetTop;
        // console.log(a)
        var u = navigator.userAgent;

        // if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        // window.addEventListener("scroll", function () {
        //     // offSetTop = document.body.scrollTop;
        //     // console.log(offSetTop);
        //     // if (a < heights*3 + $(window).height()) {
        //     //     $(".pics").css("display", "block");
        //     //     console.log("222");
        //     // } else  {
        //     //     $(".pics").css("display", "none")
        //     //     console.log("333");

        //     // }
        //     console.log($(window).scrollTop());
        // });
        // }

        var $page1 = $("#bg_one");
        var $page2 = $("#bg_two");
        var $page3 = $("#bg_three");
        var $page4 = $("#bg_four");
        var $page5 = $("#bg_five");
        var $pageBGs = $('.page-bg');
        var $gaps = $(".gap");

        // if (u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1) {
        var mySkrollr;
        initHight();
        $(window).resize(initHight);

        function initHight() {
            window.scrollTo(0, 1);
            setTimeout(function () {
                if (mySkrollr) {
                    mySkrollr.destroy();
                }
                initSkrollr();
            }, 0);
        }
        $('#quickEnter').on('click', function () {
            // mySkrollr && mySkrollr.destroy();
            if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
                window.location.href = "http://f3.5rs.me/upload/20170620/2017_06_20_100629457.apk";
                console.log("123455")
            } else if (u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1) {
                alert("ios版敬请期待！")
            }
        });
        // initSkrollr();
        // }

        function initSkrollr() {
            mySkrollr = skrollr.init({
                smoothScrolling: false,
                mobileDeceleration: 0.002,
                keyframe: function (element, name, direction) {
                    // if (element == $('.pics')[0] && name === 'dataCenterTop') {
                    //     $('.pics').addClass('easeIn');
                    //     return;
                    // }
                    var nameDir = name + "." + direction;
                    //显示对应背景图
                    if (element == $gaps[0]) {
                        if (nameDir == "dataBottomTop.down" || nameDir == "dataTopBottom.up") {
                            $pageBGs.eq(0).addClass('active');
                        } else if (nameDir == "dataBottomTop.up" || nameDir == "dataTopBottom.down") {
                            $pageBGs.eq(0).removeClass('active');
                        }
                    } else if (element == $gaps[1]) {

                        if (nameDir == "dataBottomTop.down" || nameDir == "dataTopBottom.up") {
                            $pageBGs.eq(1).addClass('active');
                        } else if (nameDir == "dataBottomTop.up" || nameDir == "dataTopBottom.down") {
                            $pageBGs.eq(1).removeClass('active');
                        }
                        if (name == "dataTop") {
                            // $pageBGs.eq(1).css("backgroundImage","url('./images/readerBook_bg.png')")
                            $pageBGs.eq(1).removeClass("bg-two").addClass("bg-two02");
                            $('.pics').css("display", "none");
                        }
                    } else if (element == $gaps[2]) {
                        if (nameDir == "dataBottomTop.down" || nameDir == "dataTopBottom.up") {
                            $pageBGs.eq(2).addClass('active');
                        } else if (nameDir == "dataBottomTop.up" || nameDir == "dataTopBottom.down") {
                            $pageBGs.eq(2).removeClass('active');
                        }
                    } else if (element == $gaps[3]) {
                        if (nameDir == "dataBottomTop.down" || nameDir == "dataTopBottom.up") {
                            $pageBGs.eq(3).addClass('active');
                        } else if (nameDir == "dataBottomTop.up" || nameDir == "dataTopBottom.down") {
                            $pageBGs.eq(3).removeClass('active');
                        }
                    } else if (element == $gaps[4]) {
                        if (nameDir == "dataBottomTop.down" || nameDir == "dataTopBottom.up") {
                            $pageBGs.eq(4).addClass('active');
                        } else if (nameDir == "dataBottomTop.up" || nameDir == "dataTopBottom.down") {
                            $pageBGs.eq(4).removeClass('active');
                        }
                    }

                }
            });
        }

    });

    // if (window.orientation!== 0) {
    //     var obj = document.getElementById('orientation');
    //     alert('横屏内容太少啦，请使用竖屏观看！');
    //     obj.style.display = 'block';
    // }

    // window.onorientationchange = function () {
    //     var obj = document.getElementById('orientation');

    //     if (window.orientation == 0) {
    //         obj.style.display = 'none';
    //     } else {
    //         alert('横屏内容太少啦，请使用竖屏观看！');
    //         obj.style.display = 'block';
    //     }
    // };