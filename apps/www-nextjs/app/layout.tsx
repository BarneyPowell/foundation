import '@/styles/globals.css';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Foundation: Test App</title>
      </head>
      <body className="">
        <h1>Hello world.</h1>
        <div className="">
    
              {children}
  
        </div>
      </body>
    </html>
  );
}
