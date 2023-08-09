# nodejs 十个模块

1. 计算机基础（面试笔试）
   1. 计算机组成结构
   2. 程序运行流程
   3. 进程和线程
   4. 同步和异步
   5. IP 和端口
2. **nodejs API**
3. 包管理工具
4. **HTTP 协议**
5. Express 框架
6. Mongodb
7. 会话控制
8. API 接口
9. 实战案例
10. 服务器部署

# why nodejs

1. 多人访问网页
2. 前端框架学习基础

# what is nodejs

1. 开源的，跨平台的 JavaScript 运行环境
2. 应用程序，运行 JavaScript

# nodejs todo

1. 开发服务器应用
2. 开发工具类应用
   1. webpack vite babel
3. 开发桌面端应用
   1. vscode figma postman
   2. 基于 electron

# 基础——命令行工具

1. chrome url1 url2
2. dir 查看文件夹内容
3. cd change directory
4. `dir /s` 查看文件夹下所有文件内容（包括所有子文件）
5. 选中文件 open in integrated terminal

# nodejs 注意事项

1. nodejs 中不能使用 bom 和 dom 的 API
2. js 包括 web API 和 ECMAScript，nodejs 包括 ECMAcript 和 nodejsAPI；**web API 有哪些**，**node API 有哪些**
   1. node 没有 window history navigator location document XMLHttpRequest
   2. node 有 console global globalThis 定时器

# Buffer

1. nodejs 的内置模块，不需要引入
2. 创建的 三种方法。alloc 申请的空间，每个字节的值都为 0；allocUnsafe 可能存在旧的内存空间旧数据（不会清空）；from 由数组转换来，数字会转换成二进制。
3. 与字符串的转换。toString 方法。
   1. 不传入参数，转换成字符
   2. 传入参数 2，转换成二进制形式字符串
4. 读写。
   1. 单个字节可修改
   2. 溢出舍弃。如果等式右边十进制数超过了二进制的 8 位，会舍弃高位
   3. 一个 utf-8 的字符 一般 占 3 个字节

# 计算机基基础

# fs 模块

1. 与硬盘交互，文件读写、移动、命名、删除，文件夹操作，查看资源状态
2. nodejs 内置模块
3. 需要导入
   - require 是 Node.js 环境中的'全局'变量，用来导入模块

## 文件写入

1. fs 的 writeFile 方法（异步写入）
   1. 不存在文件会自动创建
   2. 三个或四个参数
   3. 返回值 undefined
   4. 回调函数一个参数 err
2. fs 的 writeFileSync 方法（同步写入）
   1. 同步是顺序执行，存在等待
   2. 没有 callback 参数
3. fs 的 appendFile / appendFileSync 方法（异步追加、同步追加）
4. fs 的 reateWriteStream 方法（流式写入）
   1. 一个参数，文件路径；两个参数，文件路径和配置选项
   2. write 方法调用，进行写入
   3. 减少打开关闭文件的次数，适合大文件写入或者频繁写入
   4. close 方法，关闭通道
   5. end 方法，结束写入
5. 应用场景
   1. 需要持久化保存数据
   2. 自动化
6. 文件写入，在 Windows 系统中，回车符用两个字符组成，分别是\r 和\n，即\r\n

## 文件读取

1. fs 的 readFile 方法（异步读取）
   1. 一个或两个参数
   2. 回调函数有两个参数，err 和 data，data 是 Buffer 对象（十六进制形式存储数据），需要 toString
2. fs 的 readFileSync 方法（同步读取）
   1. 一个或两个参数
   2. 第二个参数可以是指定'utf-8'
   3. 用变量接收，选了 utf-8 则不需要 toString
   4. 读取文件夹的话，返回值是文件数组
3. fs 的 createReadStream（流式读取）
   1. 一个或两个参数
   2. 流对象读取，rs.on 方法（每次取出 64k 数据后执行一次 data 回调
      1. 第一个参数是'data'，绑定 data 事件
      2. 第二个参数是回调，chunk 参数，一个个块
      3. 文本需要 toString
   3. 流对象读取，rs.end 方法（读取完毕后, 执行 end 回调
      1. 第一个参数是'end'，绑定 end 事件
4. 应用场景

## 练习-复制文件

1. 同步实现
   1. 导入 fs 模块
   2. 同步读取文件内容，将返回值赋值给变量
   3. 同步写入文件，将变量作为第二个参数传入
