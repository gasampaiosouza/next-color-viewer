import React from 'react';

type errorType = {
  title: string;
  desc: string;
};

const ErrorMessage: React.FC<errorType> = ({ title, desc }) => {
  return (
    <div>
      <div className="error--container">
        <h1 className="error--title title">{title}</h1>
        <p className="error--desc desc">{desc}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
