# 要看官方文档

1. MDN
2. ES6 阮一峰
3. JavaScript
4. Vue2.0 教程
5. Webpack
6. lodash
7. vue-cli
8. npm
9. bootcdn
10. bootstrap
11. swiper
12. nodejs

# 目录

1. 数组方法是否更改原数组+是否生成新数组
2. 什么是 CI/CD 系统，如何增加 GIT 经验
3. 如何动手练习 Vue
4. 什么叫做中间件、有哪些中间件
5. Vue 中什么时候使用箭头函数，什么时候不使用箭头函数
6. 为什么 v-html 涉及 xss 攻击，有哪些 xss 攻击，为了防止 XSS 攻击，应该采取以下措施
7. 使用 Angular 为什么会滥用 watch
8. SPA-单页面应用程序是什么，SPA 常见例子
9. js 里面有哪些异步操作，js 中异步操作的目的
10. lodash 的\_.debounce 函数
11. 插值表达式中，Vue 会查找哪些内容
12. cookie 原理
13. 前端路由？路由跳转？编程式导航和声明式导航，什么时候用哪个？$router和$route
14. 为什么要拆分组件？怎么拆分组件？怎么创建组件？
15. 组件有明确的 API 是什么意思？API 是什么？
16. props 是什么，路由组件传参
17. 创建的全局组件为什么是单标签？为什么前面 header 等都是双标签？
18. with 语句创建新的作用域？
19. Node 的 REPL 环境？浏览器、Node 和 WebWorker？
20. 模块化编程和组件化编程
21. process、require 和 global 是什么
22. js 中哪些是可遍历结构，Iterator 接口，Map 解构、Set 结构、Generator 函数
23. “圆括号属于模式的一部分”是什么意思？JavaScript 中的模式是什么
24. JSON 对象与普通对象的相同与不同？
25. require？nodejs 中的 require
26. 码点
27. let one = yield 11;
28. .require，nodejs，fs?nodejs 几行就可以写服务器了？
29. console.warn
30. axios 发请求返回结果是 Promise 对象？
31. .this.$store.dispatch('add')？
32. 为什么绑定属性名可以随便取？只要不冲突就行，而不是只能绑定特定的一些属性
33. Computed 里面必须是函数，用 this 时必须是普通函数不能是箭头函数
34. 组件之间传递，接收函数的那个组件，最好是自己再 methods 里面写一个函数
35. 全局组件
36. async 和 await
37. …mapState()、namesapce
38. 路由跳转（编程式跳转+声明式跳转
39. 什么时候 this.$router，什么时候this.$route
40. 分不清什么时候写:{}，什么时候写(){}？Mounted(){} components:{} data(){return{}} computed:{xx(){}或者 xx:function(){return yy}}
41. reduce 的 pre 的第二次值
42. todolist 案例中:checked="changeAll()" @change="othersChange 合并为 v-model 双向绑定
43. ref 属性，this.$emit('yy',xx)
44. 为什么 buffer 和 nodejs 都是内置模块，buffer 不需要导入，node 需要导入？nodejs 里面有哪些内置模块？
45. commonJS 和 ESmodule？nodejs 中用 require 导入还是用 ES6+的模块导入方式？
46. vscode 里面多种不同的终端
47. 什么时候用 try-catch，为什么在 try 里面写 fs.writeFileSync 方法
48. 写入、读取、重命名、删除等的异步方法中的回调函数的参数？fs.rename 的回调函数的参数？

## 1.数组方法是否更改原数组+是否生成新数组

### 直接更改原数组

1. **push**|在数组末尾添加元素，改变原数组
2. **pop**|在数组末尾删除元素，改变原数组
3. shift|在原数组前面删除元素，改变原数组
4. unshift|在原数组前面添加元素，改变原数组
5. splice|在原数组中剪切或拼接一部分，改变原数组
6. sort
   - 更改了原数组当不一定是原地修改
   - 可能是创建新数组，再赋值给原数组
7. reverse
8. fill
9. copyWithin()

### 生成新数组

1. **filter**|在原数组中过滤出需要的元素，生成新数组
2. **concat**|合并两个数组，生成新数组
3. **slice**|将原数组分割，生成新数组
4. **map**|在原数组的每个元素对应，生成新数组
5. reduce
6. reduceRight
7. flatmap

### 可能生成新数组也可能更改原数组

1. forEach
2. some
3. every
4. find
5. findIndex
6. indexOf
7. lastIndexOf

## 2.什么是 CI/CD 系统，如何增加 GIT 经验

CI/CD（Continuous Integration/Continuous Deployment）系统是一种软件开发流程和自动化工具的组合，旨在实现持续集成和持续交付。

CI（Continuous Integration）是指将团队成员的代码集成到共享代码仓库中，并通过自动化构建和测试来确保代码质量和稳定性。CI 系统可以自动触发构建和测试流程，帮助团队及时发现和解决代码集成问题。

CD（Continuous Deployment）是指将经过测试和验证的代码自动部署到生产环境中。CD 系统自动化了部署过程，使得团队能够频繁且可靠地将新版本的软件发布到生产环境，以满足快速迭代和交付的需求。

CI/CD 系统通常包括以下关键组件和功能：

- 代码管理和版本控制系统（如 Git）
- 自动化构建工具（如 Jenkins、Travis CI、CircleCI 等）
- 自动化测试工具（如单元测试、集成测试、端到端测试等）
- 部署和发布工具（如 Docker、Kubernetes 等）
- 监控和日志工具（如 ELK Stack、Prometheus 等）

通过使用 CI/CD 系统，开发团队可以实现持续集成和持续交付的目标，提高软件交付的质量和效率，减少手动操作和人为错误的风险，加快软件开发和部署的速度，同时提供更好的可追溯性和可靠性。

## 3.如何动手练习 Vue