2. 流式实现（较第一种更优，占用内存空间更小）
   1. 导入 fs 模块
   2. 创建读取流对象，将返回值赋值给变量
   3. 创建写入流对象，将返回值赋值给变量
   4. 复制
      1. 给读取流对象绑定 data 事件，调用写入流对象的 write 方法
      2. 管道实现复制 `rs.pipe(ws)`
3. process 内置模块
   1. 导入
   2. （流式等执行完毕后，写入直接在最后）获取内存占用量

## 文件移动与重命名

1. fs 的 rename 方法
   1. 三个参数，旧路径、新路径、回调函数
   2. 直接调用是重命名
2. fs 的 renameSync 方法
   1. 两个参数，旧路径、新路径
   2. 直接调用是重命名
3. 本质是修改文件路径

## 文件删除

1. fs 的 unlink 方法
   1. 两个参数，路径、回调函数
2. fs 的 unlinkSync 方法
   1. 一个参数，路径
3. fs 的 rm 方法
   1. 两个参数，路径、回调函数
4. fs 的 rmSync 方法
   1. 一个参数，路径

## 文件夹操作

1. fs 的 mkdir 方法
   1. 两个或三个参数
   2. 可以递归创建，需要配置对象 `{recursive:true}`
   3. compact 层级显示/紧凑显示
2. fs 的 mkdirSync 方法
   1. 一个或两个参数
3. fs 的 readdir 方法
   1. 两个参数，路径和回调函数
   2. 回调函数两个参数，err 和 data
4. fs 的 readdirSync 方法
5. fs 的 rmdir 方法
   1. 可以递归删除，需要配置对象 `{recursive:true}`，在文件夹非空时删除文件夹下所有层级内容
   2. nodejs 高级版本中 rmdir 方法没了，新的 rm 方法，自动递归删除
6. fs 的 rmdirSync 方法

## 查看资源状态

1. fs 的 stat 方法
   1. 两个参数，路径、回调函数
   2. 回调函数两个参数，err 和 data
2. 有用信息
   1. size 文件大小
   2. brithtime 文件创建时间
   3. ctime 最后修改文件状态时间
   4. atime 最后访问时间
   5. mtime 最后修改时间
3. data.isFile
4. data.isDirectory

## 路径问题

1. ./相当于没有，都是在当前路径下创建文件
2. ../在上一层文件夹下创建文件
3. 绝对路径，C 盘没权限直接写文件
4. /相当于在当前盘符根路径
5. 相对路径不是 node 执行的 js 文件的所在目录，而是命令行所在目录

## `__dirname`

1. 全局变量
2. 当前文件所在目录的绝对路径
3. 不会随着工作目录的变化而变化
4. 路径写法改为`__dirname + '/文件名'`

## fs 模块中的配置选项

在 Node.js 的文件系统 (fs) 模块中，文件读取和写入方法通常会有一些配置选项，用于指定不同的行为和参数。以下是常见的配置选项：

1. `flag`：用于指定文件操作的标志，例如 `'r'` 表示读取文件，`'w'` 表示写入文件，`'a'` 表示追加文件等。
2. `encoding`：用于指定文件的编码方式，例如 `'utf-8'` 表示使用 UTF-8 编码读取或写入文件。
3. `mode`：用于指定文件的权限模式，例如 0o666 表示普通文件的读写权限。
4. `recursive`：用于指定是否递归创建目录。通常在创建目录或写入文件时使用。设置为 `true` 表示递归创建目录。
5. `maxBuffer`：用于指定在读取文件时允许的最大缓冲区大小，以字节为单位。超过该大小的文件将会引发异常。
6. `withFileTypes`：用于指定在读取目录时是否返回文件对象而不仅仅是文件名。
7. `autoClose`：用于指定在读取文件或目录时是否自动关闭文件句柄。
8. `start` 和 `end`：用于指定在读取文件时的开始和结束位置，以字节为单位。
9. `persistent`：用于指定监听文件系统事件时是否持续监听。

## fs 练习-文件批量重命名

1. 练习一：文件名开头小于 10，拼接 0
2. 练习二：删掉 02 文件，将 03 变 02，04 变 03，依此类推

# path 模块

1. `__dirname` 里面的路径是由\拼接的，我们正常些写是/拼接，不规范
   1. 文件夹绝对路径
