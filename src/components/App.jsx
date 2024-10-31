import React, { useState, useEffect } from 'react';
import Feedback from '../components/Feedback/Feedback';
import Options from '../components/Options/Options';
import Notification from '../components/Notification/Notification';


const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    return savedFeedback ? savedFeedback : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options feedbackTypes={feedback} updateFeedback={setFeedback} />
      {feedback.good + feedback.neutral + feedback.bad > 0 && (
        <Feedback feedback={feedback} />
      )}
      {feedback.good + feedback.neutral + feedback.bad === 0 && (
        <Notification message="No feedback given yet." />
      )}
    </div>
  );
};

export default App;