1. 创建简单的 Vue 实例：练习创建一个简单的 Vue 实例，并在模板中使用插值语法（{{}}）显示数据。
2. 数据绑定和双向绑定：练习使用 v-bind 指令将数据绑定到 DOM 元素的属性上，以及使用 v-model 指令实现双向数据绑定。
3. 条件渲染和列表渲染：练习使用 v-if、v-else、v-show 指令实现条件渲染，以及使用 v-for 指令渲染列表。
4. 事件处理：练习使用 v-on 指令处理 DOM 事件，并学习事件修饰符和按键修饰符的使用。
5. 计算属性和侦听器：练习使用计算属性和侦听器处理复杂的数据逻辑和响应式数据变化。
6. 组件开发：练习创建和使用 Vue 组件，学习组件之间的通信（props 和自定义事件）和组件的生命周期钩子函数。
7. 表单处理：练习使用表单元素和 v-model 实现表单数据的收集和验证。
8. Vue 路由：练习使用 Vue Router 实现单页面应用的路由功能。
9. Vue 动画和过渡：练习使用 Vue 的过渡和动画功能实现页面的平滑过渡效果。
10. Vuex 状态管理：练习使用 Vuex 管理应用的状态和实现组件间的状态共享。

除了练习，你还可以参考 Vue 官方文档、教程和示例项目来加深理解和应用你所学的知识。此外，尝试参与开源项目或者实践一些小项目也是很好的学习方式，可以锻炼你在实际项目中运用 Vue 的能力。记得在练习和实践中多思考、多查阅文档，不断提升自己的 Vue 技能。

## 4.什么叫做中间件、有哪些中间件【没懂】

中间件（Middleware）是指位于应用程序和底层系统之间的一层软件组件或功能模块。它可以拦截、处理和转换数据流，为应用程序提供额外的功能和服务。

在软件开发中，中间件常用于处理请求和响应的流程，用于执行一些通用的、与业务逻辑无关的任务。它可以对请求进行预处理、修改响应、进行身份验证、日志记录、错误处理等。

**中间件常见于 Web 开发领域**，例如在 Node.js 的 Express 框架中，可以通过中间件来处理路由、解析请求体、设置响应头等操作。在这种情况下，中间件可以按照顺序串联起来，每个中间件都可以对请求和响应进行处理，然后将控制权传递给下一个中间件或最终的请求处理程序。

中间件的好处在于它提供了一种模块化和可复用的方式来处理通用的任务，使得代码更加简洁、可读性更高，并且方便了功能的扩展和修改。通过使用中间件，开发人员可以将关注点分离，将业务逻辑和通用功能分离开来，提高代码的可维护性和可测试性。

常见中间件：

1. Web 开发中的 HTTP 中间件：用于处理 HTTP 请求和响应，包括路由处理、身份验证、日志记录、错误处理等。常见的 Web 中间件包括 Express 中的 body-parser、morgan、cors 等。
2. 数据库中间件：用于处理数据库操作，例如连接池管理、ORM（对象关系映射）等。常见的数据库中间件包括 Sequelize、Mongoose 等。
3. 消息队列中间件：用于处理消息传递和异步任务处理，例如 RabbitMQ、Kafka 等。
4. 安全性中间件：用于处理安全相关的操作，例如身份验证、授权、防止跨站点脚本攻击（XSS）、防止跨站点请求伪造（CSRF）等。
5. 日志中间件：用于记录应用程序的日志，包括请求日志、错误日志等。常见的日志中间件包括 Winston、Log4js 等。
6. 缓存中间件：用于缓存数据以提高性能，例如 Redis、Memcached 等。
7. 图像处理中间件：用于图像处理和转换，例如 Sharp、GraphicsMagick 等。

常见的 Web 中间件：

1. Web 服务器中间件：例如**Apache HTTP Server、Nginx**等，用于接收和处理 HTTP 请求。
2. 路由中间件：例如**Express.js、Koa.js**等，用于根据请求路径和方法将请求路由到相应的处理程序。
3. 认证和授权中间件：例如 Passport.js、jsonwebtoken 等，用于验证用户身份和授权访问。
4. 日志中间件：例如 Morgan、Winston 等，用于记录请求和响应的日志信息。
5. 压缩中间件：例如 compression、gzip 等，用于压缩响应数据以减小传输大小。
6. 错误处理中间件：例如 errorhandler、express-async-errors 等，用于捕获和处理应用程序中的错误。
7. 缓存中间件：例如 node-cache、**Redis**等，用于缓存数据以提高响应速度。

除了 Web 开发，中间件的概念也被广泛应用于其他领域，例如：

1. 操作系统：操作系统中的中间件用于在应用程序和底层硬件之间提供抽象层，简化开发和管理。
2. 消息传递系统：中间件可以用于消息传递系统，如消息队列和发布/订阅系统，用于处理和转发消息。
3. 数据库系统：数据库中的中间件用于管理连接池、缓存查询结果、实现分布式事务等功能。
4. 分布式系统：中间件用于在分布式系统中协调各个组件之间的通信和数据传输。
5. 企业应用集成：中间件用于将不同的企业应用程序集成到一个统一的平台中，实现数据交换和业务流程集成。

### hadoop,hive 是中间件吗

Hadoop 和 Hive 可以被称为中间件，但它们更准确地被归类为分布式计算和数据处理框架。

Hadoop 是一个开源的分布式计算框架，它提供了可靠、可扩展的分布式存储和计算能力。它包括 Hadoop Distributed File System（HDFS）用于存储大规模数据集，以及 MapReduce 编程模型用于分布式数据处理。

Hive 是基于 Hadoop 的数据仓库基础架构，它提供了类似于 SQL 的查询语言（HiveQL）和编程接口，使用户能够使用类 SQL 语句进行数据查询和分析。Hive 将查询转换为一系列 MapReduce 作业来处理数据。

虽然 Hadoop 和 Hive 在分布式计算和数据处理中发挥重要作用，但它们更倾向于被称为分布式计算和数据处理框架，而不是严格意义上的中间件。中间件通常更关注在应用程序和操作系统之间提供中间层的功能，而不是专注于分布式计算和数据处理。

## 5.Vue 中什么时候使用箭头函数，什么时候不使用箭头函数

不要在选项 property 或回调上使用箭头函数，比如配置选项：`created: () => console.log(this.a)` 或回调函数： `vm.$watch('a', newValue => this.myMethod())`。因为箭头函数并没有 `this`，`this` 会作为变量一直向**上级词法作用域**查找，直至找到为止，经常导致 `Uncaught TypeError: Cannot read property of undefined` 或 `Uncaught TypeError: this.myMethod is not a function` 之类的错误。

