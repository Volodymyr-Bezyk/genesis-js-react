import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginWrap = styled.div`
  display: flex;
  justify-content: center;

  margin-top: ${p => p.theme.space[3]}px;
`;

export const LoginTitle = styled.p`
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[1]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[4]}px;
  line-height: 1.17;
  color: ${p => p.theme.colors.primaryLink};
`;

export const LoginForm = styled.form`
  width: 90%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.form};
  border: 2px solid ${p => p.theme.colors.border};
`;
export const FormLabel = styled.label`
  display: block;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const FormLabelText = styled.div`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[4]}px;
  line-height: 1.19;
  color: ${p => p.theme.colors.userName};

  @media (min-width: ${p => p.theme.screens.desktop}) {
    font-size: ${p => p.theme.fontSizes[5]}px;
  }
`;

export const FormInput = styled.input`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  width: 90%;

  border-radius: ${p => p.theme.radii.input};
  background-color: ${p => p.theme.colors.border};
  outline: none;
  border: 1px solid ${p => p.theme.colors.transparent};
  transition: ${p => p.theme.transitions.borderColor};

  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 1.14;
  color: ${p => p.theme.colors.userEmail};

  :focus {
    border-color: ${p => p.theme.colors.hover};
  }

  @media (min-width: ${p => p.theme.screens.desktop}) {
    width: 440px;
  }
`;

export const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.input};

  font-family: inherit;
  border: 2px solid ${p => p.theme.colors.logo};
  outline: none;
  cursor: pointer;
  background-color: rgba(246, 231, 7, 0.2);

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 1.14;
  color: ${p => p.theme.colors.title};

  transition: ${p => p.theme.transitions.color},
    ${p => p.theme.transitions.backgroundColor};

  :hover {
    color: ${p => p.theme.colors.primaryIcon};
    background-color: ${p => p.theme.colors.hover};
  }
`;
export const GoToLoginLink = styled(Link)`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 1.14;
  color: ${p => p.theme.colors.title};

  transition: ${p => p.theme.transitions.color},
    ${p => p.theme.transitions.backgroundColor};

  :hover {
    color: ${p => p.theme.colors.primaryIcon};
  }
`;
