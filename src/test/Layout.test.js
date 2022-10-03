import { render, screen } from '@testing-library/react';
import App from './../App';

describe('Weather Layout', () => {
    it('should have two buttons with text "English" - "Español"', () => {
      render(<App />);
    
      expect(screen.getByRole('button', { name: 'English' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Español' })).toBeInTheDocument();
    });
    // it('the "English" button should be selected by default', () => {});

    // describe('When "English" button is selected', () => {
    //     it('should have a select with label "Weather by city:" input with options: "London", "Toronto", "Singapore"', () => {});
    // });

    // describe('When "Español" button is selected', () => {
    //     it('should have a select with label "el Tiempo en la ciudad:" input with options: "Londres", "Toronto", "Singapur"', () => {});
    // });

    // describe('When user selects an option', () => {
    //     it('should call to API with that option', () => {});
    //     it('should show the data from de API as a detail if call to API was ok', () => {})
    // })
})