import { AppBar, Toolbar, Typography } from "@mui/material";
import DarkSwitch from "./Switch";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({darkMode, handleThemeChange}: Props){
    return(
        <AppBar position="sticky" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6">MBKM</Typography>
                <DarkSwitch checked={darkMode} handleThemeChange={handleThemeChange} />
            </Toolbar>
        </AppBar>
    )
}