import Link from 'next/link';

const headerStyle = {
  textAlign: 'center',
  backgroundColor: '#9DB5B2',
  height: '50px',
  padding: '10px 30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}

const linkStyle = {
  color: '#3B413C',
  textDecoration: 'none',
  fontSize: '1.5rem'
};

const socialLinkStyle = {
  ...linkStyle,
  fontSize: '1.7rem',
  marginLeft: '10px'
}

const Header = () => (
  <section style={headerStyle}>
    <Link href="/">
      <a style={linkStyle}><strong>cmartin.co</strong></a>
    </Link>
    <div>
      <Link href="/">
        <a style={socialLinkStyle} href="https://github.com/ScaredIbis" target="_blank"><i className="fab fa-github-square"></i></a>
      </Link>
      <Link href="/">
        <a style={socialLinkStyle} href="https://linkedin.com/in/ScaredIbis" target="_blank"><i className="fab fa-linkedin"></i></a>
      </Link>
    </div>
  </section>
);

export default Header;