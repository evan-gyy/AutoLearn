auto.waitFor()
// console.show();
var app = "学习强国";
launchApp(app);
sleep(6000);
// console.log('进入');

function get_random(x, y) {
    return x + Math.random() * (y - x);
}

var video = id("home_bottom_tab_text").className("android.widget.TextView").text("百灵").findOne().parent()
if (video) {
    let vx = video.bounds().centerX()
    let vy = video.bounds().centerY()
    click(vx, vy);
    sleep(get_random(1000, 2000));

    setScreenMetrics(1080, 1920);
    click(500, 500);
    sleep(get_random(1000, 2000));
}


