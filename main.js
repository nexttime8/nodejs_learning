/* nodejs API */
// console.log("hello nodejs!")

/* buffer */
// #region
/* const { Buffer } = require("buffer")
let buf_1 = Buffer.alloc(10)
console.log(buf_1)

let buf_2 = Buffer.allocUnsafe(10)
console.log(buf_2)

let buf_3 = Buffer.from("hello")
console.log(buf_3)
console.log(buf_3[0]) // 10进制数字
console.log(buf_3[0].toString()) // 10进制字符串
console.log(buf_3[0].toString(2)) // 2进制字符串

buf_3[0] = 93
console.log(buf_3) */
// #endregion

/* 写入文件 */
// const fs = require("fs")
// #region
/* 异步写入文件 */
/* fs.writeFile(
  "./app.txt", // 自动创建文件
  "今天是2023年7月31日，我学完vue了，目标半个月做出博客基本功能",
  (err) => {
    // 传入err或者null
    if (err) {
      console.log(err) // 或者throw err
      return
    }
    console.log("写入成功")
  }
) */

/* 同步追加文件 */
/* try {
  fs.appendFileSync(
    "./app.txt",
    "\n4天学完nodejs；一定要每天跟上字节跳动的课程，最好是把react学完"
  )
  console.log("追加成功")
} catch (err) {
  console.log(err)
} */

/* 流式写入文件 */
/* let ws = fs.createWriteStream("./stream.txt")
ws.write("半亩方塘一鉴开\r\n")
ws.write("天光云影共徘徊\r\n")
ws.write("问渠那得清如许\r\n")
ws.write("为有源头活水来\r\n")
ws.end()
ws.close() */
// #endregion

/* 读取文件 */
// #region
/* 异步读取 */
/* fs.readFile("./app.txt", (err, data) => {
  if (err) throw err
  console.log("异步读取的数据", data.toString())
}) */
/* 同步读取 */
/* let sync_data = fs.readFileSync("./app.txt", "utf-8")
console.log("同步读取的数据", sync_data) */
/* 流式读取 */
/* let rs = fs.createReadStream("./stream.txt")
rs.on("data", (data) => {
  console.log("流式读取的数据", data.toString())
  console.log(data.length)
})
rs.on("end", () => {
  console.log("读取完毕")
}) */
// #endregion
/* 文件读取顺序：同步-》流式-》异步 */

/* 文件移动和重命名 */
// #region
/* fs.rename("./app.txt", "./todo.txt", (err) => {
  if (err) throw err
  console.log("文件名已修改")
}) */
// renameSync本质是重命名，从头到尾只有一个文件
// fs.renameSync("./todo.txt", "./todo_copy.txt")
// #endregion

/* 文件删除 */
/* 【复制文件】 */
/* let rs = fs.createReadStream("./todo_copy.txt")
let ws = fs.createWriteStream("./copy.txt")
rs.on("data", (data) => {
  ws.write(data)
})
rs.on("end", () => {
  console.log("文件复制完毕")
}) */
/* 删除文件 */
/* fs.unlink("./copy.txt", (err) => {
  if (err) throw err
  console.log("删除成功")
}) */

/* 路径问题 */
/* fs.writeFileSync("C:/test.txt", "没权限") //Error: EPERM: operation not permitted */

/* 批量重命名 */
// #region
/* 创建文件夹-原本就存在会throw Error: EEXIST: file already exists */
/* fs.mkdir(__dirname + "/code", (err, data) => {
  if (err) throw err
  console.log("code文件夹创建成功")
}) */

/* 创建多个文件 */
/* for (let i = 1; i <= 10; i++) {
  fs.writeFile(__dirname + `/code/${i}-随便${i}.js`, `随便写点${i}`, (err) => {
    if (err) throw err
    console.log(`${i}文件创建成功`)
  })
} */

/* 批量修改文件名-一步步输出实现 */
/* fs.readdir(__dirname + "/code", (err, data) => {
  if (err) throw err
  // console.log(data)
  data.forEach((item) => {
    // console.log(item)
    let [num, name] = item.split("-")
    // console.log(num, name)
    if (Number(num) < 10) {
      num = "0" + num
    }
    // console.log(num, name)
    fs.rename(
      __dirname + "/code/" + item,
      __dirname + "/code/" + num + "-" + name,
      (err) => {
        if (err) throw err
      }
    )
  })
}) */

