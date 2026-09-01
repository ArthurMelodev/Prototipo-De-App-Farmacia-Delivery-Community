import { RouterProvider } from 'react-router';
import { router } from './routes';
import { AppProvider } from './context/AppContext';
import { MobileContainer } from './components/MobileContainer';

export default function App() {
  return (
    <AppProvider>
      <MobileContainer>
        <RouterProvider router={router} />
      </MobileContainer>
    </AppProvider>
  );
}