用箭头函数的情况：

1. 当需要访问当前上下文（`this`）时，箭头函数可以自动绑定父级作用域的`this`，避免了作用域丢失的问题。在 Vue 中，当你希望在方法内部使用 Vue 实例的属性或方法时，可以使用箭头函数。

不使用箭头函数的情况：

1. 当需要在方法内部使用函数的作用域或访问函数的`arguments`对象时，应该使用普通函数而不是箭头函数。
2. 当你需要在组件定义中使用生命周期钩子函数时，应该使用普通函数，因为 Vue 会自动将生命周期函数绑定到组件实例上。

使用箭头函数可以简化代码并确保正确的作用域绑定，但在需要访问函数作用域或使用 Vue 实例时，应该使用普通函数。根据具体的需求和情况，选择合适的函数声明方式。

## 6.为什么 v-html 涉及 xss 攻击

### 为什么 v-html 涉及 xss 攻击

`v-html` 指令在 Vue.js 中用于将数据作为原始 HTML 渲染到页面上。然而，使用 `v-html` 时需要注意潜在的 XSS（跨站脚本攻击）安全风险。

XSS 攻击是指攻击者通过注入恶意脚本来利用网页上的漏洞，以获取用户敏感信息或进行其他恶意行为。当使用 `v-html` 时，如果不**对输入的内容进行适当的过滤和转义**，就有可能导致注入恶意脚本并执行。

为了防止 XSS 攻击，应该始终对通过 `v-html` 渲染的内容进行严格的**输入验证和过滤**，并确保只渲染可信任的内容。不要将未经验证的用户输入直接传递给 `v-html`，而是通过其他安全措施来过滤和转义输入内容，例如**使用服务器端的输入验证、HTML 转义函数**等。

#### 服务器端的输入验证

服务器端的输入验证是指在接收到用户输入数据之后，在服务器端进行验证和过滤，确保输入数据的合法性和安全性。常见的服务器端输入验证包括检查输入数据的长度、格式、类型等，并进行必要的验证和过滤，以防止恶意输入或非法数据对系统造成安全风险。

#### HTML 转义函数

HTML 转义函数是一种用于将特殊字符转换为其对应的实体编码的函数，以防止恶意脚本在 HTML 文档中的执行。常见的 HTML 转义函数有：

- 在 PHP 中，可以使用`htmlspecialchars`函数进行 HTML 转义。
- 在 Python 中，可以使用`html.escape`函数进行 HTML 转义。
- 在 Java 中，可以使用 Apache Commons Text 库中的`StringEscapeUtils`类进行 HTML 转义。
- 在 Node.js 中，可以使用`he`库进行 HTML 转义。

这些 HTML 转义函数会将特殊字符（例如 `<`, `>`, `&`, `"`, `'` 等）转换为它们的对应实体编码（例如 `<`, `>`, `&`, `"`, `'` 等），从而确保在 HTML 文档中显示的是原始字符而不是被解释为标签或特殊字符。

### 有哪些 xss 攻击

1. 反射型 XSS：攻击者构造恶意的 URL，诱使用户点击，当用户点击链接后，恶意脚本会在用户的浏览器中执行，获取用户的敏感信息或执行恶意操作。
2. 存储型 XSS：攻击者将恶意脚本存储在网站的数据库中，当用户访问包含恶意脚本的页面时，恶意脚本会从服务器端传递给用户的浏览器，然后在用户的浏览器中执行。
3. DOM 型 XSS：攻击者通过修改页面的 DOM 结构，使得恶意脚本在浏览器中执行，从而获取用户的敏感信息或执行其他恶意操作。

### 为了防止 XSS 攻击，应该采取以下措施

- 对用户输入进行严格的验证和过滤，确保输入的内容符合预期的格式和结构。
- 在展示用户输入时，进行适当的转义处理，将特殊字符转换为它们的实体编码，防止恶意脚本的执行。
- 使用安全的编码函数来处理用户输入，例如在 JavaScript 中使用 `encodeURIComponent` 或 `encodeURI`，在 HTML 中使用 `htmlspecialchars` 等。
- 使用安全的开发框架和库，这些框架和库通常提供了内置的安全机制来防止 XSS 攻击，例如 Vue.js 的 `v-text` 指令会对内容进行自动转义，防止恶意脚本的执行。

## 7.使用 Angular 为什么会滥用 watch

滥用`$watch`（或类似的观察者模式）可能是因为对 Angular 的工作原理理解不够深入，或者对响应式编程概念的理解有误导。以下是一些可能导致滥用`$watch`的原因：

1. 缺乏对数据绑定的理解：Angular 的核心概念之一是数据绑定，它允许将模型数据与视图保持同步。通过正确地设置数据绑定，可以避免大部分情况下对`$watch`的需求。滥用`$watch`可能是因为没有充分利用数据绑定机制。
2. 过多的监听：在某些情况下，可能会出现对过多的数据进行监听的情况。这可能会导致性能问题，因为每当监听的数据发生变化时，都会触发`$watch`回调。在设计应用程序时，应该谨慎选择需要监听的数据，只监听必要的部分。
3. 对异步操作的不正确处理：有时候，在处理异步操作时，开发人员可能会过度依赖`$watch`来监视数据的变化并执行相应的操作。然而，更好的做法是使用 Promise 或 Observable 来处理异步操作，并在操作完成后手动更新数据模型，而不是使用`$watch`来追踪异步操作的状态。
4. 不正确的性能优化：有时候，开发人员可能会滥用`$watch`来进行性能优化，通过手动跟踪数据的变化并手动更新视图。然而，这种优化往往是不必要的，因为 Angular 已经具有强大的变化检测机制，可以自动跟踪数据的变化并更新视图。

为了避免滥用`$watch`，开发人员应该深入理解 Angular 的数据绑定机制，合理利用数据绑定、事件处理和组件生命周期等功能来处理数据的变化和视图的更新。只在必要的情况下使用`$watch`，并且要注意性能问题和代码的可维护性。

## 8.SPA-单页面应用程序是什么，SPA 常见例子

