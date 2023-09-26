import 'jest';

import { snakeToCamel } from '../src';

describe('snakeToCamel', () => {
  it('should convert object keys from snake_case to camelCase', () => {
    const input = {
      user_name: 'John',
      age: 30,
      is_active: true,
    };

    const expectedOutput = {
      userName: 'John',
      age: 30,
      isActive: true,
    };

    expect(snakeToCamel(input)).toEqual(expectedOutput);
  });

  it('should handle arrays of objects.', () => {
    const input = [
      {
        first_name: 'Alice',
        last_name: 'Johnson',
      },
      {
        first_name: 'Bob',
        last_name: 'Smith',
      },
    ];

    const expectedOutput = [
      {
        firstName: 'Alice',
        lastName: 'Johnson',
      },
      {
        firstName: 'Bob',
        lastName: 'Smith',
      },
    ];

    expect(snakeToCamel(input)).toEqual(expectedOutput);
  });

  it('should handle nested objects', () => {
    const input = {
      person_info: {
        first_name: 'Alice',
        last_name: 'Johnson',
      },
      is_active: true,
    };

    const expectedOutput = {
      personInfo: {
        firstName: 'Alice',
        lastName: 'Johnson',
      },
      isActive: true,
    };

    expect(snakeToCamel(input)).toEqual(expectedOutput);
  });
});
