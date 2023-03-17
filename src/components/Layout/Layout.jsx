import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { changeUserStateTracker } from 'redux/auth/operations';
import PageSkeleton from 'components/PageSkeleton';

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
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 3000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
          <Suspense fallback={<PageSkeleton />}>
            <Outlet />
          </Suspense>
        </MainContent>
      </LayoutWrap>
    </Container>
  );
};

export default Layout;
