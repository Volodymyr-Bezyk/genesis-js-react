import { MenuLink, MenuLinkText } from './MenuLink.styled';

const MobileMenuLink = ({ title, icon, path }) => {
  return (
    <MenuLink to={path} end>
      {icon}
      <MenuLinkText>{title}</MenuLinkText>
    </MenuLink>
  );
};

export default MobileMenuLink;
