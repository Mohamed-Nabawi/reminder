import{ADD_REMINDER,REMOVE_REMINDER,CLEAR_REMINDER}from '../types'
export const Add_Reminder=(text,date)=>{
    const action={
        type:ADD_REMINDER,
        text,
        date
    }
    console.log('add',action)
    return action

}
export const Remove_Reminder=(id)=>{
  const  action={
        type:REMOVE_REMINDER,
        id
    }
    console.log('remove',action)
    return action
}
export const Clear_Reminder=()=>{
    const action={
        type:CLEAR_REMINDER
    }
    console.log('clear',action)
    return action
}