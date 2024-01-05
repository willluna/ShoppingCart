import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "orange" }}>
        <Toolbar>
          <Typography variant="h3" sx={{ flexGrow: 1, textAlign: "center" }}>
            Fresh fruits
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
