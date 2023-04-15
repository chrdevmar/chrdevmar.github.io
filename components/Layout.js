import Head from 'next/head';
import Header from './Header';

const contentWrapperStyle = {
  padding:'30px',
}

const Layout = props => (
  <div>
    <Head>
      <title>Chris Martin - Full Stack Developer</title>
      <meta name="description" content="Personal website of Chris Martin, Full Stack Developer from Brisbane QLD"/>
      <meta name="author" content="Chris Martin"/>

      <meta property="og:title" content="Chris Martin"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://www.cmartin.co"/>
      <meta property="og:image" content="https://www.cmartin.co/static/code-icon.png"/>
      <meta property="og:description" content="Chris Martin - Full Stack Developer"/>

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-142502032-1"></script>
      <script
        dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'UA-142502032-1');
      `}}
      />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" rel="stylesheet"/>
      <link rel="shortcut icon" href="/static/code-icon.png" type="image/png"/>
      <link rel="icon" href="/static/code-icon.png" type="image/png"/>
      <script src="https://kit.fontawesome.com/ba4b312787.js"/>
    </Head>
    <style jsx global>
      {`
        body {
          font-family: 'Titillium Web', sans-serif;
          background-color: #f7f7f7;
          margin: 0px;
        }

        .projectCard:hover {
          -webkit-box-shadow: -5px 5px 26px -22px rgba(69,65,69,1);
          -moz-box-shadow: -5px 5px 26px -22px rgba(69,65,69,1);
          box-shadow: -5px 5px 26px -22px rgba(69,65,69,1);
        }
      `}
    </style>
    <Header />
    <section style={contentWrapperStyle}>
      {props.children}
    </section>
  </div>
);

export default Layout;