### SPA-单页面应用程序是什么

单页面应用程序（Single Page Application，SPA）是一种 Web 应用程序的架构模式，它在加载初始页面后，动态地更新页面内容，而不需要重新加载整个页面。相对于传统的多页面应用程序，SPA 在用户体验、性能和开发效率方面具有许多优势。

SPA 的核心思想是将 **Web 应用程序划分为多个组件或视图**，通过 JavaScript 动态地更新这些组件或视图，而不需要从服务器加载新的 HTML 页面。这是**通过使用前端框架（如 Vue.js、React、Angular 等）实现**的。

SPA 的特点包括：

1. 前端路由：SPA 使用前端路由机制来管理应用程序的不同视图或页面。通过在浏览器中使用 URL 路径来导航和显示不同的视图，而不是从服务器加载新的页面。
2. 动态更新：SPA 通过 Ajax 或 WebSocket 等技术与服务器进行数据交互，获取数据并动态地更新页面内容，而不需要重新加载整个页面。这提供了更快的用户体验和更好的性能。
3. 交互性：SPA 具有丰富的交互性，可以通过用户的操作和事件来实时更新页面内容，提供更流畅和响应式的用户界面。
4. 更好的用户体验：由于 SPA 无需重新加载整个页面，用户在浏览应用程序时可以享受更快的页面切换和加载时间，提供了更好的用户体验。
5. 独立性：SPA 可以独立于后端技术，前端和后端可以相对独立地开发和维护，提高了开发效率和团队的协作能力。

SPA 的一些流行的实现框架包括 Vue.js、React、Angular 等。这些框架提供了丰富的工具和组件来简化 SPA 的开发过程，并提供了一致的架构和最佳实践。

总而言之，SPA 是一种现代化的 Web 应用程序架构模式，通过前端技术和框架实现页面的动态更新和交互，提供更好的用户体验和性能。

### SPA 常见例子

1. Gmail：Gmail 是一个典型的单页面应用程序，它使用 JavaScript 和 AJAX 技术来加载和更新邮件内容，用户在同一个页面上进行不同的操作。
2. Facebook：Facebook 的新闻动态、评论和聊天等功能都在同一个页面上进行加载和刷新，用户可以在不刷新整个页面的情况下进行浏览和交互。
3. Twitter：Twitter 也是一个单页面应用程序，它使用 AJAX 和动态更新来加载和显示推文、用户个人资料和其他相关内容。
4. Airbnb：Airbnb 的搜索和预订流程都在同一个页面上进行，用户可以通过滚动和选择选项来浏览和筛选不同的房源。
5. GitHub：GitHub 的代码浏览、提交和评论等功能都在同一个页面上进行操作，用户可以直接在页面上进行代码查看和版本控制。

## 9.js 里面有哪些异步操作，js 中异步操作的目的

1. 回调函数（Callback Functions）：通过将函数作为参数传递给其他函数，在异步操作完成后调用回调函数来处理结果。
2. Promise 对象：Promise 是一种用于处理异步操作的对象。它可以表示一个异步操作的最终完成或失败，并返回结果或错误。
3. async/await：async/await 是 JavaScript 的异步编程模型，它基于 Promise，并提供了一种更简洁和直观的方式来处理异步操作。通过 async 关键字标记一个函数为异步函数，然后使用 await 关键字在异步函数内部等待 Promise 的完成。
4. 定时器（Timers）：JavaScript 提供了一些定时器函数，如 setTimeout 和 setInterval，可以在一定时间后执行回调函数或周期性地执行回调函数。
5. AJAX 请求：通过 XMLHttpRequest 对象或 Fetch API，可以向服务器发送异步请求并接收响应数据。
6. 事件处理：JavaScript 中的事件机制允许在特定事件发生时执行相应的处理函数，如点击事件、键盘事件等。
7. Web Workers：Web Workers 是一种在后台运行的 JavaScript 脚本，可以并行处理复杂的计算任务，避免阻塞主线程。

## 10.lodash 的\_.debounce 函数

`_.debounce` 是 Lodash 库中的一个函数，用于创建一个防抖函数。防抖函数可以限制某个函数在一定时间内的频繁触发，只有**在指定的时间间隔内没有新的触发时**才会执行该函数。

- 在设定的等待时间内，如果函数再次被触发，等待时间会被重置，并重新开始计时。只有在等待时间结束后没有新的触发事件才会执行函数。
- 类似于回城，本来是 5 秒回城，但是中间你不小心点了一下，又会开始 5 秒倒计时
- 应用：输入框的是输入事件

`_.debounce` 函数的使用方式如下：

```javascript
_.debounce(func, wait, options)
```

其中，`func` 是需要执行的函数，`wait` 是等待的时间间隔，单位是毫秒。`options` 是一个可选的配置对象，用于设置防抖函数的行为。常用的选项包括：

- `leading`：指定是否在首次触发时立即执行函数，默认为 `false`。
- `trailing`：指定是否在最后一次触发后再等待一段时间执行函数，默认为 `true`。

示例代码：

```javascript
// 定义一个需要防抖处理的函数
function saveData() {
  // 在此处执行保存数据的逻辑
}

// 创建防抖函数
var debouncedSave = _.debounce(saveData, 1000)

// 在事件处理函数中使用防抖函数
element.addEventListener("input", debouncedSave)
```

在上述示例中，`saveData` 函数是需要防抖处理的函数，通过调用 `_.debounce` 创建了一个防抖函数 `debouncedSave`，并指定等待时间为 1000 毫秒。然后，在事件处理函数中使用了防抖函数 `debouncedSave`，以限制事件的频繁触发。

通过使用 `_.debounce` 函数，可以有效地控制函数的触发频率，避免在短时间内多次执行同一个函数，从而提升性能和用户体验。

### 防抖的应用

1. 输入框搜索：当用户在搜索框中输入文字时，使用防抖函数可以避免频繁发送请求，只在用户停止输入一段时间后发送请求。
2. 窗口调整：当窗口大小调整时，使用防抖函数可以确保在用户停止调整窗口大小后再执行相关操作，例如重新布局或重新计算元素位置。
3. 按钮点击：当用户快速点击按钮时，使用防抖函数可以确保只在用户停止点击一段时间后执行相应的操作，防止误操作或重复执行。

