auto.waitFor();

var app = "微信";
launchApp(app);
// console.log('进入');

function rand_sleep(base) {
    sleep(random(base * 1000, (base + 1) * 1000));
}

rand_sleep(5);
swipe(500, 500, 500, 2000, 100);

rand_sleep(1);
var ssb = id("ko8").text("随申办").findOne();
click(ssb.bounds().centerX(), ssb.bounds().centerY());

rand_sleep(3);
click(420, 1240);

function capScreen() {
    rand_sleep(2);
    path = "/storage/emulated/0/DCIM/Screenshots/核酸检测报告.jpg";
    // 请求横屏截图
    // 1、开启线程，找到点击立即开始，并且触发事件（只需要执行一次就可以）
    threads.start(function () {
        var beginBtn;
        if (
            (beginBtn = classNameContains("Button")
                .textContains("立即开始")
                .findOne(2000))
        ) {
            beginBtn.click();
        }
    });
    requestScreenCapture(true);
    // 2、请求截图
    if (!requestScreenCapture()) {
        toast("请求截图失败");
        exit();
    }
    // 截图
    rand_sleep(1);
    captureScreen(path);
}

// capScreen();