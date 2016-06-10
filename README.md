Vue Problems and Solutions

欢迎大家贡献自己的problems和solutions

##贡献方法

###先fork项目

    git clone your-project-git-url
    cd vue-problems-and-solutions

###切换到dev分支

    git checkout dev
    npm install

###通过本地启动项目或在主页上的dev路由下编辑你的问题名称、标签和解决方案

    npm run dev
    http://localhost:8080/#!/dev

    或者

    http://qianjiahao.github.io/vue-problems-and-solutions/#!/dev

###复制代码到项目的src/config/doc.js文件中

    cd src && cd config && cd doc.js

    嗯。。。我知道这么做有点low。。。先这么整吧。。。

    PS: 注意空格，因为开启了eslint

###现在本地跑通代码, 回到主页，查询刚刚添加的问题

    http://localhost:8080/#!/

###跑通代码后提交

    git add --a
    git commit -a -m "你的problems和solutions的简介"
    git push origin dev

###Pull Request


在过程中可能会遇到的问题：

 1 你需要的标签在已有标签中没有，这时需要你手动添加标签
   路径: src/config/tag.js
   规则: 请保持标签的key/value一致，如果是英文统一小写

   添加完后add到git

 2 编辑中需要添加你自己的图片，因为项目是静态的，你可以使用网络图片；或者将本地图片"网络化"
   本地图片网络化的方法是: 找一个社区或者平台，把本地图片丢上去。。。略

   注意: 不要把图片放到项目的images文件夹中，那样做是无效的
