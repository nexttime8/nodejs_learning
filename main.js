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
const fs = require("fs")
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
const http = require("http")
const server = http.createServer((request, response) => {
  response.setHeader("content-type", "text/html;charset=utf-8")
  response.end("你好 http server") // 设置响应体
})
// 3.0 监听端口，启动服务
server.listen(9000, () => {
  console.log("服务启动了")
})
// 本机的ip地址 127.0.0.1:9000
