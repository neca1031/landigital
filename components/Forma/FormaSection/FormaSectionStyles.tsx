import styled from "styled-components";

export const FormStyled = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;

  @media (max-width: 60em) {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fafafa;
  border-radius: 2px;
  transition: all 0.2s linear;
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
  padding: 0.75rem;
  color: #666;
`;

export const TextArea = styled.textarea`
  height: 120px;
  width: 100%;
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
  padding: 0.75rem;
  color: #666;
  border: 1px solid #ccc;
  background-color: #fafafa;
  border-radius: 2px;

  transition: all 0.2s linear;
`;

export const FormButton = styled.button`
  background-color: #6878d6;
  border: none;
  color: #fff;
  padding: 17px 35px;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background-color: #0274be;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1rem;
  text-align: left;
  color: grey;

  margin-bottom: 1rem;
`;
