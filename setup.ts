import fs from 'fs';
import path from 'path';

const dirs = [
  'src/components',
  'src/pages',
  'src/pages/admin'
];

dirs.forEach(d => fs.mkdirSync(d, { recursive: true }));

const components = ['Hero', 'About', 'Expertise', 'Products', 'History', 'News', 'Contact', 'Footer'];
components.forEach(c => {
  fs.writeFileSync(`src/components/${c}.tsx`, `export default function ${c}() { return <section className="py-20 text-center text-white border-b border-white/10">${c} Section</section>; }`);
});

const pages = ['Greeting', 'HistoryPage', 'Facility', 'Certifications', 'Organization', 'Directions', 'ProductsPage', 'MainController', 'Display', 'Others', 'Process'];
pages.forEach(p => {
  fs.writeFileSync(`src/pages/${p}.tsx`, `import Navbar from '../components/Navbar';\nexport default function ${p}() { return <div className="min-h-screen bg-black text-white"><Navbar /><div className="pt-32 text-center">${p} Page</div></div>; }`);
});

fs.writeFileSync('src/pages/admin/AdminLogin.tsx', `export default function AdminLogin() { return <div className="min-h-screen bg-black text-white pt-32 text-center">Admin Login</div>; }`);
fs.writeFileSync('src/pages/admin/AdminDashboard.tsx', `export default function AdminDashboard() { return <div className="min-h-screen bg-black text-white pt-32 text-center">Admin Dashboard</div>; }`);
