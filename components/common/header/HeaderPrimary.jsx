import Link from 'next/link';

export default function HeaderPrimary() {
  return (
    <>
      <nav className="nav-primary">
        <ul>
          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>

          <li>
            <Link href="/" title="Home">
              Costume
            </Link>
          </li>

          <li>
            <Link href="/" title="Home">
              Camasi
            </Link>
          </li>

          <li>
            <Link href="/" title="Home">
              Accesorii
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="nav-secondary">
        <ul>
          <li>
            <Link href="/" title="Glamour Suits">
              Glamour Suits
            </Link>
          </li>

          <li>
            <Link href="/" title="Glamour Suits">
              Wedding suits
            </Link>
          </li>

          <li>
            <Link href="/" title="Glamour Suits">
              Office suits
            </Link>
          </li>

          <li>
            <Link href="/" title="Glamour Suits">
              Customize your suit
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
