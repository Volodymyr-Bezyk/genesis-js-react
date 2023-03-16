import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { changeUserStateTracker } from 'redux/auth/operations';

import Container from 'components/Container';
import Menu from 'components/Menu';
import { LayoutWrap, MainContent } from './Layout.styled';

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeUserStateTracker());
  }, [dispatch]);
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
