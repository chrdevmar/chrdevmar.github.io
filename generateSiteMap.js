const fs = require('fs');

function walk(dir) {
    // Get all files of the current directory & iterate over them
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        // Construct whole file-path & retrieve file's stats
        const filePath = `${dir}${file}`;
        const fileStat = fs.statSync(filePath);

        if (fileStat.isDirectory()) {
        // Recurse one folder deeper
        walkSync(`${filePath}/`);
        } else {
        // Construct this file's pathname excluding the "pages" folder & its extension
        const cleanFileName = filePath
            .substr(0, filePath.lastIndexOf("."))
            .replace('pages/', '');

        // Add this file to `siteMapObj`
        siteMapObj[`/${cleanFileName}`] = {
            page: `/${cleanFileName}`,
            lastModified: fileStat.mtime
        };
        }
    });
}

function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };

const siteMapObj = {};

walk('pages/');

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

for (let path in siteMapObj) {
sitemapXml += `
    <url>
        <loc>https://www.cmartin.co${path}</loc>
        <lastmod>${
        formatDate(new Date(siteMapObj[path].lastModified))
        }</lastmod>
    </url>`;
}

sitemapXml += `
</urlset>`;


fs.writeFileSync('out/sitemap.xml', sitemapXml);
fs.writeFileSync('out/robots.txt', `Sitemap: https://www.cmartin.co/sitemap.xml
User-agent: *
Allow: /
`)
