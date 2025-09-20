import React from 'react';

const HelloWorld = (props) => {
  return (
    <div>
      <h2>Hello from React!</h2>
      <p>This is a React component rendered in Rails.</p>
      <p>Props: {JSON.stringify(props)}</p>
    </div>
  );
};

export default HelloWorld;