/* 批量调整-删掉 02 文件，后面的文件名前移 */
/* fs.readdir(__dirname + "/code", (err, data) => {
  if (err) throw err
  data.forEach((item) => {
    let [num, name] = item.split("-")
    // console.log(num, name)
    if (Number(num) > 2 && Number(num) < 11) {
      num = "0" + (Number(num) - 1) // 后面加括号，进行数值运算
      console.log(num)
    }
    if (Number(num) >= 11) {
      num = Number(num) - 1 + "" // 这里是先进行数值运算，不需要括号
    }
    fs.renameSync(
      __dirname + "/code/" + item,
      __dirname + "/code/" + num + "-" + name
    )
  })
}) */

/* 删除文件夹 */
/* fs.rmdir(__dirname + "/code", { recursive: true }, (err) => {
  if (err) throw err
}) */
// #endregion

/* 创建http服务 */
/* 
// 1.0 导入http模块
const http = require("http")
// 2.0 创建服务对象
const server = http.createServer((request, response) => {
  response.setHeader("content-type", "text/html;charset=utf-8")
  response.end("你好 http server") // 设置响应体
})
// 3.0 监听端口，启动服务
server.listen(9000, () => {
  console.log("服务启动了")
}) // 本机的ip地址 127.0.0.1:9000
 */

/* 获取请求体内容 */
/* const http = require("http")
const server = http.createServer((request, response) => {
  let requestBody = ""
  request.on("data", (chunk) => {
    requestBody += chunk
  })
  request.on("end", () => {
    console.log(requestBody)
    response.setHeader("content-type", "text/html;charset=utf8;")
    response.end("请求发送成功，响应") // 这个是响应显示在页面上；即便是get请求，也会显示
  })
})
server.listen(9000, () => {
  console.log("服务启动")
}) */

/* 获取URL中路径和查询字符串——用nodejs中的url模块 */
/* // 1.导入模块
const http = require("http")
const url = require("url")
// 2.创建服务对象
const server = http.createServer((request, response) => {
  console.log(request.url) // /search?name=qiuhuimin&sex=women
  // request.url：URL中路径和查询字符串l;url.parse(a,b)如果b是true，将展示为对象形式
  let res = url.parse(request.url, true)
  // URL中路径
  let pathname = res.pathname
  // URL中查询字符串的键值，.name的name是真实键名
  let keyword = res.query.name
  response.end("url")
})
// 3.监听端口
server.listen("9000", () => {
  console.log("服务启动了")
}) */

/* 获取URL中路径和查询字符串——用URL对象 */
/* const http = require("http")

const server = http.createServer((request, response) => {
  // 是对象，
  // 参数两种写法，1：完整url传入，2：第一个参数是路径和查询字符串（这里可以写request.url），第二个参数是http协议、主机名和端口号（可以无端口号）
  let url = new URL(request.url, "http://127.0.0.1")
  // 有href origin porocal [username password ]port pathname search searchParams hash等键名，查询参数在searchParams里面，通过get方法传入键名获取特定的键值
  console.log(url.pathname, url.searchParams.get("name"))
  response.end("url new")
})

server.listen(9000, () => {
  console.log("服务启动了")
}) */

/* HTTP请求练习——不同路径返回不同结果 */
/* const http = require("http")
const server = http.createServer((request, response) => {
  // 要显示中文，utf8或者utf-8都没问题
  response.setHeader("content-type", "text/html;charset=utf8;")
  // const url = new URL(request.url, "http://127.0.0.1:9000")
  // if (request.method === "GET") {
  //   if (url.pathname === "/login") response.end("登陆页面")
  //   else if (url.pathname === "/reg") response.end("注册页面")
  //   else response.end("啥也不是")
  // }
  // 解构优化屎山：url.pathname和request.method
  const { method, url } = request
  const { pathname } = new URL(url, "http://127.0.0.1:9000")
  let END = "啥也不是"
  if (method === "GET") {
    if (pathname === "/login") END = "登陆页面"
    else if (pathname === "/reg") END = "注册页面"
  }
  response.end(END)
})
server.listen(9000, () => {
  console.log("服务启动")
}) */

/* HTTP响应练习——网页引入html文件资源（html文件没有外部文件引入的情况） */
/* const http = require("http")
const fs = require("fs")

const server = http.createServer((request, response) => {
  let html = fs.readFileSync(__dirname + "/fa.html")
  response.end(html)
})

server.listen(9000, () => {
  console.log("服务启动了！")
}) */

