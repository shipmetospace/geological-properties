import { useLocation, Link } from 'react-router';
import { paths } from '@/config/paths';

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbProps {
  className?: string;
}

const ChevronRightIcon = () => (
  <svg
    className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m9 5 7 7-7 7"
    />
  </svg>
);

const HomeIcon = () => (
  <svg
    className="me-2.5 h-4 w-4"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z"
      clipRule="evenodd"
    />
  </svg>
);

const EllipsisIcon = () => (
  <svg
    className="mx-1 h-4 w-4 text-gray-400"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M6 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
);

export const Breadcrumb = ({ className = '' }: BreadcrumbProps) => {
  const location = useLocation();

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];

    // Always start with Home
    breadcrumbs.push({
      label: 'Dashboard',
      href: paths.app.dashboard.getHref(),
    });

    // Build breadcrumbs based on path segments
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;

      // Map path segments to readable labels
      let label = segment;
      switch (segment) {
        case 'app':
          label = 'Dashboard';
          break;
        case 'projects':
          label = 'Projects';
          break;
        case 'discussions':
          label = 'Discussions';
          break;
        case 'users':
          label = 'Users';
          break;
        case 'profile':
          label = 'Profile';
          break;
        default:
          // For dynamic segments like IDs, try to make them more readable
          if (
            segment.match(/^[a-f0-9-]{36}$/) ||
            segment.match(/^[a-f0-9-]+$/)
          ) {
            // UUID format or similar ID - could be a discussion ID or similar
            label = 'Details';
          } else {
            // Capitalize first letter
            label = segment.charAt(0).toUpperCase() + segment.slice(1);
          }
      }

      breadcrumbs.push({
        label,
        href: currentPath,
        isCurrentPage: index === pathSegments.length - 1,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Apply truncation logic: if more than 3 levels, show first + ellipsis + last two
  const getDisplayBreadcrumbs = (): BreadcrumbItem[] => {
    if (breadcrumbs.length <= 3) {
      return breadcrumbs;
    }

    const first = breadcrumbs[0]; // Dashboard
    const lastTwo = breadcrumbs.slice(-2); // Last two items

    return [
      first,
      {
        label: '...',
        href: '#',
        isCurrentPage: false,
      },
      ...lastTwo,
    ];
  };

  const displayBreadcrumbs = getDisplayBreadcrumbs();

  return (
    <nav className={`m-4 flex ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {displayBreadcrumbs.map((item, index) => (
          <li key={item.href} className="inline-flex items-center">
            {index > 0 && <ChevronRightIcon />}

            {index === 0 ? (
              // Home item with icon
              <Link
                to={item.href}
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white"
              >
                <HomeIcon />
                {item.label}
              </Link>
            ) : item.label === '...' ? (
              // Ellipsis item
              <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">
                ...
              </span>
            ) : item.isCurrentPage ? (
              // Current page item (not clickable)
              <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">
                {item.label}
              </span>
            ) : (
              // Regular breadcrumb item
              <Link
                to={item.href}
                className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white md:ms-2"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
