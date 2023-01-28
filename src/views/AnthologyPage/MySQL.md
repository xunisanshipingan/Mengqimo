### mysql遇上的各种问题和语句解释

1. 导出指定数据库的所有表格
    mysqldump -u[username] -p[password] --databases [databases] > dump.sql
2. 修改密码
    
3. 创建数据库
    CREATE DATABASE IF NOT EXISTS transmittal_data_install DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_general_ci;
    USE transmittal_data_install;