### lodash 的\_.throttle 函数

`_.throttle` 是 Lodash 库中的一个函数，用于创建一个节流函数。节流函数会确保**在指定的时间间隔内只执行一次函数**，并且会在该时间间隔内的连续调用中忽略后续的调用。

- 直接会变成禁用标志
- 指定时间内无法再次触发

函数签名：

```
bashCopy code
_.throttle(func, wait, [options])
```

参数：

- `func`：要节流的函数。

- `wait`：指定的时间间隔，单位为毫秒。

- ```
  options
  ```

  ：可选参数对象，用于配置节流函数的行为。

  - `leading`：指定在时间间隔的开始处执行函数，默认为 `true`。
  - `trailing`：指定在时间间隔的结束处执行函数，默认为 `true`。

使用示例：

```
javascriptCopy codevar throttledFunc = _.throttle(func, 1000);

// 调用节流函数
throttledFunc();

// 在指定的时间间隔内，多次调用函数只会执行一次
```

`_.throttle` 的作用是限制函数的执行频率，常用于处理频繁触发的事件，如滚动事件、鼠标移动事件等。它可以确保函数在指定的时间间隔内只执行一次，避免过多的计算或渲染操作，提高性能和用户体验。

### 节流的应用

1. 滚动事件：在处理滚动事件时，使用节流函数可以控制函数的执行频率，避免过多的计算和渲染操作。
2. 频繁的点击事件：当需要限制用户连续点击按钮的频率时，使用节流函数可以确保只在一定时间间隔后才能再次点击。
3. 页面滚动加载：当需要在页面滚动到底部时加载更多内容时，使用节流函数可以限制加载的频率，避免一次性加载过多内容。

## 11.插值表达式中，Vue 会查找哪些内容

1. Vue 实例中的数据：Vue 会根据数据属性的名称，在 Vue 实例中查找对应的 property，并将其渲染到模板中。

例如，如果在 Vue 实例中有一个 property `message`，你可以在模板中使用 `{{ message }}` 进行插值，Vue 将会将 `message` 的值渲染到对应的位置。

2. 表达式：可以在插值表达式中使用 JavaScript 表达式，进行一些简单的计算和操作。

例如，可以使用 `{{ num1 + num2 }}` 来对两个变量进行求和，并将结果渲染到模板中。

3. Vue 实例中的计算属性和方法：除了直接使用数据属性，还可以在插值表达式中使用 Vue 实例中的计算属性和方法。

例如，如果在 Vue 实例中有一个计算属性 `fullName`，你可以在模板中使用 `{{ fullName }}` 进行插值。

## 12.cookie 原理

Cookie 是一种在客户端存储数据的机制，它被用于在 Web 浏览器和 Web 服务器之间传递和存储数据。下面是 Cookie 的工作原理：

1. 服务器端设置 Cookie：当客户端发送 HTTP 请求到服务器时，服务器可以在 HTTP 响应头中设置一个名为"Set-Cookie"的标头。这个标头包含了要设置的 Cookie 的信息，如名称、值、过期时间、域名等。例如，服务器可以设置一个名为"sessionID"的 Cookie，值为一个唯一标识符，用于跟踪用户的会话状态。
2. 客户端接收并存储 Cookie：当客户端收到带有"Set-Cookie"标头的 HTTP 响应时，它会解析这个标头并将 Cookie 信息存储在浏览器的 Cookie 存储中。浏览器会根据 Cookie 的属性，如域名、路径和过期时间，决定何时发送该 Cookie 给服务器。
3. 客户端发送 Cookie 到服务器：当客户端发送 HTTP 请求到同一域名下的服务器时，它会自动将该域名下的所有 Cookie 包含在请求头的"Cookie"字段中。服务器可以读取这些 Cookie 来获取之前设置的数据，以便进行相关的处理。
4. 服务器端处理 Cookie：服务器接收到包含 Cookie 的 HTTP 请求后，可以通过读取请求头中的"Cookie"字段来获取 Cookie 的值。服务器可以根据这些值进行相应的处理，如验证用户身份、存储用户的偏好设置等。

总结起来，Cookie 的原理就是通过在 HTTP 请求和响应的头部中传递数据来实现客户端和服务器之间的状态管理。客户端接收到的 Cookie 会自动存储在浏览器中，并在后续的请求中自动发送给服务器。服务器通过读取 Cookie 来获取之前设置的数据，以便实现各种功能和状态的管理。

## 13.前端路由？路由跳转？编程式导航和声明式导航，什么时候用哪个？$router和$route

在 Web 开发中，路由是指根据 URL 的不同展示不同的内容或页面。这对于构建单页应用（SPA）特别重要，单页应用的页面跳转不会重新请求 HTML，而是通过 JavaScript 动态地改变页面结构。有两种类型的路由方式：一种是后端路由，即服务器根据 URL 的不同返回不同的 HTML 页面；另一种是前端路由，即不同的 URL 对应同一 HTML 页面，但会渲染不同的内容。

路由跳转是指从当前页面跳转到应用的另一个页面。在 Vue.js 中，路由跳转通常使用 vue-router 库来实现。vue-router 提供了两种导航方式：编程式导航和声明式导航。

1. 编程式导航：在 JavaScript 代码中进行路由跳转，例如：

```js
// 跳转到另一个路由
this.$router.push("/another-route")

// 带查询参数，变成 /register?plan=private
this.$router.push({ path: "register", query: { plan: "private" } })
```

2. 声明式导航：在模板中使用`<router-link>`组件进行路由跳转，例如：

```html
<router-link to="/another-route">Go to Another Route</router-link>
```

在实际开发中，编程式导航和声明式导航并没有严格的使用场景，根据实际需求和习惯选择即可。一般而言，如果只是简单的链接，使用声明式导航即可；如果需要在跳转前执行一些逻辑（如验证），则需要使用编程式导航。

在 vue-router 中，`$router`和`$route`都是注入到每个组件的实例属性。

