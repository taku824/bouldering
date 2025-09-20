import React from 'react';

interface HomePageProps {
  [key: string]: any;
}

const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <div>
      <h1>TOPページ</h1>
    </div>
  );
};

export default HomePage;
