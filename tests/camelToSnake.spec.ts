import { camelToSnake } from '../src'; // Replace with the actual path to your file

describe('camelToSnakeCase', () => {
  it('should convert a camelCase string to snake_case', () => {
    const camelString = 'myVariableName';
    const expectedSnakeString = 'my_variable_name';

    expect(camelToSnake(camelString)).toEqual(expectedSnakeString);
  });

  it('should convert an array of camelCase strings to snake_case', () => {
    const camelArray = ['firstName', 'lastName', 'emailAddress'];
    const expectedSnakeArray = ['first_name', 'last_name', 'email_address'];

    expect(camelToSnake(camelArray)).toEqual(expectedSnakeArray);
  });
});
