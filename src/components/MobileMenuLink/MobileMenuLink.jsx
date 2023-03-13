import { MobileLink, MobileLinkText } from './MobileMenuLink.styled';

const MobileMenuLink = ({ title, icon, path }) => {
  return (
    <MobileLink to={path}>
      {icon}
      <MobileLinkText>{title}</MobileLinkText>
    </MobileLink>
  );
};

export default MobileMenuLink;
