import Project from '../components/Project.js';

export default function FlexibleCryptoTrader() {
  return (
    <Project
      title="Flexible Crypto Trader"
      subtitle="A framework for building custom digital asset traders"
      description="Flexible crypto trader makes it easy for developers to build and deploy cryptocurrency trading bots for any exchange that has an api."
      links={[{
        label: 'github',
        href: 'https://github.com/ScaredIbis/flexible-crypto-trader',
        title: 'View flexible crypto trader on github'
      }]}
    />
  );
}