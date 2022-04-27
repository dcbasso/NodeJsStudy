"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
test('it should run', () => {
    const user = new User_1.User();
    user.name = 'Dante';
    user.email = 'dcbasso@gmail.com';
    expect(user.name).toEqual('Dante');
});
