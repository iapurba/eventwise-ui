import Box from "@mui/material/Box";
import GlobalHeader from "./GlobalHeader";
import { Outlet } from "react-router-dom";


const RootLayout = () => {
    return (
        <>
            <GlobalHeader />
            <Box id="main">
                <Outlet />
            </Box>
        </>
    );
};

export default RootLayout;