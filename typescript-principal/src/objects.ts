// Type
type Order = {
    productId: string;
    price: number
}


type User = {
    firstName: string;
    age: number;
    email?: string;
    password?: string;
    orders: Order[]
};

const user: User = {
    firstName: 'João',
    age: 20,
    orders: [{productId: '1', price: 200}],
}

const printLog = (message: string) => {}

printLog(user.password!)

// Unions
type Author = {
    books: string[]
}

const author: Author & User = {
    age: 2,
    books: ['1'],
    email: 'author@email.com',
    firstName: 'João Vitor',
    orders: [],
}


// Interfaces
interface UserInterface {
    firstName: string;
    email: string
}

const emailUser: UserInterface = {
    email: 'felipe@gmail.com',
    firstName: 'Felipe',
};

interface AuthorInterface {
    books: string[],
}

const newAuthor: UserInterface & AuthorInterface = {
    email: 'felipe@gmail.com',
    firstName: 'Felipe',
    books: [],
};


