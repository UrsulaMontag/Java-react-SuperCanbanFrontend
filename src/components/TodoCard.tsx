import {Todo} from "../models/Todo.ts";

type TodoCardProps = {
    todo: Todo
}

export default function TodoCard(props: Readonly<TodoCardProps>) {
    return (
        <article className="todo-card">
            <p className="todo-description">{props.todo.description}</p>
            <div className="todo-action-container">
                <button className="button-card__normal">Details</button>
                <button className="button-card__normal">Edit</button>
                {props.todo.status < 2 ? <button className="button-card__advance">Advance</button>
                    : <button className="button-card__delete">Delete</button>
                }
            </div>

        </article>
    )
}