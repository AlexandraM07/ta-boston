import Link from 'next/link';

export default function FooterPrimary() {
  return (
    <div className="container footer-primary-inner">
      <nav className="footer-nav">
        <ul>
          <li>
            <Link href="/" title="Informatii">
              Information
            </Link>
          </li>

          <li>
            <Link href="/" title="Informatii">
              Contact us
            </Link>
          </li>

          <li>
            <Link href="/" title="Informatii">
              Track my order
            </Link>
          </li>

          <li>
            <Link href="/" title="Informatii">
              Shopping
            </Link>
          </li>

          <li>
            <Link href="/" title="Informatii">
              Free returns*
            </Link>
          </li>

          <li>
            <Link href="/" title="Informatii">
              My account
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Services">
              Services
            </Link>
          </li>

          <li>
            <Link href="/" title="Ship to store">
              Ship to store
            </Link>
          </li>

          <li>
            <Link href="/" title="Gift card">
              Gift card
            </Link>
          </li>

          <li>
            <Link href="/" title="Online only">
              Online only
            </Link>
          </li>

          <li>
            <Link href="/" title="Tips & tricks">
              Tips & tricks
            </Link>
          </li>

          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Loyalty programs">
              Loyalty programs
            </Link>
          </li>

          <li>
            <Link href="/" title="Sign up to the simons">
              Sign up to the simons
            </Link>
          </li>

          <li>
            <Link href="/" title="My account">
              My account
            </Link>
          </li>

          <li>
            <Link href="/" title="Conditions">
              Conditions
            </Link>
          </li>

          <li>
            <Link href="/" title="Faq">
              Faq
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Careers">
              Careers
            </Link>
          </li>

          <li>
            <Link href="/" title="About us">
              About us
            </Link>
          </li>

          <li>
            <Link href="/" title="Our story">
              Our story
            </Link>
          </li>

          <li>
            <Link href="/" title="Art & culture">
              Art & culture
            </Link>
          </li>

          <li>
            <Link href="/" title="Our private labels">
              Our private labels
            </Link>
          </li>

          <li>
            <Link href="/" title="Stores">
              Stores
            </Link>
          </li>
        </ul>
      </nav>

      <section className="footer-contact">
        <h1>
          <span>Thread affair</span> Milano
        </h1>

        <p>
          Largo Augusto 3, Milano, 20122, Milano, IT
          <a href="tel:+39 02 760 003 66">Tel: 0039 02 760 003 66</a>
          <a href="mailto:office@thread-affair.com">office@thread-affair.com</a>
        </p>
      </section>

      <nav className="footer-support">
        <ul>
          <li>
            <a href="tel:+0741123345" title="Call us">
              <i className="fa-solid fa-phone"></i>Support
            </a>
          </li>

          <li>
            <a href="/" title="Chat">
              <i className="fa-regular fa-comments"></i>Chat
            </a>
          </li>

          <li>
            <a href="email" title="Email">
              <i className="fa-solid fa-envelope-open-text"></i>Email
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
