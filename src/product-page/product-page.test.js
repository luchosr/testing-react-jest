import React from 'react'
import {screen, render} from '@testing-library/react'
import {ProductPage} from './index'

/* 1) - Crear un test que falle (RED).
2) - Lo MINIMO NECESARIO para que el test pase (green).
3) - Refactorizar código (clean Code, code smells). */

describe('product page exist', () => {
    it('must display a title', () => {
        render(<ProductPage />);
        expect(screen.queryByText(/product page/i)).toBeInTheDocument();
    });
});


