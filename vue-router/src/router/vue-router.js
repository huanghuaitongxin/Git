let Vue;
class HistoryRoute{
    constructor(){
        this.current = null
    }
}
class VueRouter{
    constructor(options){
        // console.log(options)
        this.mode = options.mode || "hash" 
        this.routes = options.routes || [] 
        this.routesMap = this.createMap(this.routes)  
        this.history = new HistoryRoute()
        this.init() //用来初始化
        // console.log(this.routesMap)   
    }
    init(){
        // console.log("aaaaa")
        if(this.mode==="hash"){
            location.hash ? "":location.hash="/"
            // console.log(location.hash)  // #/
            window.addEventListener("load",()=>{
                this.history.current = location.hash.slice(1)
                // console.log("load-->"+this.history.current)
            })
            window.addEventListener("hashchange",()=>{
                this.history.current = location.hash.slice(1)
                // console.log("loadchange--->"+this.history.current)
            })
        }else{
            // console.log(location.pathname)
            location.pathname ? "" : location.pathname ="/"

            window.addEventListener("load",()=>{
                this.history.current = location.pathname
                // console.log("load-->"+this.history.current)
            })
            window.addEventListener("popstate",()=>{
                this.history.current = location.pathname
                // console.log("popstate--->"+this.history.current)
            })
        }
    }
    push(){}
    back(){}
    go(){}
    //createMap 可以把数组结构转化成对象结构
    createMap(routes){
       return routes.reduce((memo,current)=>{
            memo[current.path]= current.component
            return memo
        },{})
    }
}
VueRouter.install=(_Vue)=>{
    Vue=_Vue
    //混入  内部会把这个对象给每一个组件的属性混合在一起
    Vue.mixin({
        beforeCreate(){
            //判断根组件是谁
            if(this.$options && this.$options.router){
                //找到根组件 main.js
                this._router=this.$options.router
                this._root = this
                Vue.util.defineReactive(this,"xxx",this._router,history)
            }else{
                //让所有根组件 都有这个_router属性 指向当前的router
                this._root = this.$parent._root
            }
            Object.defineProperty(this,'$router',{
                get(){
                    return this._root._router
                }
            })
            Object.defineProperty(this,'$route',{
                get(){
                    // console.log(this._root._router.history.current)
                    return{
                        current:this._root._router.history.current
                    }
                }
            })
        }
    })
    Vue.component("router-link",{
        props:{
            to:String
        },
        render(h){
            let mode = this._self._root._router.mode;
            return <a href={mode==='hash'?`#${this.to}`:this.to}>{this.$slots.default}</a>
        }
    })
    Vue.component("router-view",{
        render(h){
            let current = this._self._root._router.history.current
            let routesMap = this._self._root._router.routesMap;
            return h(routesMap[current])
        }
    })
}

export default VueRouter