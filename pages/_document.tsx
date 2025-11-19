import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link rel="icon" type="image/png" href="/static/favicons/favicon-new.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/favicon-new.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-new.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-new.png" />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#14b8a6" />
          <meta name="msapplication-TileColor" content="#14b8a6" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#111827" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          {/* GitHub Pages SPA redirect script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(l) {
                  if (l.search[1] === '/' ) {
                    var decoded = l.search.slice(1).split('&').map(function(s) { 
                      return s.replace(/~and~/g, '&')
                    }).join('?');
                    window.history.replaceState(null, null,
                        l.pathname.slice(0, -1) + decoded + l.hash
                    );
                  }
                }(window.location))
              `,
            }}
          />
        </Head>
        <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
