Java.perform(function () {
    var Log = Java.use("android.util.Log");
    Log.e("frida-HOOK", "Have fun!");
});//android 不要使用console.log