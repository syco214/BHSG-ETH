import { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Image, Link } from './NavbarElements'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons"
import '../Sidebar/icons.css'
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../assets/Logos/logo.svg';
import { Button, Box } from "@material-ui/core"
import PopupDialog from "../../SOL components/Dialog"
import './styles.css'
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Saira',
            'sans-serif',
        ]
    },
});

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)
    const [openDialog, setOpenDialog] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const onDialogClose = () => {
        setOpenDialog(false);
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        <Image src={logo} alt="logo" />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="benefits" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Utility</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="roadmap" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Roadmap</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="lore" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Lore</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="team" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Team</NavLinks>
                        </NavItem>
                        <NavItem>
                            <Link href="https://staking.bountyhunterspaceguild.com/" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Staking</Link>
                        </NavItem>
                        <a href="https://twitter.com/BountyHunterNFT" className="twitter social">
                            <FontAwesomeIcon icon={faTwitter} size="1x" />
                        </a>
                        <a href="https://discord.gg/YPDJGKWMNX" className="discord social">
                            <FontAwesomeIcon icon={faDiscord} size="1x" />
                        </a>
                        <a href="https://www.instagram.com/bountyhunternft/" className="medium social">
                            <FontAwesomeIcon icon={faInstagram} size="1x" />
                        </a>
                        <Link>
                            <FaBars onClick={() => setOpenDialog(true)} size={25} />
                        </Link>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            <ThemeProvider theme={theme}>
                <PopupDialog
                    open={openDialog}
                    onClose={onDialogClose}
                    title={"EXPLORE THE GUILD"}
                    titleStyle={{ color: 'black' }}
                >
                    <Box className="dialog-container" >
                        <Box style={{ marginBottom: 20, minWidth: 400, paddingRight: 30 }}>Navigate the Solaris Systems by clicking a link below.</Box>
                        <Button variant="contained" fullWidth={true} className="item-btn btn-black" component={"a"} href="https://bountyhunterspaceguild.gitbook.io/bounty-hunter-space-guild/" target="_blank">Litepaper</Button>
                        <Button variant="contained" fullWidth={true} className="item-btn btn-black" component={"a"} href="https://angled-hunters.bountyhunterspaceguild.com/" target="_blank">Angled Hunters</Button>
                        <Button variant="contained" fullWidth={true} className="item-btn btn-black" component={"a"} href="https://magiceden.io/marketplace/bounty_hunter_space_guild_cache" target="_blank">Cache Marketplace</Button>
                        <Button variant="contained" fullWidth={true} className="item-btn btn-black" component={"a"} href="https://howrare.is/bountyhunterspaceguild" target="_blank">Complete Collection</Button>
                        <Button variant="contained" fullWidth={true} className="item-btn btn-black" component={"a"} href="https://bountyhunterspaceguild.medium.com/" target="_blank">Medium</Button>
                        <Button variant="contained" fullWidth={true} className="item-btn btn-black" component={"a"} href="https://towerdao.com/326/1" target="_blank">DAO Treasury</Button>
                    </Box>
                </PopupDialog>
            </ThemeProvider>
        </>
    )
}

export default Navbar;
