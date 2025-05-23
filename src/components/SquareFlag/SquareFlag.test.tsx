import { render, screen } from '@testing-library/react';
import { SquareFlag } from './SquareFlag';
import { SQUAREFLAGSIZE_DIMENSIONS } from '../common';
import { CountryFlagEU } from '../flags/countries/CountryFlagEU';

describe('SquareFlag', () => {
  test('Renders a SquareFlag component with a title', () => {
    render(<SquareFlag flag={CountryFlagEU} />);
    const flag = screen.getByRole('img');

    expect(flag).toHaveAccessibleName('European Union');
  });

  test(`Renders a SquareFlag component at default size of 'medium' (24×24)`, () => {
    render(<SquareFlag flag={CountryFlagEU} />);
    const flag = screen.getByRole('img');

    expect(flag).toBeInTheDocument();
    expect(flag).toHaveAttribute('height', '24');
    expect(flag).toHaveAttribute('width', '24');
  });

  for (const [sizeName, sizeValue] of Object.entries(
    SQUAREFLAGSIZE_DIMENSIONS,
  )) {
    test(`Renders a SquareFlag component at size '${sizeName}' as ${sizeValue}×${sizeValue}`, () => {
      render(<SquareFlag flag={CountryFlagEU} size={sizeName} />);
      const flag = screen.getByRole('img');

      expect(flag).toBeInTheDocument();
      expect(flag).toHaveAttribute('height', `${sizeValue}`);
      expect(flag).toHaveAttribute('width', `${sizeValue}`);
    });
  }

  test(`Renders a SquareFlag component at a size in pixels`, () => {
    render(<SquareFlag flag={CountryFlagEU} size="512px" />);
    const flag = screen.getByRole('img');

    expect(flag).toBeInTheDocument();
    expect(flag).toHaveAttribute('height', '512px');
    expect(flag).toHaveAttribute('width', '512px');
  });

  test(`Renders a SquareFlag component at a size in em`, () => {
    render(<SquareFlag flag={CountryFlagEU} size="1.5em" />);
    const flag = screen.getByRole('img');

    expect(flag).toBeInTheDocument();
    expect(flag).toHaveAttribute('height', '1.5em');
    expect(flag).toHaveAttribute('width', '1.5em');
  });

  test(`Renders a SquareFlag component at a size in rem`, () => {
    render(<SquareFlag flag={CountryFlagEU} size="2rem" />);
    const flag = screen.getByRole('img');

    expect(flag).toBeInTheDocument();
    expect(flag).toHaveAttribute('height', '2rem');
    expect(flag).toHaveAttribute('width', '2rem');
  });

  test('Renders a SquareFlag component with arbitrary HTML attributes', () => {
    render(<SquareFlag flag={CountryFlagEU} data-testid="test-id" />);
    const flag = screen.getByRole('img');

    expect(flag).toHaveAttribute('data-testid', 'test-id');
  });
});
