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
//Object.keys() 也獲取不到
//Object.getOwnPropertyNames() 獲取不到
