
import s from'./Feedback.module.css';

const Feedback = ({ feedback }) => {
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100) || 0;

  return (
    <div>
      <h2>Feedback Statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive Feedback: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;