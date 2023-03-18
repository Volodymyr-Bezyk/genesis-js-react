import PropTypes from 'prop-types';
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

MobileMenuLink.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object,
  path: PropTypes.string.isRequired,
  setShowMenu: PropTypes.func.isRequired,
};
