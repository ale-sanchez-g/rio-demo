import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the launchdarkly-react-client-sdk globally
jest.mock('launchdarkly-react-client-sdk', () => ({
  useFlags: jest.fn(),
}));

describe('App dynamic with LaunchDarkly feature flag', () => {
  describe('when trunkBaseDev is true', () => {
    beforeEach(() => {
      const { useFlags } = require('launchdarkly-react-client-sdk');
      useFlags.mockImplementation(() => ({ trunkBaseDev: true }));
    });
    it('renders element True', () => {
      render(<App />);
      const txtElement = screen.getByText(/True/i);
      expect(txtElement).toBeInTheDocument();
    });    
    it('renders the button', () => {
      render(<App />);
      const buttonElement = screen.getByText('Click Me');
      expect(buttonElement).toBeInTheDocument();
    });

    it('changes the background color of the header when trunkBaseDev is true', () => {
      render(<App />);
      const headerElement = document.getElementById('App-header');
      expect(headerElement).toHaveStyle('background-color: #00844B');
    });
  });

  describe('when trunkBaseDev is false', () => {
    beforeEach(() => {
      const { useFlags } = require('launchdarkly-react-client-sdk');
      useFlags.mockImplementation(() => ({ trunkBaseDev: false }));
    });
    it('renders element False', () => {
      render(<App />);
      const txtElement = screen.getByText(/False/i);
      expect(txtElement).toBeInTheDocument();
    });
    it('does not render the button', () => {
      render(<App />);
      const buttonElement = screen.queryByText('Click Me');
      expect(buttonElement).not.toBeInTheDocument();
    });
    it('Background color of the header when trunkBaseDev is false', () => {
      render(<App />);
      const headerElement = document.getElementById('App-header');
      expect(headerElement).toHaveStyle('background-color: #373841');
    });
  });

  describe('when reactExample is true', () => {
    beforeEach(() => {
      const { useFlags } = require('launchdarkly-react-client-sdk');
      useFlags.mockImplementation(() => ({ reactExample: true }));
    });
    it('renders the Toggle component', () => {
      render(<App />);
      const toggleElement = document.getElementById('toggle');
      expect(toggleElement).toBeInTheDocument();
    });
  });
  
  describe('when reactExample is false', () => {
    beforeEach(() => {
      const { useFlags } = require('launchdarkly-react-client-sdk');
      useFlags.mockImplementation(() => ({ reactExample: false }));
    });
    it('renders the Toggle component', () => {
      render(<App />);
      const toggleElement = document.getElementById('toggle');
      expect(toggleElement).not.toBeInTheDocument();
    });
  });
});