import { Outlet } from 'react-router-dom';
import { LanguageProvider } from '../components/common/LanguageProvider';
import ScrollToTopButton from '../components/common/ScrollToTopButton';

/**
 * A root layout component that handles the main layout structure.
 *
 * @returns The JSX for the root layout.
 */
export default function RootLayout(): JSX.Element {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen flex flex-col">
        <main className="flex-grow">
          <Outlet />
        </main>
        <ScrollToTopButton />
      </div>
    </LanguageProvider>
  );
}