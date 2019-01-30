/**
 * @fileoverview Enforces interface names are prefixed with "I"
 * @author Danny Fritz
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import rule from '../../src/rules/interface-name-prefix';
import { RuleTester } from 'eslint';

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parser: '@typescript-eslint/parser'
});

ruleTester.run('interface-name-prefix', rule, {
  valid: [
    `
interface Animal {
    name: string;
}
        `,
    {
      code: `
interface IAnimal {
    name: string;
}
            `,
      options: ['always']
    },
    {
      code: `
interface IIguana {
    name: string;
}
            `,
      options: ['always']
    },
    {
      code: `
interface Iguana {
    name: string;
}
            `,
      options: ['never']
    },
    {
      code: `
interface Animal {
    name: string;
}
            `,
      options: ['never']
    },
    {
      code: `
interface I18n {
    name: string;
}
            `,
      options: ['never']
    }
  ],
  invalid: [
    {
      code: `
interface IAnimal {
    name: string;
}
            `,
      errors: [
        {
          message: 'Interface name must not be prefixed with "I".',
          line: 2,
          column: 11
        }
      ]
    },
    {
      code: `
interface Animal {
    name: string;
}
            `,
      options: ['always'],
      errors: [
        {
          message: 'Interface name must be prefixed with "I".',
          line: 2,
          column: 11
        }
      ]
    },
    {
      code: `
interface Iguana {
    name: string;
}
            `,
      options: ['always'],
      errors: [
        {
          message: 'Interface name must be prefixed with "I".',
          line: 2,
          column: 11
        }
      ]
    },
    {
      code: `
interface IIguana {
    name: string;
}
            `,
      options: ['never'],
      errors: [
        {
          message: 'Interface name must not be prefixed with "I".',
          line: 2,
          column: 11
        }
      ]
    },
    {
      code: `
interface IAnimal {
    name: string;
}
            `,
      options: ['never'],
      errors: [
        {
          message: 'Interface name must not be prefixed with "I".',
          line: 2,
          column: 11
        }
      ]
    }
  ]
});