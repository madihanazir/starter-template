import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
  { title: 'Github', href: "https://github.com/madihanazir" },
  { title: 'Twitter', href: "https://x.com/madsiuuuu" },
  { title: 'Instagram', href: "#" }, // You might want to add a real Instagram link here
  { title: 'LinkedIn', href: "https://www.linkedin.com/in/madiha-n/" },
];

export const Footer = () => {
  return ( 
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container"></div>
      <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8"> 
        <div className="text-white/40">&copy; 2025. All rights reserved</div>
        <div>
          <nav className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            {footerLinks.map((link) => (
              <a 
                href={link.href} // ← FIXED: Use the actual link href
                key={link.title} 
                target="_blank" // Opens in new tab
                rel="noopener noreferrer" // Security best practice
                className="inline-flex items-center gap-1.5 hover:text-emerald-300 transition-colors relative z-20"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};