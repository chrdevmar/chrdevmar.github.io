import Project from '../components/Project.js';

export default function EthereumScratchies() {
  return (
    <Project
        title="Ethereum Scratchies"
        subtitle="Decentralized Scratch Lottery"
        description="Ethereum scratchies is a scratch lottery game for the Ethereum blockchain."
        links={[{
            label: 'website',
            title: 'View ethereum scratchies',
            href: 'https://ethscratchies.cmartin.co'
        }, {
            label: 'github',
            title: 'View ethereum scratchies on github',
            href: 'https://github.com/ScaredIbis/eth-scratch-lottery'
        }]}
        img="/static/ethscratchies.png"
    />
  );
}