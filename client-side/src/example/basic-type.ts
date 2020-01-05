// 布尔类型
// let bool: boolean = false
let bool: boolean
bool = true
// bool = 123

// 数值类型
let num: number = 123
// num = "abc"
num = 0b1111011 // 二进制
num = 0o173 // 八进制
num = 0x7b // 十六进制

// 字符串类型
let str: string
str = 'abc'
str = `数值是${num}`
console.log(str);

// 数组
// [1,2,3]
// 写法1
let arr1: number[]
arr1 = [1,2]
// 写法2
let arr2: Array<number>
let arr3: (string | number)[]
arr3 = [1,'dd']

// 元组类型(指定长度类型)
let tuple: [string, number, boolean]
tuple = ['a', 12, true]

// 枚举类型
enum Roles {
    SUPER_ADMIN,
    ADMIN = 4,
    USER
}
console.log(Roles.SUPER_ADMIN); // 1
console.log(Roles.USER); // 5
console.log(Roles[0]); // SUPER_ADMIN


// any类型
let value: any
value = 'sss'
value = []
value = 123
const arr4: any[] = [1, 's']

// void类型
const consoleText = (text: string): void => {
    console.log(text);
}
let v: void
v = undefined
v = null // strictNullChecks
consoleText('aaa')

// null undefined
let u: undefined
u = undefined
// u = 1
let n: null
n = null

num = undefined // strictNullChecks
num = null // strictNullChecks


// never类型
const errorFunc = (message: string): never => {
    throw new Error(message) // 报错
}
const infiniteFunc = () => {
    while(true) {} // 不会有返回值
}
// let neverVar = (() => {
//     while(true){}
// })()
// num = neverVar


// object
let obj = {
    name: 'json'
}
let obj2 = obj
obj2.name = 'LL'
console.log(obj)
function getObject(obj: object): void {
    console.log(obj);
}
// getObject('s')
getObject(obj2)


// 类型断言
const getLength = (target: string | number): number => {
    if ((<string>target).length || (target as string).length === 0) {
        return (<string>target).length
    } else {
        return target.toString().length
    }
}
getLength(123)
getLength('asd')
// jsx 中只能用as
