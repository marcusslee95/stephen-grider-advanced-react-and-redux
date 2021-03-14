import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();

// });

test('renders placeholder innerHTML of App Component', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App/>, div)
  expect(div.innerHTML).toContain('Hi there!')
  
});