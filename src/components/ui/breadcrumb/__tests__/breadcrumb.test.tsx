import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Breadcrumb } from '../breadcrumb';

const renderBreadcrumb = (initialPath: string) => {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Breadcrumb />
    </MemoryRouter>,
  );
};

describe('Breadcrumb', () => {
  it('renders home breadcrumb for root path', () => {
    renderBreadcrumb('/');
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders correct breadcrumbs for app path', () => {
    renderBreadcrumb('/app');
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('renders correct breadcrumbs for projects path', () => {
    renderBreadcrumb('/app/projects');
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('shows ellipsis for long paths', () => {
    renderBreadcrumb('/app/projects/123/details/settings/advanced');
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('...')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Advanced')).toBeInTheDocument();
  });

  it('handles discussion paths with UUIDs', () => {
    renderBreadcrumb('/app/discussions/abc-123-def-456');
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('...')).toBeInTheDocument();
    expect(screen.getByText('Discussions')).toBeInTheDocument();
    expect(screen.getByText('Details')).toBeInTheDocument();
  });

  it('makes current page non-clickable', () => {
    renderBreadcrumb('/app/projects');
    const currentPageElement = screen.getByText('Projects');
    expect(currentPageElement.closest('a')).toBeNull();
  });

  it('makes non-current pages clickable', () => {
    renderBreadcrumb('/app/projects');
    const homeLink = screen.getByText('Home').closest('a');
    const dashboardLink = screen.getByText('Dashboard').closest('a');

    expect(homeLink).toHaveAttribute('href', '/');
    expect(dashboardLink).toHaveAttribute('href', '/app');
  });
});
