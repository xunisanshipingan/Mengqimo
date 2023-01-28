## **背景说明**
2022年国庆回到公司后  主要的工作是简单改了一些页面样式  后面经理觉得项目已经快接近尾声  需要让我去研究一下关于如何通过一个程序部署软件全部使用环境  包括neo4j jdk mysql python  并发了一些资料给我进行参考

## **准备工作**
由于程序一键安装  所以准备的环境包尽量选择的免安装版  只需要配置环境变量即可使用  其中neo4j的社区版本即为免安装版
|软件|版本号|下载地址|
|-|-|-|
|neo4j|4.4.12|[下载地址](https://neo4j.com/download-thanks/?edition=community)|
|jdk|11.0.16.1| [下载地址](https://www.oracle.com/java/technologies/downloads/#license-lightbox)|
|MySQL|5.6.51、5.7.24|[下载地址](https://downloads.mysql.com/archives/community/)|
|python|3.10.8|[下载地址](https://www.python.org/downloads/release/python-3108/)|
|Inno Setup||[下载地址](https://jrsoftware.org/isdl.php)|

## **实现方法**
### 脚本准备
创建脚本与配置文件
|脚本名|作用|
|-|-|
|init-path.bat|添加系统变量|
|init-mysql.bat|MySQL初始化|
|neo4j-install.bat|安装neo4j服务|
|my.ini|MySQL配置文件|
|start.bat|开始执行程序|
|start_neo4j.bat|启动neo4j|

命令解释：```%cd%``` --当前目录  ;  ```reg``` --注册表命令  ;  ```setx``` --设置用户环境变量

***脚本内容***
```
---init-path.bat---

echo 配置jdk环境变量开始
cd ..\jdk
echo "%cd%"
set jdkpath=%cd%
echo %jdkpath%
setx JAVA_HOME  "%jdkpath%"  -m
setx CLASSPATH  ".;%%JAVA_HOME%%\lib\tools.jar;%%JAVA_HOME%%\lib\dt.jar" -m
echo %Path%
echo %Path%|find /i "%JAVA_HOME%" && set IsNull=true || set IsNull=false
echo %IsNull%
if not %IsNull%==true (
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v Path /t REG_SZ /d "%Path%;%%JAVA_HOME%%\bin;%%JAVA_HOME%%\jre\bin" /f
)
echo 配置jdk环境变量完毕

echo 配置mysql环境变量开始
cd ..\mysql
echo "%cd%"
set mysqlpath=%cd%
echo %mysqlpath%
setx MYSQL_HOME  "%mysqlpath%"  -m
echo %Path%
echo %Path%|find /i "%MYSQL_HOME%" && set IsNull=true || set IsNull=false
echo %IsNull%
if not %IsNull%==true (
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v Path /t REG_SZ /d "%Path%;%%MYSQL_HOME%%\bin" /f
)
echo 配置mysql环境变量完毕

echo 配置neo4j环境变量开始
cd ..\neo4j
echo %cd%
set neopath=%cd%
echo %neopath%
setx NEO4J_HOME "%neopath%" -m
echo %Path%
echo %Path%|find /i "%neopath%" && set IsNull=true || set IsNull=false
echo %IsNull%
if not %IsNull%==true (
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v Path /t REG_SZ /d "%Path%;%%NEO4J_HOME%%\bin" /f
)
echo 配置neo4j环境变量完毕

echo 配置python环境变量开始
cd ..\python3
echo %cd%
set pypath=%cd%
echo %pypath%
setx PY_HOME "%neopath%" -m
echo %Path%
echo %Path%|find /i "%pypath%" && set IsNull=true || set IsNull=false
echo %IsNull%
if not %IsNull%==true (
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v Path /t REG_SZ /d "%Path%;%%PY_HOME%%\bin" /f
)
echo 配置python环境变量完毕
setx Path "%%PY_HOME%%\bin;%%NEO4J_HOME%%\bin;%%MYSQL_HOME%%\bin;%%JAVA_HOME%%\bin;%Path%" -m

exit
```
___
```
---init-mysql.bat---

echo 安装mysql开始
cd ..\mysql
set inipath=%cd%\my.ini
cd bin
"%cd%\mysqld.exe" -install mysql --defaults-file="%inipath%"
"%cd%\mysqld.exe" --initialize-insecure --user=mysql --console
echo 启动mysql并设置为自启动
net start mysql
sc config mysql start=auto
"%cd%\mysqladmin.exe" -u root password root
echo 修改密码完毕
cd ..
"%cd%\bin\mysql.exe" -uroot -proot < "%cd%\SqlFile\test.sql"
echo 数据库初始化完成
exit
```
___
```
---my.ini---

[client]

port=3306

default-character-set=utf8

[mysqld]

wait_timeout=2880000

interactive_timeout = 2880000

max_allowed_packet = 100M

sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
```
___
```
---start.bat---

echo 启动java服务
cd ..\..\tool
echo "%cd%"

set APP_NAME=java.jar

echo 5 seconds close this bat
echo Starting program %APP_NAME%
javaw -Xms2048m -Xmx5120m -server -jar %APP_NAME%
echo run %APP_NAME% Success

pause
```
___
```
---start_neo4j.bat---

echo 启动neo4j
neo4j console

pause
```

### Inno Setup使用
在打包目录创建一个后缀为iss的文件  使用以下代码

    ---install.iss---

    #define MyAppName "DataToYun"
    #define MyAppVersion "V1.0"
    #define MyAppPublisher "面向科技"
    #define MyAppUrl "http://localhost:8080"

    ; 基本配置
    [Setup]
    ; NOTE: The value of AppId uniquely identifies this application.
    ; Do not use the same AppId value in installers for other applications.
    ; (To generate a new GUID, click Tools | Generate GUID inside the IDE.)
    ; 单独标识，可以通过innosetup-QSP-6.0.5.exe 工具自动生成
    AppId={{0167D65D-549A-4BA3-B88A-4814EC5A1D35}
    AppName={#MyAppName}
    AppVersion={#MyAppVersion}
    AppPublisher={#MyAppPublisher}
    AppPublisherURL={#MyAppURL}
    AppSupportURL={#MyAppURL}
    AppUpdatesURL={#MyAppURL}
    ; 默认安装路径
    DefaultDirName=C:\Program Files\{#MyAppName}
    DefaultGroupName={#MyAppName}
    ; 软件名称
    OutputBaseFilename={#MyAppName}
    ; 软件图标
    SetupIconFile=C:\Users\Administrator\Desktop\program\Poke Ball.ico
    ; 压缩方式
    Compression=lzma
    ; yes 可以使文件更小
    SolidCompression=yes
    ; 必需有管理员权限才能安装
    PrivilegesRequired=admin
    ; 安装密码
    ;Password=password
    ; 开启加密，需要一个iscrypt.dll文件，网上有下载的
    ;Encryption=yes

    ; 语言配置
    [Languages]
    Name: "chinesesimp"; MessagesFile: "compiler:Default.isl"

    ; 安装文件
    [Files]
    ; 安装部署的源文件路径
    Source: "C:\Users\Administrator\Desktop\program\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
    ; NOTE: Don't use "Flags: ignoreversion" on any shared system files

    ; 快捷键
    [Icons]
    Name: "{group}\{cm:UninstallProgram,{#MyAppName}}"; Filename: "{uninstallexe}"
    Name: "{commondesktop}\快捷HTTP地址"; Filename: "http://localhost:1890"
    Name: "{commondesktop}\打开neo4j数据库"; Filename: "{app}\tool\start_neo4j.bat"
    Name: "{commondesktop}\运行程序"; Filename: "{app}\tool\start.bat"

    ; 程序安装成功后执行脚本
    [Run]
    Filename: "{app}\install\init-path.bat";
    Filename: "{app}\install\init-mysql.bat";

    [Tasks]
    Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: checkablealone

    ; 程序卸载成功后执行脚本
    [UninstallRun]
    Filename:"{app}\uninstall\uninstall.bat";

    ; 程序卸载成功后删除文件
    [UninstallDelete]
    Type:filesandordirs;Name:"{app}\mysql"
    Type:filesandordirs;Name:"{app}\neo4j"
    Type:filesandordirs;Name:"{app}\jdk"
    Type:filesandordirs;Name:"{app}\install"
    Type:filesandordirs;Name:"{app}\uninstall"

打包目录格式如下
```
program
│   logo.ico
│   install.iss
│
└ ─ ─ ─Output
|   |   package.exe
|   
└ ─ ─ ─tool
|   |   start.bat
|   |   start_neo4j.bat
|   |   java.jar
|   |   secret.key
|   |   Application-dev.yml
|
└ ─ ─ ─install
│   │   init-path.bat
│   │   init-mysql.bat
│
└ ─ ─ ─uninstall
│   │   uninstall.bat
│
└ ─ ─ ─jdk
|   │   *
|   
└ ─ ─ ─neo4j
|   |   *
|   
└ ─ ─ ─mysql
|   |   *
|   |   test.sql
|   
└ ─ ─ ─python3
|   |   *
|   
```
启动Inno Setup后  导入install.iss文件  然后选择菜单栏中Build-Compile进行编译  在Output目录找到安装文件后即可安装
安装完毕后桌面会出现一个地址与一个运行脚本  双击运行脚本即可
**MySQL的启动**
在cmd中

    mysql -uroot -proot ：进入数据库； 
    show databases：查看所有数据库； 
    use \<databaseName\>：使用数据库； 
    show tables：查看所有表

## **注意事项**
**关于系统环境变量与用户环境变量**

系统环境变量与用户环境变量只需要有一个就可以  在cmd中使用echo %Path%的时候  显示的是两个环境变量综合的结果  容易在添加环境变量的过程中混淆与重复
建议使用系统变量  其中在设置系统变量时  需要在setx命令后加上 -m 才能保存到系统变量里
由于修改Path后  需要**重启cmd才能获取到最新的变量**  所以不可以把所有环境的配置放在同一个bat里  在试错了一个小时后  把几个软件的环境变量配置修改成了单独的bat脚本
Path也有长度限制  不可以无限添加  当Path长度过长  会省略最后的字符  导致系统指令(sc tasklist)失效
___
**注册表的控制台语法**
1. 在根键"HKEY_CURRENT_USER"下创建一个子键"qingsword"，在这个子键中，添加一个值名称为"hello"，类型为"REG_ZS"，数据为"welcome to my website"
   ```reg add hkcu\qingsword /v hello /t REG_SZ /d "welcome to my website"```
    其中reg add为添加，hkcu为HKEY_CURRENT_USER缩写,/v后面跟键名，/t后面跟类型，/d后面跟键值
2. 查看某个注册表项下面的值
   ```	
   C:\>reg query hkcu\qingsword /v hello

   HKEY_CURRENT_USER\qingsword
       hello    REG_SZ    welcome to my website
   ```
3. 删除hkcu\qingsword下刚才创建的"hello"值
   ```reg delete hkcu\qingsword /v hello /f```
4. 删除hkcu\qingsword下刚才修改的"默认"值
   ```reg delete hkcu\qingsword /ve /f```
5. 删除hkcu\qingsword下所有项
   ```reg delete hkcu\qingsword /va /f```
___
**安装失败时MySQL的卸载**
1. 打开服务停止MySQL的服务
2. 打开cmd 输入：sc delete mysql;
3. 删除MySQL安装目录文件夹
4. win+R输入registers打开注册表 删除以下文件夹的MySQL文件夹
   >HKEY_LOCAL_MACHINE/SYSTEM/ControlSet001/Services/Eventlog/Application/MySQL
   >HKEY_LOCAL_MACHINE/SYSTEM/ControlSet002/Services/Eventlog/Application/MySQL(可能没有此目录)
   >HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/Eventlog/Application/MySQL(可能没有此目录)
5. 卸载成功
___
**选择数据库版本**

安装数据库时可能报错 **由于找不到MYVCR 120.dll，无法继续执行，重新安装程序可能会解决此问题** 这时候表示电脑里缺少文件  通过安装Visual Studio可以解决
通过多次试验  已验证MySQL版本为5.7时下载Visual Studio 2013[下载地址](https://www.microsoft.com/zh-CN/download/details.aspx?id=40784)可以解决该问题
___