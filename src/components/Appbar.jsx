import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { useRef } from 'react';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
        },
    },
});


const pages = ['Home', 'Movies', 'Categories'];
const settings = ['Profile', 'Account', 'Logout'];

const ResponsiveAppBar = ({ categories }) => {
    const Navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [openCategoritesMenu, setOpenCategoriesMenu] = useState(false);
    const refim=useRef(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        console.log("aa");
        setAnchorElNav(null);
    };

    const navigator=(page)=>{
        if (page === 'Categories' || page === 'Movies') {
            Navigate('/movies')
        }
        else if (page === 'Home')
            Navigate('/')
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenCategoriesMenu = (page) => {
        if (page === 'Categories')
            setOpenCategoriesMenu(true);
    }
    const handleCloseCategoriesMenu = (page) => {
        if (page === 'Categories')
            setOpenCategoriesMenu(false);
    }

    return (
        <AppBar position="static" className='!bg-transparent'>
            <ThemeProvider theme={theme}>
                <Container maxWidth="xxl">
                    <Toolbar disableGutters>
                        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                        <Icon icon="mdi:dolphin" className='text-3xl text-cyan-100 hidden sm:hidden md:flex' />

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                ml: 1,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            yunusFLİX
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={()=>{
                                        navigator(page);
                                        handleCloseNavMenu();
                                    }}
                                    onMouseEnter={()=>{
                                        handleOpenCategoriesMenu(page);
                                        console.log(refim.current.classList);
                                        refim.current.classList.remove("ml-[10rem]","mt-12");
                                        refim.current.classList.add("ml-[7.1rem]","!mt-24");
                                    } }
                                    onMouseLeave={()=>handleCloseCategoriesMenu(page) }
                                    >
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                            <div className='bg-gradient-to-b from-gray-700 z-[1400] to-gray-800 rounded-lg shadow-lg absolute' hidden={!openCategoritesMenu} onMouseEnter={() =>{setOpenCategoriesMenu(true)}} onMouseLeave={() => setOpenCategoriesMenu(false)} ref={refim}>
                                <ul className='list-none p-4'>
                                    {categories.map(categorie =>
                                        <li className='text-xl p-1 tracking-wide' key={categorie}>
                                            {window.location.pathname.includes('movies') ? <a href={'#' + categorie} onClick={()=>setAnchorElNav(false)}>{categorie}</a> : <NavLink to={'movies'} onClick={()=>setAnchorElNav(false)} >{categorie}</NavLink>}
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </Box>
                        <Icon icon="mdi:dolphin" className='text-3xl text-cyan-100 sm:flex md:hidden' />

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                ml:1,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            yunusFLİX
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, position: 'relative' }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={() => {
                                        navigator(page);
                                        handleCloseNavMenu();
                                    }}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    onMouseEnter={() => handleOpenCategoriesMenu(page)}
                                    onMouseLeave={() => handleCloseCategoriesMenu(page)}
                                >
                                    {page}
                                </Button>
                            ))}
                            <div className='bg-gradient-to-b from-gray-700 z-10 to-gray-800 rounded-lg shadow-lg absolute ml-[10rem] mt-12' hidden={!openCategoritesMenu} onMouseEnter={() => {setOpenCategoriesMenu(true)}} onMouseLeave={() => setOpenCategoriesMenu(false)}>
                                <ul className='list-none p-4'>
                                    {categories.map(categorie =>
                                        <li className='text-xl p-1 tracking-wide' key={categorie}>
                                            {window.location.pathname.includes('movies') ? <a href={'#' + categorie}>{categorie}</a> : <NavLink to={'movies'}>{categorie}</NavLink>}
                                        </li>
                                    )}
                                </ul>
                            </div>

                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <NavLink to={setting.toLowerCase()}>{setting}</NavLink>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </ThemeProvider>

        </AppBar>
    );
};
export default ResponsiveAppBar;