- `$router`：表示 vue-router 的路由实例。你可以通过`$router`进行编程式导航，如`this.$router.push('/')`、`this.$router.replace('/')`，或者访问全局的路由信息，如`this.$router.mode`。
- `$route`：表示当前激活的路由的状态信息，包括当前 URL 的路径、参数、查询参数等。例如，你可以通过`this.$route.path`获取当前路径，或者通过`this.$route.query`获取查询参数。

## 14.为什么要拆分组件？怎么拆分组件？怎么创建组件？

在 Vue.js 等现代前端框架中，组件化是一种常见的设计模式。组件化的主要好处是提高了代码的重用性、可维护性和可测试性。

1. **为什么要拆分组件？**

   拆分组件有许多好处。首先，它可以使你的代码更加模块化和可重用。例如，如果你有一个在多个地方都需要使用的按钮，你可以将其创建为一个组件，然后在需要的地方复用它。其次，拆分组件也可以使代码更加清晰和易于理解。每个组件都有一个明确的功能和 API，这使得理解和维护代码变得更加简单。最后，拆分组件还有助于改进性能，因为 Vue.js 可以跟踪每个组件的依赖关系，并只在必要时更新组件。

2. **怎么拆分组件？**

   组件的拆分通常基于其功能或者是 UI 的结构。一般来说，如果一个部分在 UI 中可以独立存在（比如一个按钮、一个输入框）、或者它有着独立的功能（比如一个日期选择器）、或者它在多处被复用，那么这个部分就应该被拆分为一个组件。

3. **怎么创建组件？**

   在 Vue.js 中，可以通过以下方式创建一个组件：

   ```vue
   <template>
     <div class="my-component">
       <!-- 组件的内容 -->
     </div>
   </template>

   <script>
   export default {
     name: "MyComponent",
     // 组件的选项
   }
   </script>

   <style scoped>
   /* 组件的样式 */
   </style>
   ```

   创建好的组件可以通过`import`导入并在其他组件或者页面中使用。

请注意，如何拆分和创建组件没有固定的规则，这很大程度上取决于你的应用的需求和你的设计决策。一般来说，尽量保持组件的功能单一并使其可复用是一个好的实践。

## 15.组件有明确的 API 是什么意思？API 是什么？

在计算机编程中，API 是应用程序接口(Application Programming Interface)的缩写，它是一种协议或规则，定义了如何通过程序或代码来交互或访问某个软件组件、库、服务或者系统。一个好的 API 应该清晰、简洁、一致，并且能够很好地隐藏实现细节。

当我们说一个 Vue.js 组件有一个明确的 API 时，我们通常是指该组件暴露出一套清晰的接口供其他组件或者代码使用。这些接口包括组件的 props、事件、插槽、公开的方法等。它们定义了如何使用这个组件，以及这个组件如何与其他代码交互。

例如，假设我们有一个名为`MyButton`的 Vue.js 组件，它的 API 可能如下：

- props：
  - `label`：按钮的文字。
  - `disabled`：一个布尔值，表示按钮是否被禁用。
- 事件：
  - `click`：当按钮被点击时触发的事件。
- 插槽：
  - 默认插槽：用于在按钮中显示一些自定义的内容。
- 公开的方法：
  - `focus`：使按钮获取焦点。

有了这样一个明确的 API，其他人就可以很容易地理解如何使用这个`MyButton`组件，而无需了解其内部是如何实现的。同时，这也使得这个组件的维护和更新变得更加容易，因为我们只需要保证 API 的行为不变，就可以自由地改变组件的内部实现。

## 16.props 是什么，路由组件传参

在 Vue.js 中，props 是组件实例的一个属性，**用于从父组件向子组件传递数据**。每个 prop 都有一个名字和一个类型。子组件通过 props 获取父组件传递过来的数据，并且不能修改这些数据，这确保了数据的单向流动，使得数据的来源和流向更加清晰。

以下是一个例子，父组件向子组件传递一个名为`message`的 prop：

```vue
<!-- 父组件 -->
<template>
  <ChildComponent :message="parentMessage" />
  <!-- 父组件只需要动态绑定即可 -->
</template>

<script>
import ChildComponent from "./ChildComponent.vue"

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      parentMessage: "Hello from parent component!",
    }
  },
}
</script>
```

子组件接收这个`message` prop：

```vue
<!-- 子组件 -->
<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  props: {
    message: String, // 子组件需要
  },
}
</script>
```

对于路由组件，也可以通过 props 来传递路由参数。首先，在路由配置中启用`props`：

```js
{
  path: '/user/:id',
  component: UserComponent,
  props: true // 启用props，并将路由参数作为props传递给组件
}
```

然后，在`UserComponent`中通过 props 接收这个`id`参数：

```vue
<!-- UserComponent -->
<template>
  <div>User ID: {{ id }}</div>
</template>

<script>
export default {
  props: {
    id: String,
  },
}
</script>
```

通过这种方式，你可以通过 props 将路由参数传递给组件，而无需在组件内部通过`this.$route.params`来访问。

## 17.创建的全局组件为什么是单标签？为什么前面 header 等都是双标签？

## 18.with 语句创建新的作用域？

with 语句目的：提供一种编写更少代码的方式来访问对象的属性

会创建一个新的词法环境或上下文，但这与创建一个新的变量作用域略有不同。但是确实会创建新的作用域，也就是提到的 let\const\函数\with 会创建新的作用域

```js
with (obj) {
  console.log(prop1) // 不需要再写obj.
  console.log(prop2)
  console.log(prop3)
}
```

由于其可能引发的混淆和可能的性能问题，`with`语句在 JavaScript 中通常被认为是不建议使用的，特别是在严格模式下，`with`语句是被明确禁用的。

## 19.Node 的 REPL 环境？浏览器、Node 和 WebWorker？

## 20.模块化编程和组件化编程

## 21.process、require 和 global 是什么

## 22.js 中哪些是可遍历结构，Iterator 接口，Map 解构、Set 结构、Generator 函数

## 23.“圆括号属于模式的一部分”是什么意思？JavaScript 中的模式是什么

## 24.JSON 对象与普通对象的相同与不同？

## 25.require？

## 26.码点

在 JavaScript 和计算机编程中，"码点"（code point）是一个用于表示某个特定字符的数字。

