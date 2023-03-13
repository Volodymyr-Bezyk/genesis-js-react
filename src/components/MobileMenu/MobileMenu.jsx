import { RxModulzLogo } from 'react-icons/rx';
import { BiMenuAltRight } from 'react-icons/bi';
import { MdVideoLibrary } from 'react-icons/md';
import { SiGnuprivacyguard } from 'react-icons/si';
import { RiLoginBoxFill, RiLogoutBoxRFill } from 'react-icons/ri';
import { ImStatsBars } from 'react-icons/im';

import Box from 'components/Box';
import MobileMenuLink from 'components/MobileMenuLink';

import {
  MobileMenuWrap,
  LogoText,
  MobileBtnWrap,
  MobileMenuBtn,
  MobileNav,
} from './MobileMenu.styled';

const MobileMenu = () => {
  return (
    <MobileMenuWrap>
      <MobileBtnWrap>
        <Box display="flex" alignItems="center">
          <RxModulzLogo color="#0075FF" size={40} />
          <LogoText>Lessons</LogoText>
        </Box>

        <MobileMenuBtn>
          <BiMenuAltRight size={45} />
        </MobileMenuBtn>
      </MobileBtnWrap>

      <MobileNav>
        <MobileMenuLink
          title="Dashboard"
          icon={<ImStatsBars size={30} color="#FF285C" />}
          path=""
        />
        <MobileMenuLink
          title="Courses"
          icon={<MdVideoLibrary size={30} color="#FF285C" />}
          path="/"
        />
        <MobileMenuLink
          title="Register"
          icon={<SiGnuprivacyguard size={30} color="#FF285C" />}
          path="register"
        />
        <MobileMenuLink
          title="Login"
          icon={<RiLoginBoxFill size={30} color="#FF285C" />}
          path="login"
        />

        <MobileMenuLink
          title="Logout"
          icon={<RiLogoutBoxRFill size={30} color="#FF285C" />}
          //   path="login"
        />
      </MobileNav>
    </MobileMenuWrap>
  );
};

export default MobileMenu;

// icon={GiBookCover}
