var posts=["2024/07/13/AI-若依/","2024/02/17/Axios入门和源码分析/","2024/08/04/Docker/","2024/02/06/ES6-ES11/","2024/04/07/JDBC/","2024/07/27/Git/","2024/07/06/JVM-/","2024/08/03/Linux/","2024/04/19/Maven/","2024/07/25/MySql/","2024/03/05/Java/","2024/04/30/Mybatis-Plus/","2024/07/21/Python正则/","2024/07/19/Reactor响应式编程/","2024/08/02/Oracle/","2024/07/23/Redisson-AOP自定义分布式锁组件/","2024/07/09/SPI打破双亲委派/","2024/04/09/JavaWeb/","2024/04/29/SSM整合-SpringBoot3实战-MyBatis-Plus/","2024/07/10/JUC并发编程/","2024/02/07/TypeScript/","2024/04/29/Spring-Boot3/","2024/07/17/heima-直播课/","2024/02/06/Vue3/","2024/07/11/java并发编程-volatile关键字解析/","2024/02/06/jsonp解决跨域/","2024/02/03/js进阶/","2024/02/17/promise入门/","2024/02/06/vue3项目实践/","2024/03/07/react/","2023/11/15/信息搜集/","2024/02/10/webpack5/","2024/07/09/vue学习vue2+vue3/","2024/07/14/天机学堂/","2023/12/10/爬虫初级/","2024/07/30/双Token三验证/","2024/07/18/数据结果与算法/","2024/07/26/神领物流/","2024/04/30/SSM框架/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };