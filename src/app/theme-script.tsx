export function ThemeScript() {
  const script = `
    (function() {
      try {
        var stored = localStorage.getItem('pg-portfolio-theme');
        if (stored === 'dark') {
          document.documentElement.classList.add('dark');
        } else if (stored === 'light') {
          document.documentElement.classList.remove('dark');
        } else {
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
          }
        }
      } catch (e) {}
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
