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
  background: hsl(0 0% 100% / 0.1);
  backdrop-filter: blur(0.3rem);
  border-radius: 2px;
  transition: all 0.2s linear;
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
  padding: 0.75rem;
  color: white;
  border: none;
`;

export const TextArea = styled.textarea`
  height: 120px;
  width: 100%;
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
  padding: 0.75rem;
  color: white;
  background: hsl(0 0% 100% / 0.1);
  backdrop-filter: blur(0.3rem);
  border-radius: 2px;
  border: none;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: #0274be;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1rem;
  text-align: left;
  color: #d6411c;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const SuccessMessage = styled.p`
  font-size: 1rem;
  text-align: left;
  color: green;
  font-weight: 700;
  margin-top: 2rem;
`;
