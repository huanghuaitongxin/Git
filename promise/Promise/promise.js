const PENDING = "PENDING"
const RESOLVED = "RESOLVED"
const REJECTED = "REJECTED"

function resolvePromise(promise2,x,resolve,reject){
    if(promise === x){
        return reject(new TypeError('my Chaining cycle detected for promise #<Promise></Promise>'))
    }
    if(typeof x==="object" && x!==null || typeof x==="function"){
        try{
            let then = x.then
            if(typeof then === "function"){
                then.call(x,y=>{
                    resolve(y)
                },r=>{
                    reject(r)
                })
            }else{
                resolve(x)
            }
        }catch(e){
            reject(e)
        }
    }else{
        //x就是一个普通值
        resolve(x)
    }
}
class Promise {
    constructor(executor) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [] //存放成功态时的回调函数
        this.onRejectedCallbacks = [] //存失败的回调函数
        let resolve = (value) => {
            if (this.status == PENDING) {
                this.value = value;
                this.status = RESOLVED;
                this.onResolvedCallbacks.forEach(fn=>fn())
            }
        }
        let reject = (reason)=>{
            if(this.status == PENDING){
                this.reason = reason
                this.status = REJECTED
                this.onRejectedCallbacks.forEach(fn=>fn())
            }
        }
        try{
            executor(resolve,reject)
        }catch(e){
            reject(e)
        }
    }
    then(onfulfilled,onrejected){
        let promise2 = new Promise((resolve,reject)=>{
            if (this.status === RESOLVED) {
                setTimeout(() => {
                    try {
                        // x可能是promise 也可能是普通值
                        let x = onfulfilled(this.value);
                        // 假如x是promise(有自己的状态)，需要让pormise2拥有x同样的状态
                        resolvePromise(promise2, x, resolve, reject); // 处理promise2和x的关系
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }
            if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onrejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }
            // 异步（执行器中有异步代码）
            if (this.status === PENDING) {
                // 已经订阅好了
                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onfulfilled(this.value)
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                });
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onrejected(this.reason)
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                });
            }
        })
        return promise2;
    }
}

module.exports = Promise