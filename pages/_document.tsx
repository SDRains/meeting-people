import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="h-full">
      <header>
          <title>Meeting People Is Easy</title>
      </header>
        
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
