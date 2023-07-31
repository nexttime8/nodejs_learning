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
2.
