import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { describe, it, expect } from 'vitest';
import Experience from './Experience';

describe('Experience', () => {
  it('renders section heading', () => {
    render(<Experience />);
    expect(screen.getByText('Career')).toBeInTheDocument();
    expect(screen.getByText(/Work/)).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it('renders all job titles', () => {
    render(<Experience />);
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Technical Consultant')).toBeInTheDocument();
    expect(screen.getByText('Consultant')).toBeInTheDocument();
    expect(screen.getByText('Senior Software Developer')).toBeInTheDocument();
  });

  it('renders company names', () => {
    render(<Experience />);
    expect(screen.getByText('ValueMomentum')).toBeInTheDocument();
    expect(screen.getByText('Rite Software Solutions')).toBeInTheDocument();
    expect(screen.getByText('Capgemini India Ltd')).toBeInTheDocument();
    expect(screen.getByText('Telebu Communications')).toBeInTheDocument();
  });

  it('renders experience periods', () => {
    render(<Experience />);
    expect(screen.getByText('May 2025 – July 2025')).toBeInTheDocument();
    expect(screen.getByText('June 2024 – April 2025')).toBeInTheDocument();
    expect(screen.getByText('July 2021 – February 2024')).toBeInTheDocument();
    expect(screen.getByText('July 2019 – May 2021')).toBeInTheDocument();
  });

  it('renders highlight badges', () => {
    render(<Experience />);
    expect(screen.getByText('Micro-Frontend')).toBeInTheDocument();
    expect(screen.getByText('Design Tokens')).toBeInTheDocument();
    expect(screen.getByText('Guidewire Jutro')).toBeInTheDocument();
    expect(screen.getByText('WebRTC')).toBeInTheDocument();
  });
});
