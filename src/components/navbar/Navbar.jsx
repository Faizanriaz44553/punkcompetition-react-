import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          {/* Logo */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>

          {/* Desktop Links */}
          <List sx={{ display: { xs: "none", md: "flex" } }}>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer (Sidebar) */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <IconButton sx={{ alignSelf: "flex-end", m: 2 }} onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
        <List>
          <ListItem button onClick={() => setOpen(false)}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => setOpen(false)}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={() => setOpen(false)}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button onClick={() => setOpen(false)}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
