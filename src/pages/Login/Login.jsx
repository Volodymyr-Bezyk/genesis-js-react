import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import PageWrap from 'components/PageWrap';
import PageTitle from 'components/PageTitle';

import { login } from 'redux/auth/operations';
import { selectIsLoadingAuth } from 'redux/selectors';

import {
  LoginWrap,
  LoginTitle,
  LoginForm,
  FormLabel,
  FormLabelText,
  FormInput,
  LoginBtn,
  LoginBtnText,
  GoToLoginLink,
} from './Login.styled';

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingAuth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <PageWrap>
      <PageTitle title="Login Page" />
      <LoginWrap>
        <LoginForm onSubmit={handleLogin}>
          <LoginTitle>Please type your credentials</LoginTitle>
          <FormLabel>
            <FormLabelText>Email</FormLabelText>
            <FormInput
              onInput={e => setEmail(e.target.value)}
              type="email"
              placeholder="replex@gmail.com"
              name="email"
              value={email}
              required
            />
          </FormLabel>
          <FormLabel>
            <FormLabelText>Password</FormLabelText>
            <FormInput
              onInput={e => setPassword(e.target.value)}
              type="password"
              placeholder="1234567"
              name="password"
              value={password}
              required
            />
          </FormLabel>

          <LoginBtn type="submit">
            <LoginBtnText>Login</LoginBtnText>
            {isLoading && (
              <ClipLoader
                size={20}
                color="#0075FF"
                cssOverride={{ marginLeft: '10px' }}
              />
            )}
          </LoginBtn>
          <GoToLoginLink to="/register">
            No account? Please signup
          </GoToLoginLink>
        </LoginForm>
      </LoginWrap>
    </PageWrap>
  );
};

export default Login;
