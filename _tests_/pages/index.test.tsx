import IndexPage from '@/pages/index';
import { render } from '@/testUtils/testUtils';

describe('HomePage', () => {
  it('should have header', () => {
    const { container } = render(<IndexPage />);
    expect(container.querySelector('h1')).toHaveTextContent('This is HomePage');
  });
});
