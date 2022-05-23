auto.waitFor()

var app = "支付宝";
launchApp(app);
// console.log('进入');

function rand_sleep(base) {
    sleep(random(base * 1000, (base + 1) * 1000));
}

// console.show()
rand_sleep(2)
// var code = id("app_text").text("健康码").find()
// click(code.bounds().centerX(), code.bounds().centerY())

rand_sleep(1)
text("立即查看").findOne().click()