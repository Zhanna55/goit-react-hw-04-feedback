import PropTypes from 'prop-types';
import { ButtonContainer, FeedbackButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsArr = Object.keys(options);
  return (
    <ButtonContainer>
      {optionsArr.map(option => {
        return (
          <FeedbackButton
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackButton>
        );
      })}
    </ButtonContainer>
  );
};

FeedbackOptions.propTypes = {
  // options: PropTypes.object.isRequired,
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
