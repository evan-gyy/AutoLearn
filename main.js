auto.waitFor()
// console.show();
var app = "学习强国";
launchApp(app);
sleep(6000);
// console.log('进入');

function rand_sleep(base) {
    sleep(random(base * 1000, (base + 1) * 1000));
}

var video = id("home_bottom_tab_text").className("android.widget.TextView").text("百灵").findOne().parent();
var read = id("home_bottom_tab_text").className("android.widget.TextView").text("工作").findOne().parent();
let vx = video.bounds().centerX()
let vy = video.bounds().centerY()
let rx = read.bounds().centerX()
let ry = read.bounds().centerY()
toast(ry);
// 进入百灵

click(vx, vy);
rand_sleep(1);
// 播放视频
setScreenMetrics(1080, 1920);
click(500, 500);
rand_sleep(2);
// 退出视频播放界面
id("iv_back").findOne().click();
rand_sleep(1);

click(rx, ry);
