let bool: boolean = false

let num: number = 123
num = 0b11001
num = 0o177
num = 0x7ba

let str: string
str = 'abc'
str = `number ${num}`


let arr1: number[] = [1, 2, 3, 4, 5]
let arr2: Array<number> = [1, 2, 3, 4]
let arr3: (string | number)[] = [1, 'num']

//元組
let tuple1: [string, number] = ['1', 2]

//枚舉
enum Roles {
    SUPER_ADMIN,
    ADMIN,
    USER,
}

console.log(Roles.SUPER_ADMIN) // 0
console.log(Roles[0]) // SUPER_ADMIN

let i: any[] = [1, 2, false]

//void 類型
const consoleText = (text: string): void => {
    console.log(text)
}
let v: void
v = consoleText("test")

//null undefined

//never 類型
//任何類型的子類型
const errorFunc = (msg: string): never => {
    throw new Error(msg)
}

const initFunc = (): never => {
    while (true) { }
}

let neverTest = (() => {
    while (true) { }
})()


// 類型斷言
const getLength = (target: string | number) => {
    if ((<string>target).length || (target as string).length === 0) {
        //jsx時不可以寫尖括號
        return (<string>target).length
    } else {
        return target.toString().length
    }
}

/*
 * Symbol
 */

 //獨一無二的值

const s1 = Symbol('lison')
const s2 = Symbol(123)
//不能操作 s1 + s2
console.log(s2.toString())
console.log(Boolean(s2)) // true
console.log(!s2)//false

const s5 = Symbol('pop')
let sttr= "test"
const a1InfoObj = {
    name: 'lison',
    [`my${sttr}`]:"",
    [s5]:'test', //獨一無二不可修改只能如下修改
}
a1InfoObj[s5]='haha'
//for in 的時候遍歷不出來
//Object.keys() 也獲取不到Symbol
//Object.getOwnPropertyNames() 獲取不到Symbol
//JSON.stringify(a1InfoObj) 獲取不到Symbol
//只有
console.log(Object.getOwnPropertySymbols(a1InfoObj))
console.log(Reflect.ownKeys(a1InfoObj)) //可以獲取所有包括symbol

//可以用Symbol 作為對象私有屬性

//Symbol.for()
//Symbol.keyFor()

const s6 = Symbol('zhizhang')
const s7 = Symbol('zhizhang')

const s8 = Symbol.for('zhizhang')
//在全局範圍搜索是否有 創建 zhizhang 字符串的 Symbol
const s9 = Symbol.for('zhizhang')

//s8 === s9 true

Symbol.keyFor(s8) // 傳入 Symbol.for 在全局註冊的標識,如果是 Symbol註冊 傳入的將會undefined

/**
 * 11 個內置的 Symbol值
 * 
 * 
 */

//Symbol.hasInstance 
//當你給一個對象 設置 Symbol.hasInstance 屬性名的時候
//
const objSy1 = {
    [Symbol.hasInstance] (otherObj:any) {
        console.log(otherObj)
    }
}