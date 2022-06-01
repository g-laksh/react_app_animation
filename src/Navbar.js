

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Challenger
      </a>
      <ul>
        <li>
        <a href="/about">About</a>
        </li>
        <li>
        <a href="/tech">Tech</a>
        </li>
        <li>
        <a href="/vision">Vision</a>
        </li>
        <li>
        <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
