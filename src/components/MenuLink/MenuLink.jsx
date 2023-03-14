import { MenuLink, MenuLinkText } from './MenuLink.styled';

const MobileMenuLink = ({ title, icon, path }) => {
  return (
    <MenuLink to={path}>
      {icon}
      <MenuLinkText>{title}</MenuLinkText>
    </MenuLink>
  );
};

export default MobileMenuLink;
