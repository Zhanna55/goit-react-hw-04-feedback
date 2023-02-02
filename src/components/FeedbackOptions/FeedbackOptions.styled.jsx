import styled from '@emotion/styled';

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
`;

const FeedbackButton = styled.div`
  align-items: center;
  padding: 5px 10px;
  cursor: pointer;
  text-transform: capitalize;
  border: 1px solid transparent;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  &:hover,
  &:focus {
    background-color: blue;
  }
`;
export { ButtonContainer, FeedbackButton };
