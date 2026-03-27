import { ListItem } from "../components/ListItem/ListItem"
import { ToDo } from "../models/todo-item"

interface componentProps {
    todos: ToDo[]
}

export const ViewList = ({ todos }: componentProps) => {
    return(
        <div className="container">
            {
                todos.map((todo: ToDo, idx: number) => {
                    return (<ListItem todo={todo} key={idx}/>)
                })
            }
        </div>
    )
}