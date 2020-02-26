import db from '../firebaseConfig/firebase';
export const AddTask = 'ADD_TASK';
export const DeleteTask = 'DELETE_TASK';
export const EditTask = 'EDIT_TASK';
export const GetTask = 'GET_TASKS';


export function getData(){
return (dispatch)=>{
    db.collection('todos').get()

    .then((querySnapshot)=>{
        let todos = [];
        querySnapshot.forEach((doc)=>{
            let task = {
                ...doc.data(),
                isImp: false,
                isDone: false,
                isExpanded:false
            }
            todos.push(task);
        });
        dispatch({
            type: GetTask,
            payload: todos,
        });
    })
    .catch((err)=>{
        alert('Your Data is updated successfuly');
        
    })
}




}





export function addTask(data) {
    return dispatch => {
        db.collection('todos').add(data)
        .then( () => {
            dispatch({
                type: AddTask,
                data
            })
        })
        .catch( (err) => {
            alert(err);
        });
    }
}

export function deleteTask(id) {
    return {
        type: DeleteTask,
        data: id
    }
}

export function editTask(task) {
    return {
        type: EditTask,
        data: task
    }
}