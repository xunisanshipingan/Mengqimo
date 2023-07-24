### mysql遇上的各种问题和语句解释
***
**1. 导出指定数据库的所有表格**
    mysqldump -u[username] -p[password] --databases [databases] > dump.sql
**2. 修改密码**
    
**3. 创建数据库**
    CREATE DATABASE IF NOT EXISTS transmittal_data_install DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_general_ci;
    USE transmittal_data_install;

**4. 存储过程**
基本语法:
    
    CREATE PROCEDURE pro_name ([params,···])
    AS
    BEGIN
        ---SQL 语句
    END

专有名词说明:
1. 
**后记：** 由于存储过程缺点难以维护、移植、调试和扩展，所以仅做了解

**5. 触发器**
基本语法：

    CREATE TRIGGER tri_name ON table_name
    FOR insert
    AS
    IF INSERT(filed)
    BEGIN
        declare @field int
        select @field = field from inserted
        declare @field1 int
        select @filed1 = filed1 from deleted
    END

名词说明：
declare：设置变量
inserted：临时表（记录更新的信息）
deleted：临时表（记录删除的信息）