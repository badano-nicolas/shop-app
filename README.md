# Shop app

Shop app written as code challenge using React

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

1. Clone this repository

```
git clone https://github.com/badano-nicolas/shop-app.git
cd shop-app
```

2. Install dependencies, for server and client.

```
npm install && cd client/ && npm install
```

### Run server

1. Build and run the aplication

```
npm start
```

This command will transpile the nodejs app and make a production build of the react app and serve it on 3000 port

2. Go to http://localhost:3000

### Run tests

1. Run test cases

```
npm run test
```

###

## Notes

- Installed: sass, react-icons, react-router-dom.

## Test Cases (done and not)

Products:

- [x] Amount of product list should be 10.
- [x] Add first product to cart and check the stock after and before.
- [ ] After adding first product to cart many times should have stock 0.
- [ ] Add and remove product and check after and before.
- [ ] After removing first product to cart many times should have stock 2.

Cart:

- [x] Cart should be empty.

Cart & Products:

- [ ] Click firs product to cart (from products) and remove it (from cart), the stock should be 2 again.
- [ ] Click add product from 3 product, cart list should be 3.
- [ ] Add one product to cart and click remove all button, cart should be empty.
- [ ] Add one product and check if total in cart is correct.

AddProduct

- [ ] Add new product and product list should be 11.

## License

[MIT](https://choosealicense.com/licenses/mit/)
