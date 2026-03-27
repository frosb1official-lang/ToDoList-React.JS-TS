import { ToDo } from '../../../models/todo-item'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import './ToDoListItem.scss'

export const ToDoListItem = (props: { toDoItem: ToDo , updateToDo: Function, deleteToDo: Function }) => {

    return (
        <li className="todo-list-item__wrapper">
            <span>{props.toDoItem.text}</span>
            <div className="todo-list-item__buttons">
                <button 
                    className="btn-trash"
                    onClick={() => {
                        props.deleteToDo(props.toDoItem); 
                        toast.success(`${props.toDoItem.text} deleted!`, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                            });
                        }}
                    ></button>
                <button 
                    className={props.toDoItem.isDone ? 'btn-check' : 'btn-uncheck'}
                    onClick={() => {props.updateToDo(props.toDoItem);
                        toast.success(`${props.toDoItem.text} update!`, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                            });
                    }}
                    ></button>
            </div>
        </li>
    )
}