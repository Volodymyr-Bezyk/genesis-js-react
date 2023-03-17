import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RxModulzLogo } from 'react-icons/rx';
import { BiMenuAltRight } from 'react-icons/bi';
import { MdVideoLibrary } from 'react-icons/md';
import { SiGnuprivacyguard } from 'react-icons/si';
import { RiLoginBoxFill, RiLogoutCircleRFill } from 'react-icons/ri';
import { ImStatsBars } from 'react-icons/im';
import { IoMdClose } from 'react-icons/io';
import { logout } from 'redux/auth/operations';
import { selectAuth } from 'redux/selectors';

import Box from 'components/Box';
import MenuLink from 'components/MenuLink';

import {
  MenuWrap,
  StickyWrap,
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
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const { isLoggedIn, isRefreshing } = useSelector(selectAuth);

  const handleLogout = e => {
    dispatch(logout());
  };
  return (
    <MenuWrap>
      <StickyWrap>
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
            <MobileMenuCloseBtn
              type="button"
              onClick={() => setShowMenu(false)}
            >
              <IoMdClose />
            </MobileMenuCloseBtn>
            <MenuLink
              title="Dashboard"
              icon={<ImStatsBars />}
              path="dashboard"
            />
            {isLoggedIn && !isRefreshing && (
              <MenuLink title="Courses" icon={<MdVideoLibrary />} path="/" />
            )}

            {!isLoggedIn && !isRefreshing && (
              <>
                <MenuLink
                  title="Register"
                  icon={<SiGnuprivacyguard />}
                  path="register"
                />
                <MenuLink
                  title="Login"
                  icon={<RiLoginBoxFill />}
                  path="login"
                />
              </>
            )}
          </Nav>
          {isLoggedIn && !isRefreshing && (
            <LogoutBtnWrap>
              <LogoutBtn type="button">
                <RiLogoutCircleRFill />
                <LogoutBtnText onClick={handleLogout}>Logout</LogoutBtnText>
              </LogoutBtn>
            </LogoutBtnWrap>
          )}
        </NavWrap>
      </StickyWrap>
    </MenuWrap>
  );
};

export default Menu;
