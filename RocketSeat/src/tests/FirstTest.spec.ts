import { User } from '../models/User';

test('it should run', () => {
    const user = new User();
    user.name = 'Dante';
    user.email = 'dcbasso@gmail.com'

    expect(user.name).toEqual('Dante');    
});

// describe('testing index file', () => {
//     test('double function', () => {
//       expect(double(5)).toBe(10);
//     });
  
//     test('concat function', () => {
//       expect(concat('Paul', ' ', 'McCartney')).toBe('Paul McCartney');
//     });
//   });