例如，对于 Unicode 标准（一种编码标准，包含了几乎所有的全球语言字符），每个字符都对应一个唯一的码点。码点通常以十六进制表示，并且以"U+"前缀开头。例如，字母"A"的 Unicode 码点是 U+0041，中文字符"中"的 Unicode 码点是 U+4E2D。

JavaScript 中的字符串是由一系列的 Unicode 码点组成的。每个码点在字符串中都表示一个字符。你可以使用`\u`转义序列加上四位十六进制数来表示一个码点，例如`"\u0041"`表示字母"A"。对于超过 U+FFFF 的码点，需要使用`\u{}`语法，例如`"\u{1F600}"`表示 😀。

在 JavaScript 中，你可以使用`String.fromCodePoint`方法从码点创建一个字符串，也可以使用`String.prototype.codePointAt`方法获取字符串中特定位置的码点。例如：

```js
console.log(String.fromCodePoint(0x41)) // 输出 "A"
console.log("A".codePointAt(0)) // 输出 65
```

注意：虽然 JavaScript 内部使用 UTF-16 编码来表示字符串，但这通常对 JavaScript 开发者透明。大多数时候，你只需要把 JavaScript 字符串看作是由一系列的 Unicode 字符组成的即可。

## 27.let one = yield 11;

## 28..require，nodejs，fs?nodejs 几行就可以写服务器了？

## 29.console.warn

## 30.axios 发请求返回结果是 Promise 对象？

## 31.this.$store.dispatch('add')？

## 32.为什么绑定属性名可以随便取？只要不冲突就行，而不是只能绑定特定的一些属性

## 33.Computed 里面必须是函数，用 this 时必须是普通函数不能是箭头函数

## 34.组件之间传递，接收函数的那个组件，最好是自己再 methods 里面写一个函数

## 35.全局组件

## 36.async 和 await

## 37.…mapState()、namesapce、dispatch

`mapState` 是 Vuex 的辅助函数，帮助你在计算属性中生成一些返回 Vuex Store 中状态的函数，以便你在组件中直接使用这些状态。`mapState` 函数可以接受一个对象或数组，该对象或数组定义了如何从 Vuex Store 中的状态映射到组件的计算属性。

在你的示例中：

```
javascriptCopy codecomputed:{
    ...mapState({
        categoryList:state=>state.home.categoryList
    })
}
```

`...` 是 JavaScript 的扩展运算符，它将一个对象或数组中的元素展开。

`mapState` 函数接受一个对象，该对象的键是计算属性的名称，值是一个函数，这个函数接收 Vuex 的 state 作为参数，并返回需要的状态。

在这个例子中，`mapState` 会生成一个名为 `categoryList` 的计算属性，这个计算属性返回 `state.home.categoryList` 的值。所以，你可以在这个组件中直接通过 `this.categoryList` 来访问 `state.home.categoryList` 的值。

也就是说，上述代码等价于以下代码：

```
javascriptCopy codecomputed: {
    categoryList() {
        return this.$store.state.home.categoryList;
    }
}
```

这样，你就可以在组件中通过 `this.categoryList` 来获取到 Vuex 中 `state.home.categoryList` 的值了。

**因为 namespace 的存在，所以 dispatch 里面要写仓库的模块名称**

## 38.路由跳转（编程式跳转+声明式跳转

## 39.什么时候 this.$router，什么时候this.$route

`his.$route` 和 `this.$router` 是 Vue.js 在与 vue-router 插件结合使用时提供的两个属性，它们让你可以在组件内访问路由信息和操作路由。

- `this.$route` 是一个路由信息对象，它包含当前激活的路由的信息，如当前 URL 的路径、查询参数、路由参数等。这是一个**只读**的对象，你可以用它来获取路由信息，但不能用它来改变路由。path、query、params、name
- `this.$router` 是一个路由器实例对象，它包含了一些方法，如 `push`、`replace`、`go` 等，可以用这些方法来**编程式地导航**到一个新的路由。

```vue
export default { mounted() { // 使用 this.$route 获取当前路由信息
console.log(this.$route.path); // 输出当前路由的路径
console.log(this.$route.query); // 输出当前 URL 的查询参数 // 使用 this.$router
导航到一个新的路由 this.$router.push('/new-path'); } }
```

## 40.分不清什么时候写:{}，什么时候写(){}？mounted(){} components:{} data(){return{}} computed:{xx(){}或者 xx:function(){return yy}}

## 41.reduce 的 pre 的第二次值

## 42.todolist 案例中:checked="changeAll()" @change="othersChange 合并为 v-model 双向绑定

## 43.ref 属性，this.$emit('yy',xx)

## 44.为什么 buffer 和 nodejs 都是内置模块，buffer 不需要导入，node 需要导入？nodejs 里面有哪些内置模块？

在 Node.js 中，`buffer` 和 `fs` 都是内置模块，但它们的使用方式有所不同，导致需要的引入方式也不同。

1. Buffer:
   `Buffer` 是 Node.js 中用于处理二进制数据的模块。在早期版本的 Node.js 中，`Buffer` 对象是全局对象，不需要显式导入即可直接使用。例如，可以直接使用以下方式创建一个 Buffer 对象：

```js
const buf = Buffer.alloc(10)
```

然而，由于 `Buffer` 在处理二进制数据时可能会带来安全问题和性能隐患，自 Node.js 6.0 版本开始，Node.js 将 `Buffer` 模块从全局对象中移除，推荐通过显式导入方式引入：

```js
const { Buffer } = require("buffer")
```

或使用 ES6+ 的模块导入方式：

```js
import { Buffer } from "buffer"
```

虽然不再是全局对象，但由于 `buffer` 模块仍然是 Node.js 内置模块，因此在 Node.js 环境中无需单独安装或下载。

2. fs:
   `fs` 是 Node.js 中用于与文件系统进行交互的模块，用于读取、写入、修改和删除文件等操作。由于 `fs` 模块提供的功能较为庞大，不适合作为全局对象，因此需要显式导入才能在代码中使用。

```js
const fs = require("fs")
```

或使用 ES6+ 的模块导入方式：

```js
import fs from "fs"
```

