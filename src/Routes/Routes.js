import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Home/Contacts/Contacts";
import Home from "../pages/Home/Home";
import Projects from "../pages/Home/Projects/Projects";
import ProjectsDetail from "../pages/Home/Projects/ProjectsDetail";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/projects',
                element: <Projects />,
            },
            {
                path: '/projects/:id',
                loader: ({ params }) => fetch(`https://personal-portfolio-server-pi.vercel.app/projects/${params.id}`),
                element: <ProjectsDetail />
            },
            {
                path: '/contacts',
                element: <Contact />
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/blogs',
                element: <Blogs />
            }
        ]
    }
])