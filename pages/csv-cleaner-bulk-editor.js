import Project from '../components/Project.js';

export default function CSVHero() {
  return (
    <Project
      title="CSV Hero"
      subtitle="CSV Cleaner, Bulk Editor & Query Tool"
      description="CSV Hero is a free online utility that provides users a way to query and manipulate CSV datasets."
      links={[{
        label: 'website',
        href: 'https://www.csvhero.com',
        title: 'View csvhero website'
      }, {
        label: 'github',
        href: 'https://github.com/ScaredIbis/csvhero',
        title: 'View csvhero on github'
      }, {
        label: 'facebook',
        href: 'https://www.facebook.com/csvhero',
        title: 'View csvhero on facebook'
      }]}
      img="/static/csvhero.png"
    />
  );
}