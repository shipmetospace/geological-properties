import { AppProvider } from './provider';
import { AppRouter } from './router';

export const App = () => {
  return (
    <div className="{{ if .Params.white_bg }}bg-gray-50 dark:bg-gray-900{{ else }}bg-gray-50 dark:bg-gray-900{{ end }} antialiased">
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </div>
  );
};
