import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Container from 'components/Container';
import Menu from 'components/Menu';
import { LayoutWrap, MainContent } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <LayoutWrap>
        <Menu />
        <MainContent>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </MainContent>
      </LayoutWrap>
    </Container>
  );
};

export default Layout;
