import Layout from '../components/Layout.js';
import ProjectCard from '../components/ProjectCard';

const noMarginBot = {
  marginBottom: '0px'
}

const mainHeaderStyle = {
  margin: '0px',
  fontSize: '2rem'
}

const subtitleStyle = {
  margin: '0px',
  fontSize: '1.3rem'
}

const projectsContainerStyle = {
  marginTop: '10px'
}

export default function Index() {
  return (
    <Layout>
      <h1 style={mainHeaderStyle}>Chris Martin</h1>
      <span style={subtitleStyle}>Full Stack Web Developer</span>
      <h2 style={noMarginBot}>Projects</h2>
      <div style={projectsContainerStyle} className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <ProjectCard
              title="Crunchy Cloud"
              link="/crunchy-cloud"
              description="Bespoke software development"
              technologies={['Full stack development', 'Architecture design', 'Blockchain']}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <ProjectCard
              title="CSV Hero"
              link="/csv-cleaner-bulk-editor"
              description="CSV Cleaner, Bulk Editor & Query Tool"
              technologies={['react', 'redux', 'aws s3']}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <ProjectCard
              title="Flexible Crypto Trader"
              link="/flexible-crypto-trader"
              description="A framework for building and deploying digital asset traders"
              technologies={['serverless', 'nodejs', 'aws']}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <ProjectCard
              title="Ethereum Scratchies"
              link="/ethereum-scratchies"
              description="Decentralized Scratch Lottery"
              technologies={['react', 'solidity', 'web3']}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <ProjectCard
              title="Pixel Brawl"
              link="/pixel-brawl-rng-pixel-battles"
              description="Realtime RNG Pixel warfare"
              technologies={['vuejs', 'nodejs', 'firebase']}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <ProjectCard
              title="Autochecker Antispam & Checkbox Tool"
              link="/autochecker-antispam-chrome-extension"
              description="A chrome extension to help avoid marketing spam"
              technologies={['javascript', 'chrome browser extension']}
            />
          </div>
      </div>
    </Layout>
  );
}