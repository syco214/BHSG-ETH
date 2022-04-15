import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, Link} from './SidebarElements'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTwitter, faDiscord, faInstagram} from "@fortawesome/free-brands-svg-icons"
import './icons.css'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <Link href="https://bountyhunterspaceguild.gitbook.io/bounty-hunter-space-guild/">Litepaper</Link>
                    <Link href="https://angled-hunters.bountyhunterspaceguild.com/">Angled Hunters</Link>
                    <Link href="https://magiceden.io/marketplace/bounty_hunter_space_guild_cache">Cache Marketplace</Link>
                    <Link href="https://howrare.is/bountyhunterspaceguild">Complete Collection</Link>
                    <Link href="https://bountyhunterspaceguild.medium.com/">Medium</Link>
                    <Link href="https://towerdao.com/326/1">DAO Treasury</Link>
                    <div className="parent">
                    <a href="https://twitter.com/BountyHunterNFT" className="twitter social"> 
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://discord.gg/YPDJGKWMNX" className="discord social"> 
                        <FontAwesomeIcon icon={faDiscord} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/bountyhunternft/" className="medium social"> 
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    </div>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
