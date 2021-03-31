import { assertNever } from '@/utils/assertNever';

describe('assertNever()', () => {
  it('TypeScriptが想定していない値が入って来た時にErrorをthrowする', () => {
    type Color = 'white' | 'black' | 'primary';
    const checkColor = (color: Color): 'expected' => {
      switch (color) {
        case 'black': {
          return 'expected';
        }
        case 'white': {
          return 'expected';
        }
        case 'primary': {
          return 'expected';
        }
        default: {
          return assertNever(color);
        }
      }
    };
    const unexpectedColor = 'green';
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const checkUnexpectedColor = () => checkColor(unexpectedColor);
    expect(checkUnexpectedColor).toThrowError(
      new Error(`Unexpected value: ${unexpectedColor}. Should have been never.`)
    );
  });
});