2. path 模块的 API
   1. **`path.resolve`拼接规范的绝对路径**，常用
   2. `path.sep`获取操作系统的路径分隔符，不同操作系统可能是`/`（linux）或者`\`（windows）
   3. `path.parse`解析路径并返回对象
   4. `path.basename`获取路径的基础名称（文件名）
   5. `path.dirname`获取路径的目录名（路径名）
   6. `path.extname`获取路径的扩展名（后缀）
3. `__filename`文件绝对路径
4. 直接写路径`\`要写成`\\`

# http 模块

## HTTP 协议

### 初始 HTTP 协议

1. 超文本传输协议，通信协议
2. 客户端（浏览器）和服务端共同遵守的统一规定

### HTTP 报文

1. 请求报文？响应报文？
2. 软件使用：fiddler 软件查看请求和响应报文，作为客户端和服务器端的中间者；mac 用 proxy 或者 charles；
   1. 在浏览器中输入，就会在 fiddler 中监听到，双击请求，就会有请求响应信息，raw
   2. 中文乱码不知道怎么办
3. 请求报文结构
   1. 请求行
      1. 请求方法（5+4）
      2. URL uniform resource locator
         1. 本身是字符串
         2. 【字节跳动进阶版青训营代码题：解析 url，获取 params 和 query】
         3. 构成：协议名+://+主机名（域名 or IP 地址）+/+端口号+路径（以斜线开头）+查询字符串（向服务器传递额外参数）
      3. HTTP 协议版本号
         1. 1.0-1.1-2-3
   2. 请求头
      1. 一系列键值对构成
      2. 参考 mdn，查看请求头详细信息：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers
   3. 空行
   4. 请求体
      1. 可以设置任意内容，格式非常灵活
4. 响应报文结构
   1. 响应行
      1. HTTP 版本号
      2. 响应状态码
      3. 响应状态的描述：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status 查找陌生状态描述
   2. 响应头
      1. https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers
      2. 设定非标准响应头，用于传输自定义数据
   3. 响应体
5. 【学 http 的时候可以去做思维导图】
   1. 状态码、分类
   2. 请求方法
   3. 响应体格式
   4. IP 分类

### IP

1.  来源：本质是 32bit，后每 8bit 一组，转换成 10 进制数字，用.分开
    1. IP 不够用
    2. 共享 IP——公网 IP（区域共享，家庭共享）
       1. 多个设备都连接到路由器上，无线 WIFI or 网线连接，路由器为每一个设备分配 IP 地址，路由器本身也有一个 IP 地址，多个设备通过路由器连接在一起形成一个网络，局域网，局域网 IP，私网 IP，局域网设备之间可以相互通信；多个家庭可能情况相同，之间存在 IP 复用
       2. 接入互联网才能和外网 IP 通信，接入后路由器会有一个新的 IP，称为公网 IP or 广域网 IP，共享 IP 指的是共享公网 IP
2.  作用：寻找标识网络设备，进行网络设备通信
3.  分类
    1. 局域网 IP（私网 IP）
       1. 三大范围
    2. 127.0.0.1 本地回环 IP 地址
       1. 127.0.0.1~127.255.255.254 之间的 IP 地址都是本地回环 IP 地址，都是指向本机的
    3. 广域网 IP（公网 IP）
    4. 参考：https://zhuanlan.zhihu.com/p/193729352

### 端口

1. 来源：端口=应用程序的数字标识，一台计算机有 65536 个端口（0~65535）；一个应用程序可以使用一个或多个端口
2. 作用：实现不同主机应用程序之间的通信
3. http 默认端口是 80，https 默认端口是 443
4. HTTP 服务开发常用端口：3000，8080，8090，9000 等
5. 端口被占用，关闭那个服务，资源监视器-网络-侦听端口-PID|端口，任务管理器-PID-关闭

## 创建 HTTP 服务，nodejs 中的 http 模块

1. 步骤
   1. 导入 http 模块
   2. 创建服务对象
   3. 监听端口，启动服务
2. 相关理解
   1. 导入返回值 http 本身是一个对象，身上有 createServer 方法，用于创建服务对象，方法参数是一个回调函数，回调函数有两个参数 request 和 response，分别取到请求报文的封装对象，响应报文的封装对象
   2. 回调函数本身在服务对象接收到 http 请求的时候，其中进行响应操作，如`response.end("hello http server")`来设置响应头！这个会在访问本机指定端口的时候显示在页面上（但是命令行不能退出！）ctrl+c 停止服务
      1. 更新响应体内容，需要重启服务
   3. 监听端口的时候，服务对象调用 listen 方法，第一个参数是指定端口号，第二个参数是回调函数，在服务启动成功后执行
   4. 浏览器发送 http 请求报文
3. 注意
   1. 响应体中文乱码，在前面设置响应头`response.setHeader('content-type','text/html;charset=utf-8');`

## 浏览器查看报文（chrome 浏览器使用）

1. post 请求在 network-点击某个 Name 请求-pyload 就会有请求体内容
2. 同理可以查看查询字符串内容（params&query）
3. 响应信息 Headers-Response headers 里面是响应头-点击 Raw 会有响应行-点击 Response 会有响应体

## 获取 HTTP 请求报文

1. 通过 request 对象获取，以下操作都是在`http.createServer`方法的回调函数中使用
2. `request.method`——请求类型
3. `request.httpVersion`——http 协议的版本号
4. `request.url`——只包含 url 中的路径和查询字符串
5. `request.headers`——http 请求头，获取到的键都是全小写，有-都会用引号括起来
   1. 可以通过点获取某个键的值
6. `request('url')`
7. 获取请求体内容步骤
   1. request 绑定 data 事件，将 chunk 一个个存入一个变量中
      - chunk 本身是 buffer 数据流，进行拼接操作会自动转换成字符串 toString
   2. request 绑定 end 事件，将变量读出来
   3. end 事件中，response 通过.end()响应
8. 获取 URL 路径和查询字符串
9. 练习不同路径返回不同结果：学会用解构的方式获取对象的属性，比如 new URL 对象的属性，request 对象的属性等

## 设置 HTTP 响应报文

1. 响应行
   1. `response.statusCode`——设置响应状态码
   2. `resoinse.statusMessage`——设置响应状态描述
2. 响应头
   1. `response.setHeader`——键值对作为两个参数传入，值可以是数组，表示多个同名响应头
   2. 多次调用，设置多个响应头的键值对
3. 响应体
   1. `response.write()`——可以多次调用
   2. `response.end()`——单独使用；有且只有一个
4. 练习搭建 HTTP 服务响应表格 1，有三件套内容要求，css 和 html 集成在 html 文件中
   1. 三件套相关
      1. 给 table 添加边框，是在 table 标签设置属性 border，属性值为边框的宽度，不用单位
      2. table 一般要将 table 和 td 的边框合并，给这两个元素设置样式`border-collapse:collapse`
   2. nodejs 相关
      1. fs 模块将 html 文件内容读取，放到`response.end()`里面，end 函数的参数可以是 buffer 也可以是字符串
      2. 在 html 里面修改，只需要重新发起请求即可，不需要重新启动服务，就会重新读取更新
      3. 问题：如果 html 文件中引入了外部资源，无论是什么资源，返回的响应体都是 html 文件内容！
         1. 引入外部 css，link 标签，`<link rel="stylesheet" href="fa.css">`
         2. 引入外部 js，script 标签，`<script src='./fa.js'>`
      4. 解决：（因为网络资源的加载存在一定的顺序）需要针对不同的响应路径，设置不同的响应结果，能够正常显示，但是太复杂
         1. **问题：`response.setHeader("content-type", "text/html;charset=utf-8")`如果设置了响应头为这样，css 和 js 都不会生效！为什么！**

## 网页资源加载基本过程

1. 网页发送几次请求？
2. https://juejin.cn/post/6860406760834859015?searchId=20230809155102203658D968E0685011BD

## 静态资源和动态资源

## 搭建静态资源服务

1. 拼接文件路径，简化操作
   1. 将查询路径拼接作为读取文件路径
2. 读取文件
   1. Sync ：是同步，只要传入路径即可
   2. 异步：需要传入两个参数，第一个参数是路径，第二个参数是回调函数
      1. 回调函数的第一个参数是 err，第二个参数是成功时获取到的数据

## 静态资源目录&网站根目录

1. 变量记录网站根目录
2. 读取 html 不应该以 utf-8 的格式，要输出中文，就在特定的地方设置响应头

## 网页中的 URL-绝对路径

1. 绝对路径可以省略的情况
   1. 省略协议名（以//开头）——重定向
   2. 省略协议名和主机名（以/开头）——拼接
      1. 用的多，因为可能改域名/IP
2. 重定向？301！

## 网页中的 URL-绝对路径

1. 大致三种形式
   1. ./开头
   2. ../开头
   3. 文件夹名开头
2. 要计算，都是基于当前文件夹
3. 项目阶段用的比较少，推荐使用绝对路径的省略协议和主机名的版本

## 网页 URL 使用场景

1. 包括但不限于
   1. a link 标签的 href
   2. script img video audio 标签的 src
   3. form 标签的 action
   4. ajax 请求的 URL

## 设置 MIME 类型

1. 相应资源的 mime 类型，多用途的互联网邮件扩展|媒体类型|资源类型
2. 格式为`主类型/子类型`
3. 常见 mime 类型
   1. html:`text/html`，css、javascript 同理
   2. png:`image/png`，jpg、gif 同理
   3. mp4:`video/mp4`
   4. mp3:`audio/mpeg`
   5. json:`application/json`
4. 设置时间：在读取文件之后设置响应头
5. 不能写死，要根据读取的文件类型（后缀）设置
   1. path 模块，path 对象的 extname，获取文件后缀名，**是一个函数，要将文件路劲作为参数传入！**
   2. 未知类型，选择`application/octet-stream`类型，浏览器对这种类型的响应，会对响应体内容进行独立存储，也就是下载
6. 加不加，效果看起来一样
7. **如何重定向？直接访问 127.0.0.1:9000 出现没找到，不会直接到 fa.html**

## 解决乱码问题

1. 字符串拼接，用分号隔开
2. `response.setHeader('content-type',type+';charset=uft8;')`
3. meta 标签，导致 html 文件不会出现乱码；相比较于 meta 标签的字符集，响应头的优先级更高
4. 其实只要给 html 文件设置 utf-8 字符集，也就是需要判断一下后缀类型，进而设置响应头

## 完善错误处理

1. 在 if(err)里面 写 switch-case，不同的错误，进行不同的处理
2. 不要忘记必要时刻的 return
3. err.Code 参考：https://nodejs.cn/dist/latest-v18.x/docs/api/errors.html
4. node:events:492 throw er; // Unhandled 'error' event 这个报错是！端口号被占用！

## get 和 post 场景与区别【已总结】

1. 场景
   1. get 请求：script 标签引入 js，video audio 标签引入多媒体，img 标签引入图片，form 标签 method 为 get（不区分大小写），ajax 中 get 请求
   2. post 请求：from 标签 method 为 post，ajax 中 post 请求
2. 区别：https://juejin.cn/post/7264527436870680610?searchId=20230809190419F90D7AACE1AD05742911
   1. 作用。
   2. 参数位置。get 在 URL 查询字符串中，post 在请求体中。
   3. 安全性。post 更安全。
   4. 请求大小限制。get 有限制 2K。
   5. 浏览器回退表现|请求地址缓存。post 有害，会再次提交请求；get 幂等操作，回退从缓存中获取；可以通过响应头设置是否缓存`Cache-Control: no-store`以及有效期限`Expires`。
   6. 能否被书签保存。get 可以 post 不可以。
   7. 编码方式。get 进行 URL 编码，post 进行`application/x-www-form-urlencoded`等编码。
   8. 参数数据类型。get 只能 ascii 字符。post 无限制。
   9. 请求过程。
3. **POST 请求的过程：**
   1. 浏览器请求 tcp 连接（第一次握手）
   2. 服务器答应进行 tcp 连接（第二次握手）
   3. 浏览器确认，并发送 post 请求头（第三次握手，这个报文比较小，所以 http 会在此时进行第一次数据发送）
   4. 服务器返回 100 continue 响应
   5. 浏览器开始发送数据
   6. 服务器返回 200 ok 响应
4. **get 请求过程**
   1. 浏览器请求 tcp 连接（第一次握手）
   2. 服务器答应进行 tcp 连接（第二次握手）
   3. 浏览器确认，并发送 get 请求头和数据（第三次握手，这个报文比较小，所以 http 会在此时进行第一次数据发送）
   4. 服务器返回 200 OK 响应

# 模块化

1. 一个文件对应一个模块
2. 内部数据私有，但是可以暴露供其他模块使用
3. 好处：防止命名冲突，高复用性，高维护性
4. 暴露数据
   1. `module.exports = xx` 这个 xx 可以是函数名，可以是对象字面量，可以是变量名，可以暴露任意数据；`module.exports`是一个属性
   2. `exports`是一个变量，写成`exports.xx = xx`；不能写`exports = xx`的形式；**这样相当于给空对象里面加属性！**
   3. 两者关系`exports = module.exports = {}`，**注意这里的赋值顺序**

## nodejs 导入模块

1. 导入数据
   1. `require('路径')`返回的是`module.exports`的值
   2. 建议使用相对路径，不受工作目录影响；fs 模块建议使用绝对路径，受工作目录影响。
2. js 文件和 json 文件导入，可以省略后缀
   1. js 文件和 json 文件名相同，js 优先
3. json 文件不用暴露
4. 其他类型文件导入（或者没有后缀），按照 js 规则导入

## nodejs 导入文件夹

1.
