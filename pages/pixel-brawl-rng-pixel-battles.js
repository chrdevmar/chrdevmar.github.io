import Project from '../components/Project.js';

export default function PixelBrawl() {
  return (
    <Project
        title="Pixel Brawl"
        subtitle="Realtime RNG Pixel Battles"
        description="Pixel brawl is a passive pixel warfare game in which users try to predict the winning team."
        links={[{
            label: 'website',
            title: 'View pixel brawl',
            href: 'https://pixelbrawl.com'
        }, {
            label: 'github (frontend)',
            title: 'View pixel brawl frontend on github',
            href: 'https://github.com/ScaredIbis/combatpixels'
        }, {
            label: 'github (server)',
            title: 'View pixel brawl server on github',
            href: 'https://github.com/ScaredIbis/combatpixels-server'
        }]}
        img="/static/pixelbrawl.png"
    />
  );
}