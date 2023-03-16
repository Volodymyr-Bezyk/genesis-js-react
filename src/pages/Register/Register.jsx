import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PageWrap from 'components/PageWrap';
import PageTitle from 'components/PageTitle';

import { register } from 'redux/auth/operations';

import {
  RegisterWrap,
  RegisterTitle,
  RegisterForm,
  FormLabel,
  FormLabelText,
  FormInput,
  RegisterBtn,
  GoToLoginLink,
} from './Register.styled';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <PageWrap>
      <PageTitle title="Register Page" />
      <RegisterWrap>
        <RegisterForm autoComplete="off" onSubmit={handleRegister}>
          <RegisterTitle>Please type your credentials</RegisterTitle>
          <FormLabel>
            <FormLabelText>Name</FormLabelText>
            <FormInput
              onInput={e => setName(e.target.value)}
              type="text"
              placeholder="Mr. James"
              name="name"
              value={name}
              required
            />
          </FormLabel>
          <FormLabel>
            <FormLabelText>Email</FormLabelText>
            <FormInput
              onInput={e => setEmail(e.target.value)}
              type="email"
              placeholder="jjames@gmail.com"
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

          <RegisterBtn type="submit">Register</RegisterBtn>
          <GoToLoginLink to="/login">Already have account?</GoToLoginLink>
        </RegisterForm>
      </RegisterWrap>
    </PageWrap>
  );
};

export default Register;
