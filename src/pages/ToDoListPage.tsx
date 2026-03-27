import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";
import { Bounce, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../store'
import { createAction, updateAction, deleteAction } from '../feature/todolist';

export const ToDoListPage = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const dispatch = useDispatch()

    const createNewToDo = (text: string) => {
        dispatch(createAction(text))
    }

    const updateToDo = (toDoitem: ToDo) => {
        dispatch(updateAction(toDoitem))
    }
    
    const deleteToDo = (toDoitem: ToDo) => {
        dispatch(deleteAction(toDoitem))
    }

    return (
        <>
            <Form createNewToDo={createNewToDo}/>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
                />
            <ToDoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
        </>
    );
};