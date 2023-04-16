import '@/styles/globals.css';
import React from 'react';
import { getProduct } from '@foundation/core/src/services/products'; // works
import { getContent } from '@foundation/core/src/services/content'; // works

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
        <h1>Hello world: { getProduct().name } { getContent().name }</h1>
        <div className="">
    
              {children}
  
        </div>
      </body>
    </html>
  );
}
