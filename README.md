
# 关于项目目录
- apps  业务相关
    - dashboard  后台管理
    - web 业务页面
- packages 公共内容
    - eslint-config 公共eslint 配置
    - stylelint-config 公共 stylelint 配置 
    - ui 公共基础组件

- server 后端服务
    - server-main 主服务



# 项目启动

+ pnpm dev 启动所有服务
+ pnpm dev:web 启动web 服务
+ pnpm dev:server 启动后台服务
+ pnpm dev:ui:demo 启动ui组件的demo示例 



# 项目构建



# 实现目标

## blog_web 模块

初步 使用nuxt + tailwindcss 构建博客展示页面
功能逻辑：
+ 首页
+ 分类
+ 博客阅读 + 博客评论


实现： 使用github api 读取

## blog_dashboard 模块
+ 用户管理
+ 博客编辑 + editor 实现 prosemirror 二次封装或者使用tiptap
+ 博客相关数据展示图表 echart 


## blog_server-main 模块
+ 用户管理 + 鉴权
+ 埋点接口
+ 其他相关接口，如 保存编写博客时像github 推送内容等等附加一些其他数据

# TODO

1. blog_web: nuxtjs + tailwindcss编写，书写博客浏览页面，分类展示，最热展示，
2. dashboard: 博客后台管理：博客内容编写 vue3+ typescript ,一个markdown 编辑器，博客数据可视化展示，埋点上报展示
3. server 后台服务api，公共api暴露提供，内容缓存，用户管理，埋点服务等等






# 计划

+ 测试用例编写
+ 端到端自动化测试
+ 沉淀产物（项目中比较好的封装如eslint默认配置，或者其他组件单独弄成外部可用库）

# 关于 monorepo

monorepo 的优缺点
+ 可见行：每个人都可以看到其他人的代码，对于跨团队开发比较友好，每个人都可去修复bug。
+ 一致性：把所有代码放在同一仓库，可以执行代码质量标准和统一风格更容易。
+ 共享时间线：某一共享项目或API变更会立刻被暴露出来，团队可以快速跟进变化或者第一时间使用新特性。
+ 共享性：不同项目相同点可抽离成单独项目，由其他项目共同使用（UI库、工具类等）。
+ 原子提交：开发人员可以在一次提交中更新多个包或项目。
+ 对于微前端项目更友好


# 关于 TURBOREPO

通俗来说，是利用一种缓存的机制，和第一次构建相同的文件直接引用缓存，跳过构建，不同的文件再进行构建，从而大幅度减少了构建时间。提高了构建速度。
