import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"


const initialValue = 'One Punch';

describe('Pruebas del hook useFetchGifs', () => { 
    test('debe de regresar el estado inicial', () => { 
        
        const { result } =renderHook( () => useFetchGifs(initialValue));
        const {images, isLoading} = result.current;

        expect ( images.length ).toBe(0);
        expect ( isLoading ).toBeTruthy();
     });

    test('debe de regresar un arreglo de imagenes y el is Loadding en false', async() => { 
        
        const { result } =renderHook( () => useFetchGifs(initialValue));
        await waitFor( () => 
            expect(result.current.images.length).toBeGreaterThan(0)
        );
        
        const {images, isLoading} = result.current;

        expect ( images.length ).toBeGreaterThan(0);
        expect ( isLoading ).toBeFalsy();
     });
 })