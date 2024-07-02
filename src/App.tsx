import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import Home from "./routes/Home.tsx";
import TodoGallery from "./routes/TodoGallery.tsx";
import DoingGallery from "./routes/DoingGallery.tsx";
import DoneGallery from "./routes/DoneGallery.tsx";

function App() {

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
                    element: <TodoGallery/>
                }, {
                    path: '/board/doing',
                    element: <DoingGallery/>
                }, {
                    path: '/board/done',
                    element: <DoneGallery/>
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
