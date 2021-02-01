// import { render } from '@/lib/testUtils/testUtils';
import IndexPage from '@/pages/index';
import { render } from '@testing-library/react';

describe('Index Page', () => {
  it("should have header 'Welcome to Next.js!' ", () => {
    const { container } = render(<IndexPage />);
    expect(container.querySelector('h1')).toHaveTextContent(
      'Welcome to Next.js!'
    );
  });
});
