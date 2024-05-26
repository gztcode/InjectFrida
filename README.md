## InjectFrida

### 修改 xml

#### 导出APK

```shell
apktool b -o a.apk a/ #导出apk
```

#### 导出 xml

```shell
java -jar ./tools/xml2axml-2.0.1.jar d a/original/AndroidManifest.xml AndroidManifest-out1.xml
```

#### 修改xml

```shell
java -jar ./tools/xml2axml-2.0.1.jar e AndroidManifest-out.xml a/original/AndroidManifest.xml
```

#### 编译回APK

```shell
apktool b -o a1.apk a/
```

### Frida 注入

```shell
python3 LIEFInjectFrida.py a1.apk ./navlib.so -apksign -port
```

#### 查看端口是否启动

```shell
adb shell logcat | grep 27042
```

#### frida 启动

```shell
frida -U Gadget -l 1.js   #Gadget 是固定值
```

### Firda js 注入

```shell
python3 LIEFInjectFrida.py a1.apk ./navlib.so -apksign -persistence
```