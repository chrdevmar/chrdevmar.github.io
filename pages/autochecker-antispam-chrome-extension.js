import Project from '../components/Project.js';

export default function Autochecker() {
  return (
    <Project
        title="Autochecker Antispam & Checkbox tool"
        subtitle="A chrome extension to help avoid marketing spam"
        description="Autochecker attempts to avoid marketing spam and automatically accepts terms and conditions when filling out forms."
        links={[{
            label: 'website',
            href: 'https://chrome.google.com/webstore/detail/autochecker-antispam-chec/cgjodoppdnlnjliiiddckimhdjjpjdmk?hl=en',
            title: 'View in chrome webstore'
        }, {
            label: 'github',
            href: 'https://github.com/ScaredIbis/autochecker',
            title: 'View autochecker on github'
        }]}
        img="/static/autochecker.png"
    />
  );
}