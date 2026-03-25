exports.testData = {
    validUser: {
        username: 'Admin',
        password: 'admin123'
    },
    invalidUser: {
        username: 'Wrong',
        password: 'Wrong123'
    },
    employee: {
        firstName: 'Merry',
        lastName: 'Doe',
        empId: 'EMP' + Math.floor(Math.random() * 10000)
    }
};