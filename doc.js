
// Node概览


/**
 * npm
 */

init/install/uninstall/list/update/version
$ npm install -g cnpm --registry=https://registry.npm.taobao.org  (10min) 
npm install/npm install --save(-S)/npm install --save-dev(-D)

/**
 * file
 */
// 
open(p,(r, r+, w, w+, a, a+),cb)
// 读取文件
- readFile(path,cb),readFileSync()
// 写入文件
- writeFile(path,data,cb),writeFileSync()
// 判断文件夹是否存在
- exists(path, callback),existsSync()
// 创建文件夹
- mkdir()
// 删除文件夹
- rmdir()
// 删除文件
- unlink()
// 读取文件夹内所有文件
- readdir(),readdirSync()
// 判断文件状态（是文件还是文件夹）
- stat()
// 监听文件变化
- watchfile(),unwatchfile()
// 创建读取文件流
- createReadStream()
// 创建写入文件流
- createWriteStream()

/**
 * path
 */
// 路径格式化
normalize(path)    
// 拼接
path.join()
// 解析
path.resolve()
// 文件扩展名
path.extname()
// 判断参数 path 是否是绝对路径。
path.isAbsolute(path)
// 用于将绝对路径转为相对路径，返回从 from 到 to 的相对路径（基于当前工作目录
path.relative(from, to)
// 返回路径中代表文件夹的部分
path.dirname(p)
// 返回路径中的最后一部分
path.basename(p)
// 返回路径字符串的对象。
path.parse(pathString)
// 从对象中返回路径字符串，和 path.parse 相反。
path.format({root,base,dir,name,ext})

/**
 * http
 */
// url

// querystring








