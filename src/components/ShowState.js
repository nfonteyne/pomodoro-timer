export default function ShowState(props) {
    const renderStateIcon = () => {
        switch (props.state) {
          case 'Focus':
            return (
                <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="24"
                width="24"
                {...props}
              >
                <path d="M19.864 8.465a3.505 3.505 0 00-3.03-4.449A3.005 3.005 0 0014 2a2.98 2.98 0 00-2 .78A2.98 2.98 0 0010 2c-1.301 0-2.41.831-2.825 2.015a3.505 3.505 0 00-3.039 4.45A4.028 4.028 0 002 12c0 1.075.428 2.086 1.172 2.832A4.067 4.067 0 003 16c0 1.957 1.412 3.59 3.306 3.934A3.515 3.515 0 009.5 22c.979 0 1.864-.407 2.5-1.059A3.484 3.484 0 0014.5 22a3.51 3.51 0 003.19-2.06 4.006 4.006 0 003.138-5.108A4.003 4.003 0 0022 12a4.028 4.028 0 00-2.136-3.535zM9.5 20c-.711 0-1.33-.504-1.47-1.198L7.818 18H7c-1.103 0-2-.897-2-2 0-.352.085-.682.253-.981l.456-.816-.784-.51A2.019 2.019 0 014 12c0-.977.723-1.824 1.682-1.972l1.693-.26-1.059-1.346a1.502 1.502 0 011.498-2.39L9 6.207V5a1 1 0 012 0v13.5c0 .827-.673 1.5-1.5 1.5zm9.575-6.308l-.784.51.456.816c.168.3.253.63.253.982 0 1.103-.897 2-2.05 2h-.818l-.162.802A1.502 1.502 0 0114.5 20c-.827 0-1.5-.673-1.5-1.5V5c0-.552.448-1 1-1s1 .448 1 1.05v1.207l1.186-.225a1.502 1.502 0 011.498 2.39l-1.059 1.347 1.693.26A2.002 2.002 0 0120 12c0 .683-.346 1.315-.925 1.692z" />
              </svg>
            );
          case 'Short Break':
            return (
            <svg fill="none" viewBox="0 0 24 24" height="24" width="24" {...props}>
            <path
              fill="currentColor"
              d="M6 2.5a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z"
            />
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M13 21.5a6.002 6.002 0 005.917-5H19a4 4 0 000-8v-1H1v8a6 6 0 006 6h6zM3 9.5v6a4 4 0 004 4h6a4 4 0 004-4v-6H3zm18 3a2 2 0 01-2 2v-4a2 2 0 012 2z"
              clipRule="evenodd"
            />
            <path
              fill="currentColor"
              d="M9 3.5a1 1 0 112 0v2a1 1 0 11-2 0v-2zM14 2.5a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1z"
            />
          </svg>
          );
          case 'Long Break':
            return (
                <svg fill="none" viewBox="0 0 24 24" height="24" width="24" {...props}>
            <path
              fill="currentColor"
              d="M6 2.5a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z"
            />
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M13 21.5a6.002 6.002 0 005.917-5H19a4 4 0 000-8v-1H1v8a6 6 0 006 6h6zM3 9.5v6a4 4 0 004 4h6a4 4 0 004-4v-6H3zm18 3a2 2 0 01-2 2v-4a2 2 0 012 2z"
              clipRule="evenodd"
            />
            <path
              fill="currentColor"
              d="M9 3.5a1 1 0 112 0v2a1 1 0 11-2 0v-2zM14 2.5a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1z"
            />
          </svg>
            );
          default:
            return null;
        }
      };

      return (
        <>{renderStateIcon()}</>
      )
}