type BrowserTabShellProps = {
  height: number;
};

function BrowserTabShell({ height }: BrowserTabShellProps) {
  const BASE_HEIGHT = 95;
  const deltaY = height - BASE_HEIGHT;
  const pathD = `
    M10 1
    H190.172
    C195.142 1.00005 199.172 5.02947 199.172 10
    V34.9365
    C199.172 41.0115 204.097 45.9365 210.172 45.9365
    H241
    C245.971 45.9365 250 49.966 250 54.9365
    V${86 + deltaY}
    C250 ${90.9706 + deltaY} 245.971 ${95 + deltaY} 241 ${95 + deltaY}
    H10
    C5.02944 ${95 + deltaY} 1 ${90.9706 + deltaY} 1 ${86 + deltaY}
    V10
    C1 5.02944 5.02944 1 10 1
    Z
    `;

  return (
    <svg
      width="100%"
      viewBox={`0 0 256 ${height + 10}`} // padding
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backdropFilter: "blur(2px)" }}
    >
      <path
        id="initialPathId"
        d="M17.5 34H181.5C190.613 34 198 26.6127 198 17.5C198 8.3873 190.613 1 181.5 1H17.5C8.3873 1 1 8.3873 1 17.5C1 26.6127 8.3873 34 17.5 34Z"
        fill="#CCCCCC"
        fillOpacity="0.05"
        stroke="#666666"
        strokeWidth="1"
      />

      <path id="animatedPathId" xmlns="http://www.w3.org/2000/svg" d={pathD} />
    </svg>
  );
}

export { BrowserTabShell };
