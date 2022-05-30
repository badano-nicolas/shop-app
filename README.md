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

3. Build and run the aplication

```
npm run start
```

This command will transpile the nodejs app and make a production build of the react app and serve it on 3000 port

4. Go to http://localhost:3000

## Notes

- Installed: sass, react-icons, react-router-dom.

## Test Cases (done and not)

- [ ] Check if theme is light.
- [ ] Switch theme and should be dark (inital light).
- [ ] Reload page after switch and should be dark.
- [ ] Amount of cart items should be 10.
- [ ] Cart should be empty.
- [ ] Add product with id 1 (from products) and stock should be -1
- [ ] After adding product cart should have 1 item.
- [ ] Click add button from cart and amout should be 2.
- [ ] Product with id 1 should be have 0 stock.
- [ ] Click add button from cart and amout should be 2 again.
- [ ] Product with id 1 should be have 0 stock again.
- [ ] Add product with id 2 (from products) and cart list should have 2 items.
- [ ] Add product with id 3 (from products) and cart list should have 3 items.
- [ ] Reload page and cart items should be 3.
- [ ] Click remove all button and cart should be empty.
- [ ] Check stock for product with id 1 and should be 2.
- [ ] Add new product and product list should be 11.


## License

[MIT](https://choosealicense.com/licenses/mit/)
