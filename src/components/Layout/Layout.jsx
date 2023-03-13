import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Container from 'components/Container';
import MobileMenu from 'components/MobileMenu';
import { LayoutWrap } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <LayoutWrap>
        <MobileMenu />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </LayoutWrap>
    </Container>
  );
};

export default Layout;
