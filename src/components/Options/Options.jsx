
import s from './Options.module.css';

const Options = ({ feedbackTypes, updateFeedback }) => {
  const handleFeedback = (type) => {
    updateFeedback((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const handleReset = () => {
    updateFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
      {Object.keys(feedbackTypes).map((key) => (
        <button key={key} onClick={() => handleFeedback(key)}>
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </button>
      ))}
      {feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad > 0 && (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
};

export default Options;