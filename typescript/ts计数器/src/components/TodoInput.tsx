import * as React from "react"
interface Props{
    number?:number
}
interface State{
    value:string
}
export default class TodoInput extends React.Component<Props,State>{
    public static defaultProps:Props = {
        number:0
    }
    public state:State = {
        value:""
    }
    private handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            value:event.target.value
        })
    }
    public render(){
        return(
            <input value={this.state.value} onChange={(event)=>this.handleChange(event)}/>
        )
    }
}