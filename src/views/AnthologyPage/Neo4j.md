## Neo4j 简单语法
***
1. 查询
   ```match (n:label) return n limit 25```
2. 删除
   1. 删除实体
      ```match (n:label) delete n```
   2. 删除关系
      ```match p=()-[x:relation]->() delete x```
3. 新增