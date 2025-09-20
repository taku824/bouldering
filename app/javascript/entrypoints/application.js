// Application JavaScript
import React from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from '../components/HomePage.tsx';

console.log('Application.js loaded');
console.log('React:', React);
console.log('HomePage:', HomePage);

// Mount HomePage component when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded fired');
  const container = document.getElementById('homepage-root');
  console.log('Container:', container);
  if (container) {
    const root = createRoot(container);
    console.log('Root created:', root);
    root.render(React.createElement(HomePage));
    console.log('HomePage rendered');
  } else {
    console.log('Container not found!');
  }
});