/* HTTP响应练习——网页引入外部文件资源 */
/* const http = require("http")
const fs = require("fs")
const server = http.createServer((request, response) => {
  // 为什么将请求头设置成中文的时候，css和js都不生效
  // response.setHeader("content-type", "text/html;charset=utf-8")
  const { pathname } = new URL(request.url, "http://127.0.0.1")
  console.log(pathname)
  if (pathname === "/") {
    response.end(fs.readFileSync(__dirname + "/fa.html"))
  } else if (pathname === "/fa.js") {
    response.end(fs.readFileSync(__dirname + "/fa.js"))
  } else if (pathname === "/fa.css") {
    response.end(fs.readFileSync(__dirname + "/fa.css"))
  } else {
    response.statusCode = 404
    response.end("<h1>404 not found</h1>")
  }
})
server.listen(9000, () => {
  console.log("服务启动啊")
}) */

/* HTTP响应练习——网页引入外部文件资源之拼接路径（便于新增） */
/* const http = require("http")
const fs = require("fs")
const server = http.createServer((request, response) => {
  // 为什么将请求头设置成中文的时候，css和js都不生效
  // response.setHeader("content-type", "text/html;charset=utf-8")
  const { pathname } = new URL(request.url, "http://127.0.0.1")
  console.log(pathname)
  fs.readFile(__dirname + pathname, (err, data) => {
    if (err) {
      response.statusCode = 404
      response.end("<h1>404 not found</h1>")
    } else {
      response.end(data)
    }
  })
})
server.listen(9000, () => {
  console.log("服务启动啊")
}) */

/* HTTP响应练习——使用网站根目录 */
/* const http = require("http")
const fs = require("fs")
const server = http.createServer((request, response) => {
  // 为什么将请求头设置成中文的时候，css和js都不生效
  // response.setHeader("content-type", "text/html;charset=utf-8")
  const { pathname } = new URL(request.url, "http://127.0.0.1")
  console.log(pathname)
  const root = __dirname + "/" // 当前根目录
  const filePath = root + pathname
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.setHeader("content-type", "text/html;charset=utf8")
      response.statusCode = 500
      response.end("文件读取失败")
      return
    }
    response.end(data)
  })
})
server.listen(9000, () => {
  console.log("服务启动啊")
}) */

/* HTTP响应练习——MIME类型设置（不影响，但有意义） */
/* const http = require("http")
const path = require("path")
const fs = require("fs")

const typeList = {
  js: "text/javascript",
  css: "text/css",
  html: "text/html",
  png: "text/png",
  jpg: "text/jpg",
  json: "application/json",
  gif: "text/gif",
}

const server = http.createServer((request, response) => {
  const { pathname } = new URL(request.url, "http://127.0.0.1:9000")
  let filePath = path.resolve(__dirname + pathname)
  // 如何重定向？直接访问127.0.0.1:9000出现没找到，不会直接到fa.html
  fs.readFile(filePath, (err, data) => {
    // 出错和后缀类型不存在与数组中，是两种情形！
    if (err) {
      response.setHeader("content-type", "text/html;charset=utf8")
      response.statusCode = 404
      response.end("没找到")
      return
    }
    let extname = path.extname(filePath).slice(1)
    let type = typeList[extname]
    if (type) {
      response.setHeader("content-type", type)
    } else {
      response.setHeader("content-type", "application/octet-stream")
    }
    response.end(data)
  })
})
server.listen(9000, () => {
  console.log("服务器启动了")
}) */

/* HTTP响应练习——完善错误处理 */
/* const http = require("http")
const path = require("path")
const fs = require("fs")

const typeList = {
  js: "text/javascript",
  css: "text/css",
  html: "text/html",
  png: "text/png",
  jpg: "text/jpg",
  json: "application/json",
  gif: "text/gif",
}

const server = http.createServer((request, response) => {
  if (request.method !== "GET") {
    response.statusCode = 405
    response.end("405 method not allowed")
    return
  }
  const { pathname } = new URL(request.url, "http://127.0.0.1:9000")
  let filePath = path.resolve(__dirname + pathname)
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err.code)
      response.setHeader("content-type", "text/html;charset=utf8")
      // response.statusCode = 404
      // response.end("没找到")
      switch (err.code) {
        case "ENOENT":
          response.statusCode = 404
          response.end("404 没找到")
        case "EPERM":
          response.statusCode = 403
          response.end("403 没有权限")
        case "EISDIR":
          response.statusCode = 404
          response.end("404 给定的是一个文件夹")
      }
      console.log("over")
      return
    }
    let extname = path.extname(filePath).slice(1)
    let type = typeList[extname]
    if (type) {
      response.setHeader("content-type", type)
    } else {
      response.setHeader("content-type", "application/octet-stream")
    }
    response.end(data)
  })
})
server.listen(9000, () => {
  console.log("服务器启动了")
}) */
