import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { describe, it, expect } from 'vitest';
import Skills from './Skills';

describe('Skills', () => {
  it('renders section heading', () => {
    render(<Skills />);
    expect(screen.getByText('Expertise')).toBeInTheDocument();
    expect(screen.getByText(/Skills &/)).toBeInTheDocument();
    expect(screen.getByText('Technologies')).toBeInTheDocument();
  });

  it('renders all skill badges', () => {
    render(<Skills />);
    expect(screen.getByText('React.js')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Angular2+')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
  });

  it('renders languages section', () => {
    render(<Skills />);
    expect(screen.getByText('Languages')).toBeInTheDocument();
    expect(screen.getByText('Telugu')).toBeInTheDocument();
    expect(screen.getByText('Hindi')).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
  });
});
