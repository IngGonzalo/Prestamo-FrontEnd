import { createBrowserRouter } from "react-router-dom"
import App from "../App";

import { RootPrimaryLayout } from '../layout/root/RootPrimaryLayout';




export const router = createBrowserRouter(
    [
        {
            element:<RootPrimaryLayout/>,
            path: '/',
            children: []
        }
    ]
);

