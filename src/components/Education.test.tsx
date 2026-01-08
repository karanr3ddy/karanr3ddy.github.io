import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Education from './Education';

describe('Education', () => {
  it('renders section heading', () => {
    render(<Education />);
    expect(screen.getByText('Background')).toBeInTheDocument();
    expect(screen.getByText(/Education &/)).toBeInTheDocument();
    expect(screen.getByText('Certifications')).toBeInTheDocument();
  });

  it('renders education card', () => {
    render(<Education />);
    expect(screen.getByText('Academic Background')).toBeInTheDocument();
    expect(screen.getByText('B.Tech / B.E.')).toBeInTheDocument();
    expect(screen.getByText('Vaagdevi Engineering College, Warangal')).toBeInTheDocument();
  });

  it('renders certification card', () => {
    render(<Education />);
    expect(screen.getByText('Certification')).toBeInTheDocument();
    expect(screen.getByText('Professional Credentials')).toBeInTheDocument();
    expect(screen.getByText('InsuranceSuite 10.0 Developer')).toBeInTheDocument();
    expect(screen.getByText('Guidewire Certified Professional')).toBeInTheDocument();
  });
});
