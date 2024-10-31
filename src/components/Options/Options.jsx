
import s from './Options.module.css';

const Options = ({ feedbackTypes, updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div>
      {Object.keys(feedbackTypes).map((key) => (
        <button key={key} onClick={() => updateFeedback(key)}>
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button onClick={resetFeedback}>Reset</button>
      )}
    </div>
  );
};

export default Options;