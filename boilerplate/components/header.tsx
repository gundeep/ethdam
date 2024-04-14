export default function Header() {
  return (
    <header className="flex justify-between items-center p-2 bg-gradient-to-r from-blue-200 to-blue-300 rounded-lg shadow-lg">
      <div></div>
      <div className="flex justify-center items-center space-x-20 ml-40 text-white">
        <img src="/logo-no-background.svg" alt="Logo" className="h-auto w-48" />
      </div>
      <a
        href={`${process.env.NEXT_PUBLIC_BANDADA_DASHBOARD_URL}/groups/off-chain/${process.env.NEXT_PUBLIC_BANDADA_GROUP_ID}`}
        className="flex space-x-1 text-white hover:underline"
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        <span>Group Dashboard</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-external-link"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
    </header>
  )
}