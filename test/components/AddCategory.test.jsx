import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas del componente <AddCategory />', () => { 
    const inputValue = 'Hola'
    
    test('debe de cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewValue={ () =>{} } />);
        const input = screen.getByRole( 'textbox' );

        fireEvent.input ( input, { target: { value: inputValue }} );
        expect( input.value ).toBe( inputValue );
    });

    test('debe de llamar onNewValue() si el input tiene un valor', () => { 

        const onNewValue = jest.fn();

        render(<AddCategory onNewValue={ onNewValue } />);
        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );

        fireEvent.input ( input, { target: { value: inputValue }} );
        fireEvent.submit( form );

        expect( input.value ).toBe('');
        expect( onNewValue ).toHaveBeenCalled();
        expect( onNewValue ).toHaveBeenCalledTimes(1);
        expect( onNewValue ).toHaveBeenCalledWith( inputValue );
    });

    test('no se debe de llamar el onNewValue si el input esta vacio', () => { 
        const onNewValue = jest.fn();

        render(<AddCategory onNewValue={ onNewValue } />);
        
        const form = screen.getByRole( 'form' );
        fireEvent.submit( form );
        expect ( onNewValue ).not.toHaveBeenCalled();
     });
 })