import React from "react";
import{connect}from 'react-redux';
import { Add_Reminder ,Remove_Reminder,Clear_Reminder} from "./actions";
import { BsFillBasketFill } from "react-icons/bs";
import moment from "moment";
import logo from './reminder.jpg'
class App extends React.Component{
   state={
       text:'',
       date:new Date()
   }
    Render_Reminders=()=>{
        const {reminders}=this.props;
        return(
            <ul className='list-group'>
             {reminders.map(reminder=>{
                 return(
                 <li  key={reminder.id}className='list-group'>
<div>{reminder.text}</div>
<div>{moment(new Date(reminder.date)).fromNow()}</div>
<div className='delete-icon' onClick={()=>this.props.Remove_Reminder(reminder.id)}>< BsFillBasketFill />
    </div>
                 </li>

                 )

} )}
            </ul>
        )
    }
    render(){
        return(
            <div className='App'>
                <img  className='image'src={logo} alt='' />
                <div>
                <h1 className='title'>Whate do you think ?</h1>
                </div>
                <input  className='form-control'
                type='text'
                value={this.state.text}
                 placeholder='whate do you think  ?'
                 onChange={(e)=>this.setState({text:e.target.value})}
                  />
                <input  
                className='form-control'
                type='dateTime-local'
                value={this.state.date}
                onChange={(e)=>this.setState({date:e.target.value})}
                 />
                 <div className="d-grid gap-2">
                <button  onClick={()=>(this.props.Add_Reminder
                (this.state.text ,this.state.date) ,this.setState({text:'', date:''}))}
                className='btn btn-primary '>
                    Add Reminder
                    </button>
                    {this.Render_Reminders()}
                    <button onClick={()=>this.props.Clear_Reminder()} className='btn btn-danger '
                    >
                        Clear Reminders</button>
               
            </div>
            </div>
        )
    }
}
//function MapDispatchToProps(dispatch){
  //  return{
  //  Add_Reminder: ()=>dispatch(Add_Reminder())}}
  //function MapStateToProps(state){
  //    return{
   //       reminders:state
    //  }

  //}

export default connect(state=>{
    return{
        reminders:state
    }
},{Add_Reminder,Remove_Reminder,Clear_Reminder}) (App);
