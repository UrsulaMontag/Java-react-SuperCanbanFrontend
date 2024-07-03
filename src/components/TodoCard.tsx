import {Todo} from "../models/Todo.ts";
import {Link} from "react-router-dom";

type TodoCardProps = {
    todo: Todo
}

export default function TodoCard(props: Readonly<TodoCardProps>) {
    return (
        <article className="todo-card">
            <p className="todo-description">{props.todo.description}</p>
            <div className="todo-action-container">
                <Link to={`/details/${props.todo.id}`} className="link-card">Details</Link>
                <Link to={`/edit/${props.todo.id}`} className="link-card">Edit</Link>
                {props.todo.status !== "DONE"
                    ? <button className="button-card__advance">Advance</button>
                    : <button className="button-card__delete">Delete</button>
                }
            </div>

        </article>
    )
}