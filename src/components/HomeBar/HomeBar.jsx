import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';

import PageTitle from 'components/PageTitle';

import { setFilterValue } from 'redux/filter/filterSlice';
import { selectFilter, selectUser } from 'redux/selectors';

import {
  HomeBarWrap,
  UserInfo,
  UserName,
  UserEmail,
  SearchLabel,
  SearchInput,
  SearchIcon,
} from './HomeBar.styled';

const HomeBar = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const user = useSelector(selectUser);

  const handleInput = e => {
    dispatch(setFilterValue(e.target.value.trim()));
  };

  return (
    <HomeBarWrap>
      <PageTitle title="Courses" />
      <SearchLabel>
        <SearchInput
          type="text"
          placeholder="Search"
          value={filter}
          onInput={handleInput}
        />
        <SearchIcon>
          <BsSearch />
        </SearchIcon>
      </SearchLabel>
      <UserInfo>
        <UserName>Hello, {user.name ?? 'unknown'}</UserName>
        <UserEmail>{user.email ?? 'unknown'}</UserEmail>
      </UserInfo>
    </HomeBarWrap>
  );
};

export default HomeBar;