虽然 `fs` 是 Node.js 内置模块，但由于功能较为复杂，需要开发者显式引入后才能使用其中的各种方法。

总结：虽然 `buffer` 和 `fs` 都是 Node.js 的内置模块，但由于历史原因和功能复杂性，`buffer` 不再是全局对象，推荐显式导入；而 `fs` 作为文件系统模块，需要显式导入才能使用其中的各种文件操作方法。

Node.js 拥有许多内置模块，这些模块可以在任何 Node.js 环境中直接使用，无需额外安装。以下是一些常用的 Node.js 内置模块：

1. `fs`：用于操作文件系统，读写文件等操作。
2. `http`：用于创建 HTTP 服务器和客户端，处理 HTTP 请求和响应。
3. `path`：用于处理文件路径，拼接、解析、规范化路径等操作。
4. `url`：用于解析 URL，提取其中的协议、主机名、路径等信息。
5. `os`：提供操作系统相关的信息，如操作系统平台、CPU 架构等。
6. `events`：用于处理事件，包括事件的触发和监听。
7. `util`：提供一些实用工具函数，如继承、类型判断等。
8. `querystring`：用于解析和格式化 URL 查询字符串。
9. `crypto`：提供加密和解密功能，包括哈希、加密、解密等。
10. `buffer`：用于处理二进制数据，如创建、修改、读取 Buffer 等。
11. `stream`：用于处理流数据，包括读取和写入流、管道操作等。
12. `child_process`：用于创建和管理子进程，与其他进程进行通信。
13. `assert`：用于进行断言测试，帮助验证程序逻辑。

以上仅是一部分常用的 Node.js 内置模块，Node.js 还有许多其他内置模块，每个模块都提供特定的功能，可以根据需要灵活使用。你可以在 Node.js 官方文档中找到完整的内置模块列表及其详细文档。

## 45.commonJS 和 ESmodule？nodejs 中用 require 导入还是用 ES6+的模块导入方式？

Node.js 中早期使用的是 CommonJS 规范，通过`require`来导入模块。然而，随着 Node.js 的发展和 ES6（ECMAScript 2015）的引入，也引入了 ES6 模块的支持。ES6 模块提供了更现代化和优雅的方式来导入和导出模块。

在 Node.js 中，你可以根据自己的需求来选择使用`require`还是 ES6 模块导入方式。

1. `require`：这是 Node.js 早期使用的模块导入方式，它是 CommonJS 规范的一部分。如果你的项目中使用了大量的第三方模块或是早期编写的 Node.js 代码，那么使用`require`是比较合适的选择。

   ```javascript
   // 使用 require 导入模块
   const fs = require("fs")
   ```

2. ES6 模块导入：在支持 ES6 模块的最新版本的 Node.js 中，你可以使用 ES6 模块导入方式。它提供了更简洁、可读性更好的语法，适用于新项目和现代化的开发环境。

   ```javascript
   // 使用 ES6 模块导入方式
   import fs from "fs"
   ```

值得注意的是，当你使用 ES6 模块导入方式时，文件的扩展名通常需要明确指定（例如：`.js`）。而在 CommonJS 规范中，Node.js 会默认识别`.js`、`.json`、`.node`这三种扩展名。

另外，如果你在 Node.js 中使用了 ES6 模块导入方式，需要确保你的 Node.js 版本支持这个特性。从 Node.js 12 版本开始，你可以在大部分情况下直接使用 ES6 模块导入方式，但在某些特定场景下可能需要进行一些配置。如果你的项目还在使用较旧版本的 Node.js，可以通过 Babel 等工具来转换 ES6 模块语法，以支持旧版 Node.js 环境。

## 46.vscode 里面多种不同的终端

## 47.什么时候用 try-catch，为什么在 try 里面写 fs.writeFileSync 方法

`try-catch` 是 JavaScript 中用于处理异常情况的一种结构。它的作用是在 `try` 块中执行代码，并且当发生异常时，会跳转到 `catch` 块，从而捕获异常并进行相应的处理，避免程序因为异常而终止。

`try-catch` 在以下情况下常常被使用：

1. 处理可能发生的异常：当执行一些可能会抛出异常的代码时，使用 `try-catch` 可以捕获这些异常，并在 `catch` 块中进行适当的处理，而不会导致整个程序崩溃。

2. 错误处理：在异步操作中，例如读写文件、发送网络请求等，如果操作出现错误，`try-catch` 可以帮助捕获这些错误并进行处理，以避免程序崩溃或出现未处理的错误。

关于为什么在 `try` 块中写 `fs.writeFileSync` 方法，这是因为 `fs.writeFileSync` 是 Node.js 中用于同步写入文件的方法。同步方法是指代码会阻塞在此处，直到操作完成或出现错误才会继续执行后续代码。而在同**步方法中，异常会直接抛出并中断程序的执行**。因此，在使用同步方法时，需要使用 `try-catch` 来捕获异常并进行处理，以避免异常导致程序的崩溃。

举例说明：

```javascript
const fs = require("fs")

function writeFileSafely(filePath, data) {
  try {
    fs.writeFileSync(filePath, data) // 在try块中执行同步写入操作
    console.log("文件写入成功！")
  } catch (error) {
    console.error("文件写入失败：", error.message) // 捕获异常并进行处理
  }
}

writeFileSafely("example.txt", "Hello, World!")
```

在上述例子中，如果写入文件成功，控制台会输出 `'文件写入成功！'`；如果写入文件失败，控制台会输出错误信息，并且程序不会崩溃。使用 `try-catch` 可以有效地处理文件写入过程中可能出现的异常。

## 48.写入、读取、重命名、删除等的异步方法中的回调函数的参数？fs.rename 的回调函数的参数？

在 Node.js 的 fs 模块中，fs.rename 方法用于重命名文件或移动文件。它的回调函数在操作完成后被调用，回调函数的参数如下：

1. `err`：如果操作失败，则 err 参数会包含一个 Error 对象，否则为 null 或 undefined。

注意：在最新版本的 Node.js 中，fs.rename 方法已经支持使用 Promise，可以使用 async/await 或者 .then() 方法处理重命名操作，而不一定非要使用回调函数。
