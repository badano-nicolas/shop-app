import { render } from '@testing-library/react';
import { ShopProvider } from '../../context/ShopContext';

afterEach(() => {
    window.localStorage.removeItem('cartItems');
})

test('Render Add Products', () => {
    render(
        <ShopProvider>
        </ShopProvider>
    );

});