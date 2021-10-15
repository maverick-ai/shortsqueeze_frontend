import styled from "styled-components";

export const EmojiWrapper = styled.div`
  margin-right: 0.33rem;
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  text-align: center;
  display: inline-block;
  width: ${({ width }) => width};
  font-weight: 100;

  &::placeholder {
    color: #aaa;
  }

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledSpan = styled.span`
  color: lightgrey;
  margin-left: 0.33rem;
  margin-right: 0.33rem;
`;

export const StyledFieldset = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 30px;
  border: 0px;
  padding-top: 0.66rem;
  padding-bottom: 0.66rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  transition: all 0.15s ease-out;
  max-width:400px;

  &:focus-within {
    border: 0px;
  }
`;
