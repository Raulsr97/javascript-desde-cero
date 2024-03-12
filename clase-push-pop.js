// methods that modify the oringinal array (Mutability)

//push()

const countries = ['USA', 'Mexico', 'Canada']

const newCountries = countries.push('Germany', 'Brazil')

console.log(countries);
console.log(newCountries);

// pop()

const removeCountry = countries.pop()
console.log(countries);
console.log(removeCountry);

// exercise: Managing a Stack

let bookCart = []

const addToCartAction = 'addToCart'
const removeFromCartAction = 'removeFromCart'
const viewCartAction = 'viewCart'

function viewCart () {
    console.log('Current cart of books: ', bookCart);
}

function performCartActions (action, newBook) {
    switch (action) {
        case addToCartAction:
            bookCart.push(newBook)
            break;
        case removeFromCartAction:
            if (bookCart.length === 0) {
                console.log('Cart is empty. No books to remove');
            } else {
                const removedBook = bookCart.pop()
                console.log(`Removed book form the cart: ${removedBook}`);
            }
            break;
        case viewCartAction:
            viewCart()
            break;
    
        default:
            console.log('Invalid action, Please choose a valid option');
            
    }
}

performCartActions(addToCartAction, 'El hombre en busca de sentido' )
performCartActions(viewCartAction)
performCartActions(addToCartAction, 'A sangre fria')
performCartActions(viewCartAction)
performCartActions(removeFromCartAction)


