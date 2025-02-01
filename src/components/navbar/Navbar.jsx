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
  Button,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import UserTrue from "../../utils/UserTrue";
import './Navbar.css';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const usertrue = UserTrue();
  const navigate = useNavigate();

  // Open/Close Avatar Menu
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };


  return (
    <>
      {/* Navbar */}
      <AppBar position="static" className="appBar">
        <Toolbar>
          {/* Logo */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <div className="logo-div">
              <img src="/images/main-logo.png.png" alt="" />
            </div>
          </Typography>

          {/* Desktop Links */}
          <List sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <ListItem button onClick={() => navigate('/')}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="About" onClick={() => navigate('/about')}/>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
          {/* Drawer */}
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <List sx={{ width: 250 }}>
              <ListItem>
                <ListItemText primary="Your Cart is Empty" />
              </ListItem>
            </List>
          </Drawer>

          {/* Authentication Buttons */}
          {usertrue ? (
            // If User is Logged In
            <>
            <Toolbar>
              {/* Cart Icon */}
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <ShoppingCartIcon />
              </IconButton>
            </Toolbar>
              <IconButton onClick={handleMenuOpen}>
                <Avatar src="" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>Dashboard</MenuItem>
                <MenuItem
                  onClick={() => {
                    setUser(null);
                    handleMenuClose();
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            // If User is NOT Logged In
            
            <div className="login-div">
              <Toolbar>
              {/* Cart Icon */}
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <ShoppingCartIcon />
              </IconButton>
            </Toolbar>
              <Button variant="contained" className="login" onClick={() => navigate('/auth/login')} sx={{ display: { xs: "none", md: "flex" } }} >
                Login
              </Button>
              <Button variant="outlined" className="signup" color="inherit" sx={{ ml: 1, display: { xs: "none", md: "flex" } }} onClick={() => navigate('/auth/signup')}>
                Signup
              </Button>
            </div>
          )}
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

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: "50%" } }}
      >
        <IconButton sx={{ alignSelf: "flex-end", m: 2 }} onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
        <List>
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

        {/* Mobile Authentication Buttons */}
        {!usertrue ? (
          <>
            <Button variant="contained" color="primary" fullWidth sx={{ my: 1 }}>
              Login
            </Button>
            <Button variant="outlined" color="inherit" fullWidth sx={{ my: 1 }}>
              Signup
            </Button>
          </>
        ) : (
          <>
            <ListItem button>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setUser(null);
                setOpen(false);
              }}
            >
              <ListItemText primary="Logout" />
            </ListItem>
          </>
        )}
      </Drawer>
    </>
  );
};

export default Navbar;
