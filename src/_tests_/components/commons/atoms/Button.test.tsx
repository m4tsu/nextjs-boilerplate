import { Button } from '@/components/commons/atoms/Button';
import { render } from '@/lib/testUtils/testUtils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  it('should have normal Button styles', () => {
    const { container } = render(<Button>テストボタン</Button>);
    expect(container.querySelector('button')).toHaveStyle(
      'color: #666666; border: 1px solid #DDDDDD;'
    );
  });
  it('onClick event is working', () => {
    let count = 0;
    const handleClick = () => {
      count += 1;
    };
    render(<Button onClick={handleClick}>テストボタン</Button>);
    userEvent.click(screen.getByRole('button'));
    expect(count).toBe(1);
  });
});
