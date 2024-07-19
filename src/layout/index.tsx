import Header from './header/Header.tsx';
import { Outlet } from "react-router-dom";

const Index = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Index;
