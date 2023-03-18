import PropTypes from 'prop-types';
import { MenuNavLink, MenuLinkText } from './MenuLink.styled';

const MenuLink = ({ title, icon, path, setShowMenu }) => {
  return (
    <MenuNavLink to={path} end onClick={e => setShowMenu(false)}>
      {icon}
      <MenuLinkText>{title}</MenuLinkText>
    </MenuNavLink>
  );
};

export default MenuLink;

MenuLink.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object,
  path: PropTypes.string.isRequired,
  setShowMenu: PropTypes.func.isRequired,
};
