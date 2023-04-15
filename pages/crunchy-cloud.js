import Project from '../components/Project.js';

export default function CrunchyCloud() {
  return (
    <Project
      title="Crunchy Cloud"
      subtitle="Bespoke software development"
      description="I offer a range of professional software development services"
      links={[{
        label: 'website',
        href: 'https://crunchycloud.io',
        title: 'View Crunchy Cloud website'
      }]}
      img="/static/crunchycloud.png"
      imgStyle={{
        width: "500px"
      }}
    />
  );
}