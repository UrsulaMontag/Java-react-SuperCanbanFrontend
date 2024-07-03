import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import Home from "./routes/Home.tsx";
import TodoGallery from "./routes/TodoGallery.tsx";
import {useEffect, useState} from "react";
import {Todo} from "./models/Todo.ts";
import axios from "axios";
import TodoDetailCard from "./routes/TodoDetailCard.tsx";
import EditTodo from "./routes/EditTodo.tsx";

function App() {
    const [data, setData] = useState<Todo[]>([]);

    const fetchTodos = () => {
        axios.get<Todo[]>("/api/todo")
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.error('Error fetching todos', error))
    };
    const editTodo = (todo: Todo) => {
        axios.put<Todo>("/api/todo/" + todo.id, {...todo})
            .then(response => {
                setData([...data, response.data]);
            })
    }


    useEffect(() => {
        fetchTodos()
    }, []);


    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout/>,
            children: [
                {
                    path: '/',
                    element: <Home/>,
                },
                {
                    path: '/board/todo',
                    element: <TodoGallery todos={data} status="OPEN"/>
                }, {
                    path: '/board/doing',
                    element: <TodoGallery todos={data} status="IN_PROGRESS"/>
                }, {
                    path: '/board/done',
                    element: <TodoGallery todos={data} status="DONE"/>
                }, {
                    path: '/details/:id',
                    element: <TodoDetailCard todos={data}/>
                }, {
                    path: '/edit/:id',
                    element: <EditTodo editTodo={editTodo} todos={data}/>
                },

            ]
        }
    ])

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
