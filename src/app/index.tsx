import { ThemeProvider } from 'flowbite-react';
import { AppProvider } from './provider';
import { AppRouter } from './router';

export const App = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </ThemeProvider>
  );
};
