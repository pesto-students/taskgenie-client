import NavBar from "components/organisms/Navbar/Navbar.jsx";

const Header = () => {
	return (
		<div
			className='header'
			style={{ position: "sticky", top: 0, zIndex: 2000 }}
		>
			<NavBar />
		</div>
	);
};

export default Header;
