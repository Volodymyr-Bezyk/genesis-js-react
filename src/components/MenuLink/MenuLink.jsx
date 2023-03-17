import { MenuLink, MenuLinkText } from './MenuLink.styled';

const MobileMenuLink = ({ title, icon, path, setShowMenu }) => {
  return (
    <MenuLink to={path} end onClick={e => setShowMenu(false)}>
      {icon}
      <MenuLinkText>{title}</MenuLinkText>
    </MenuLink>
  );
};

export default MobileMenuLink;
