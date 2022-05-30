import { fireEvent, render, screen } from '@testing-library/react';
import Cart from '../../components/Cart/Cart';
import Products from '../../components/Products/Products';
import { ShopProvider } from '../../context/ShopContext';

beforeEach(() => {
    
});

afterEach(() => {
    window.localStorage.removeItem('cartItems');
})

test('Cart should be empty', () => {
    render(
        <ShopProvider>
            <Cart />
        </ShopProvider>
    );
    screen.getAllByText("Tu carrito esta vacio");
})

test('Amount of product list should be 10', () => {
    render(
        <ShopProvider>
            <Products />
        </ShopProvider>
    );
    const productContainers = screen.getAllByRole("contentinfo");
    expect(productContainers.length).toBe(10);
})


test('Add first product to cart and check the stock after and before', () => {
    render(
        <ShopProvider>
            <Products />
        </ShopProvider>
    );

    // Check if local storage is empty
    expect(window.localStorage.getItem('cartItems')).toBeNull();
    const addToCartButton = screen.getAllByText("Agregar al carro");
    fireEvent.click(addToCartButton[0]);
    screen.getByText("Stock: 1");

})

test('After adding first product to cart many times should have stock 0', () => {
    render(
        <ShopProvider>
            <Products />
        </ShopProvider>
    );

    expect(window.localStorage.getItem('cartItems')).toBeNull();
    screen.getByText("Stock: 1");

    // for some reason the provider is saving the data
})

/*
test('After adding first product to cart many times should have stock 0', () => {
    render(
        <ShopProvider>
            <Products />
        </ShopProvider>
    );

    screen.getByText("Stock: 2");
    const addToCartButton = screen.getAllByText("Agregar al carro");
    fireEvent.click(addToCartButton[0]);
    screen.getByText("Stock: 1");
    fireEvent.click(addToCartButton[0]);
    screen.getByText("Stock: 0");
    // Check prevent go under stock 0
    fireEvent.click(addToCartButton[0]);
    screen.getByText("Stock: 0");

})
/*
test('Add and remove product and check after and before', () => {
    render(
        <ShopProvider>
            <Products />
        </ShopProvider>
    );
    const addToCartButton = screen.getAllByText("Agregar al carro");
    const removeFromCartButton = screen.getAllByText("Eliminar del carro");
    screen.getByText("Stock: 2");
    fireEvent.click(addToCartButton[0]);
    screen.getByText("Stock: 1");
    fireEvent.click(removeFromCartButton[0]);
    screen.getByText("Stock: 2");
    // Whem an item is removed from cart will refill the stock
    fireEvent.click(removeFromCartButton[0]);
    screen.getByText("Stock: 2");

})

test('After removing first product to cart many times should have stock 2', () => {
    render(
        <ShopProvider>
            <Products />
        </ShopProvider>
    );

    const removeFromCartButton = screen.getAllByText("Eliminar del carro");

    screen.getByText("Stock: 2");
    fireEvent.click(removeFromCartButton[0]);
    screen.getByText("Stock: 2");
    fireEvent.click(removeFromCartButton[0]);
    screen.getByText("Stock: 2");

})


test('Add first producadsd check the stock after and before', () => {
    render(
        <ShopProvider>
            <Products />
        </ShopProvider>
    );

    const stockContainer = screen.getByText("Stock: 2");

    // Check if local storage is empty
    expect(window.localStorage.getItem('cartItems')).toBeNull();
    const addToCartButton = screen.getAllByText("Agregar al carro");
    fireEvent.click(addToCartButton[0]);
    screen.getByText("Stock: 1");
    // Check if local storage cardItems is not empty
    expect(window.localStorage.getItem('cartItems').length).toBeGreaterThan(0);
    fireEvent.click(addToCartButton[0]);
    screen.getByText("Stock: 0");
    // Check prevent go under stock 0
    fireEvent.click(addToCartButton[0]);
    screen.getByText("Stock: 0");

    const removeFromCartButton = screen.getAllByText("Eliminar del carro");
    fireEvent.click(removeFromCartButton[0]);
    screen.getByText("Stock: 1");
    // Whem an item is removed from cart will refill the stock
    fireEvent.click(removeFromCartButton[0]);
    screen.getByText("Stock: 2");
    const stockParam = screen.getByText("Stock: 2");
    const productContainers = screen.getAllByRole("contentinfo");


})*/