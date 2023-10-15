import Box from "@mui/material/Box";
import Header from "./Header";
import { Outlet } from "react-router-dom";


const RootLayout = () => {
    return (
        <>
            <Header />
            <Box id="main">
                <Outlet />
            </Box>
        </>
    );
};

export default RootLayout;