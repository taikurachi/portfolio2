import { Highlight, themes } from "prism-react-renderer";

export default function CodeBlock({ children, language = "javascript" }) {
  return (
    <Highlight
      theme={themes.dracula}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} p-4 rounded-lg overflow-x-auto text-sm font-mono border border-gray-700 mb-4`}
          style={style}
        >
          {tokens.map((line, i) => {
            const { key: lineKey, ...lineProps } = getLineProps({
              line,
              key: i,
            });
            return (
              <div key={i} {...lineProps}>
                {line.map((token, key) => {
                  const { key: tokenKey, ...tokenProps } = getTokenProps({
                    token,
                    key,
                  });
                  return <span key={key} {...tokenProps} />;
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
}
