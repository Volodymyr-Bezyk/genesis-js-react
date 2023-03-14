import { BsSearch } from 'react-icons/bs';
import PageWrap from 'components/PageWrap';
import PageTitle from 'components/PageTitle';

import {
  HomeBar,
  UserInfo,
  UserName,
  UserEmail,
  SearchForm,
  SearchInput,
  SearchBtn,
} from './Home.styled';

const Home = () => {
  return (
    <PageWrap>
      <HomeBar>
        <PageTitle title="Courses" />
        <SearchForm>
          <SearchInput type="text" placeholder="Search" />
          <SearchBtn type="submit">
            <BsSearch />
          </SearchBtn>
        </SearchForm>
        <UserInfo>
          <UserName>Asfak Mahmud</UserName>
          <UserEmail>asfakmahmudbd@gmaill.com</UserEmail>
        </UserInfo>
      </HomeBar>
    </PageWrap>
  );
};

export default Home;
