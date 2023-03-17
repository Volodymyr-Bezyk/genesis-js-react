import PageWrap from 'components/PageWrap';
import PageTitle from 'components/PageTitle';

import notFound from '../../img/404-error-page-templates.png';
import { ImgWrap, NotFoundImg, GoToCoursesLink } from './NotFound.styled';

const NotFound = () => {
  return (
    <PageWrap>
      <PageTitle title="NotFound Page" />
      <ImgWrap>
        <NotFoundImg src={notFound} alt="Page not found" />
        <GoToCoursesLink to="/" end>
          Go to courses
        </GoToCoursesLink>
      </ImgWrap>
    </PageWrap>
  );
};

export default NotFound;
