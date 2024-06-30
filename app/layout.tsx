import { useAuth } from '@/lib/useAuth';
import React, { ReactNode, useEffect } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
};

export default Layout;
