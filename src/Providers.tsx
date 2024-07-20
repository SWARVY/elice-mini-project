import { QueryProvider } from './shared/util';
import { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <BrowserRouter>
        <QueryProvider>{children}</QueryProvider>
      </BrowserRouter>
    </>
  );
}
