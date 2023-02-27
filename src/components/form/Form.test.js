import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';
import '@testing-library/jest-dom/extend-expect';

describe('Form', () => {

    test('renders Form component', () => {
        const { getByLabelText, getByText } = render(<Form />);
        const textFieldElement = getByLabelText('Busca un repositorio de github');
        const buttonElement = getByText('Buscar');
        expect(textFieldElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });

    test('should call the callData function with the correct parameters when the button is clicked', () => {
        const callDataMock = jest.fn();
        const setParamsMock = jest.fn();
        const params = { name: 'test', page: 1 };

        render(<Form callData={callDataMock} setParams={setParamsMock} params={params} />);

        const textField = screen.getByLabelText('Busca un repositorio de github');
        fireEvent.change(textField, { target: { value: 'test' } });

        const button = screen.getByRole('button', { name: 'Buscar' });
        fireEvent.click(button);

        expect(setParamsMock).toHaveBeenCalledWith({ name: 'test', page: 1 });
        expect(callDataMock).toHaveBeenCalledWith({ name: 'test', page: 1 });
    });

})