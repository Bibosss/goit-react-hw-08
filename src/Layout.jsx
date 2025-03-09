import { Outlet } from "react-router-dom"
import { AppBar } from "./components/AppBar/AppBar"
import { Suspense } from "react"

const Layout = ({children}) => {
    return (
        <div>
            <AppBar />
            {children}
        </div>
    )
}

export default Layout