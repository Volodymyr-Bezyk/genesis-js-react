import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Container from 'components/Container';
import Menu from 'components/Menu';
import { LayoutWrap } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <LayoutWrap>
        <Menu />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </LayoutWrap>
    </Container>
  );
};

export default Layout;
