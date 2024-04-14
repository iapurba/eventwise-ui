import Box from "@mui/material/Box";
import AppHeader from "./AppHeader/AppHeader";
import { Outlet } from "react-router-dom";


const RootLayout = () => {
    return (
        <>
            <AppHeader />
            <Box id="main">
                <Outlet />
            </Box>
        </>
    );
};

export default RootLayout;