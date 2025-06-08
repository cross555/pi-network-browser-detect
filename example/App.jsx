// example/App.jsx
import React from 'react';
import useIsPiBrowser from '../src/useIsPiBrowser';

const App = () => {
  const isInPiBrowser = useIsPiBrowser();

  if (isInPiBrowser === null) {
    return <p>Detecting Pi Browser...</p>;
  }

  if (!isInPiBrowser) {
    return (
      <div>
        <h2>Not in Pi Browser</h2>
        <p>This feature works best in the Pi Browser.</p>
        <a href="https://pinet.com/YOUR_APP_LINK">Open in Pi Browser</a>
      </div>
    );
  }

  return (
    <div>
      <h2>Welcome Pi User</h2>
      <p>You are in the Pi Browser. 🎉</p>
    </div>
  );
};

export default App;
