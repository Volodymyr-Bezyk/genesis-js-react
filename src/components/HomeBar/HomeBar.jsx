import { BsSearch } from 'react-icons/bs';
import PageTitle from 'components/PageTitle';

import {
  HomeBarWrap,
  UserInfo,
  UserName,
  UserEmail,
  SearchForm,
  SearchInput,
  SearchBtn,
} from './HomeBar.styled';

const HomeBar = () => {
  return (
    <HomeBarWrap>
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
    </HomeBarWrap>
  );
};

export default HomeBar;
