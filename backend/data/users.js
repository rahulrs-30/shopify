import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Rahul',
        email: 'rahul@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Walter White',
        email: 'walter@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
];
export default users;
