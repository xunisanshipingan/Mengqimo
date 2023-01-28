## Java连接到Mysql时出现报错
***
### **The server selected protocol version TLS10 is not accepted报错**
进入java安装目录，例如：jdk1.8/jre/lib/security/java.security。打开这个文件，查找到jdk.tls.disabledAlgorithm选项，把里面的3DES_EDE_CBC，TLSv1，TLSv1.1删除
删除前：
```
jdk.tls.disabledAlgorithms=SSLv3,  RC4, DES, MD5withRSA,TLSv1, TLSv1.1, \
    DH keySize < 1024, EC keySize < 224, 3DES_EDE_CBC, anon, NULL, \
    include jdk.disabled.namedCurves
```
删除后：
```
jdk.tls.disabledAlgorithms=SSLv3,  RC4, DES, MD5withRSA, \
    DH keySize < 1024, EC keySize < 224, anon, NULL, \
    include jdk.disabled.namedCurves
```