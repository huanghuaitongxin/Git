//同步的actioncreator
export function increment(){
    return{
        type:"INCREMENT"
    }
}
export function decrement(){
    return{
        type:"DECREMENT"
    }
}

export function incrementAsync(){
    return function(dispatch,getState){
        //在这个函数进行异步操作
        // setTimeout(()=>{
        //     dispatch(increment())
        // },3000)
        const {counter} = getState()
        if(counter%2){
            dispatch(increment())
        }
    }
}