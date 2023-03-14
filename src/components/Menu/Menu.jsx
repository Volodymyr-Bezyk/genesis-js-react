import { useState } from 'react';

import { RxModulzLogo } from 'react-icons/rx';
import { BiMenuAltRight } from 'react-icons/bi';
import { MdVideoLibrary } from 'react-icons/md';
import { SiGnuprivacyguard } from 'react-icons/si';
import { RiLoginBoxFill, RiLogoutCircleRFill } from 'react-icons/ri';
import { ImStatsBars } from 'react-icons/im';
import { IoMdClose } from 'react-icons/io';

import Box from 'components/Box';
import MenuLink from 'components/MenuLink';

import {
  MenuWrap,
  LogoText,
  MenuBtnWrap,
  MobileMenuOpenBtn,
  Nav,
  MobileMenuCloseBtn,
  NavWrap,
  LogoutBtnWrap,
  LogoutBtn,
  LogoutBtnText,
} from './Menu.styled';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <MenuWrap>
      <MenuBtnWrap>
        <Box display="flex" alignItems="center">
          <RxModulzLogo />
          <LogoText>Lessons</LogoText>
        </Box>

        <MobileMenuOpenBtn type="button" onClick={() => setShowMenu(true)}>
          <BiMenuAltRight />
        </MobileMenuOpenBtn>
      </MenuBtnWrap>

      <NavWrap showMenu={showMenu}>
        <Nav>
          <MobileMenuCloseBtn type="button" onClick={() => setShowMenu(false)}>
            <IoMdClose />
          </MobileMenuCloseBtn>
          <MenuLink title="Dashboard" icon={<ImStatsBars />} path="dashboard" />
          <MenuLink title="Courses" icon={<MdVideoLibrary />} path="/" />
          <MenuLink
            title="Register"
            icon={<SiGnuprivacyguard />}
            path="register"
          />
          <MenuLink title="Login" icon={<RiLoginBoxFill />} path="login" />
        </Nav>
        <LogoutBtnWrap>
          <LogoutBtn type="button">
            <RiLogoutCircleRFill />
            <LogoutBtnText>Logout</LogoutBtnText>
          </LogoutBtn>
        </LogoutBtnWrap>
      </NavWrap>
    </MenuWrap>
  );
};

export default Menu;
