import PropTypes from "prop-types"; // Import PropTypes
import { useRef, useState } from "react";
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Drawer,
	Grow,
	Paper,
	ClickAwayListener,
	List,
	ListItem,
	MenuItem,
	MenuList,
	Box,
	CssBaseline,
	Link,
	Stack,
	Divider,
	Container,
	Popper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
	AccountBalanceWalletOutlined as Wallet,
	Person2Outlined as Profile,
	LogoutOutlined as LogoutIcon,
} from "@mui/icons-material";
import { logout } from "../../../store/authSlice.jsx";
import { useDispatch } from "react-redux";
import NavLink from "components/molecules/NavLink";

const navItems = {
	left: [
		{ title: "Post a Task", path: "/postTask" },
		{ title: "My Tasks", path: "/mytasks" },
		{ title: "Browse Tasks", path: "/tasks" },
	],
	rightAuthenticated: [
		{ title: "wallet", path: "/wallet" },
		{ title: "profile", path: "/profile" },
		{ title: "logout", path: "/logout" },
	],
	rightUnAuthenticated: [
		{ title: "Sign In", path: "/signIn" },
		{ title: "Sign Up", path: "/signUp" },
	],
};
const Navbar = ({ window }) => {
	const dispatch = useDispatch();
	const [mobileOpen, setMobileOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const anchorRef = useRef(null);
	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};
	const handleLogout = () => {
		dispatch(logout());
	};
	const handleMenuClose = () => {};
	const handleClickOutsideMenu = () => {};
	const isAuthenticated = true;
	const drawer = (
		<Box>
			<Stack direction={"column"}>
				<Box>
					<IconButton
						onClick={handleDrawerToggle}
						sx={{ position: "relative", top: "10px", left: "13px" }}
					>
						<CloseIcon />
					</IconButton>
				</Box>
				<Divider sx={{ mt: "14px" }} />
				<Box>
					<List>
						{navItems.left.map(({ title, path }) => (
							<ListItem key={title}>
								<Link
									sx={{
										textDecoration: "none",
										color: "#171a1f",
									}}
									href={path}
								>
									<Typography>{title}</Typography>
								</Link>
							</ListItem>
						))}
						<ListItem
							key='logout-button'
							onClick={handleLogout}
						>
							Logout
						</ListItem>
					</List>
				</Box>
			</Stack>
		</Box>
	);

	const container = window !== undefined ? window().documents.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				component={"nav"}
				position='static'
				sx={{
					backgroundColor: "white",
					color: "#8659d3",
					position: "relative",
				}}
			>
				{/* Desktop Navigation */}
				<Toolbar disableGutters>
					<Container
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
						maxWidth='lg'
					>
						<IconButton
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: "none" } }}
						>
							<MenuIcon />
						</IconButton>

						<NavLink href='/'>
							<Typography
								variant='h5'
								// sx={{ display: { xs: "none", sm: "block" }, fontWeight: 700 }}
							>
								TaskGenie
							</Typography>
						</NavLink>
						<Box
							sx={{
								display: { xs: "none", sm: "block" },
								ml: "16px",
							}}
						>
							<Stack
								direction={"row"}
								gap={"1rem"}
							>
								{navItems.left.map(({ title, path }) => (
									<NavLink
										key={title}
										href={path}
									>
										<Typography
											variant='body2'
											sx={{ color: "#384179" }}
										>
											{title}
										</Typography>
									</NavLink>
								))}
							</Stack>
						</Box>
						<Box
							sx={{
								flexGrow: 1,
								display: "flex",
								justifyContent: "end",
							}}
						>
							<IconButton
								ref={anchorRef}
								aria-haspopup={true}
								onClick={() => setMenuOpen(!menuOpen)}
								sx={{ color: "#384179" }}
							>
								<Profile />
							</IconButton>
							<Popper
								open={menuOpen}
								anchorEl={anchorRef.current}
								placement='top'
								transition
								disablePortal
							>
								{({ TransitionProps, placement }) => (
									<Grow
										{...TransitionProps}
										style={{
											transformOrigin:
												placement === "bottom-start"
													? "left top"
													: "left bottom",
										}}
									>
										{/* <ClickAwayListener onClickAway={handleClickOutsideMenu}> */}
											<Paper
												sx={{
													padding: "0.5rem 1.5rem",
												}}
											>
												<MenuList
													autoFocusItem={menuOpen}
													id='composition-menu'
													aria-labelledby='composition-button'
													// onKeyDown={handleListKeyDown}
												>
													{navItems.rightAuthenticated.map((item) => (
														<MenuItem
															key={item.title}
															sx={{
																margin: "0.5rem 0",
															}}
														>
															<Typography
																variant='body2'
																sx={{
																	display: "flex",
																	color: "#384179",
																}}
															>
																{item.icon}
																{item.title}
															</Typography>
														</MenuItem>
													))}
												</MenuList>
											</Paper>
										{/* </ClickAwayListener> */}
									</Grow>
								)}
							</Popper>
						</Box>
					</Container>
				</Toolbar>
			</AppBar>
			{/* Mobile Navigation */}
			<nav>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: "100%",
						},
					}}
				>
					{drawer}
				</Drawer>
			</nav>
		</Box>
	);
};

// Prop validation for Navbar component
Navbar.propTypes = {
	window: PropTypes.func,
};

export default Navbar;
