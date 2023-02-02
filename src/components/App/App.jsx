import { useState } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';
import { Container } from './App.styled';

function App() {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = option => {
    setOptions(prevOptions => ({
      ...prevOptions,
      [option]: prevOptions[option] + 1,
    }));
  };

  const countTotalFeedback = () =>
    Object.values(options).reduce((acc, value) => acc + value, 0);

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((options.good / countTotalFeedback()) * 100);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={options.good}
            neutral={options.neutral}
            bad={options.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </Container>
  );
}

export default App;
