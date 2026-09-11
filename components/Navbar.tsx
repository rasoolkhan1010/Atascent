'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [['Services','/#services'],['About','/#about'],['Why Atascent','/#why'],['Insights','/insights'],['Contact','/#contact']];
export default function Navbar(){
  const [open,setOpen]=useState(false);
  return <header className="nav-wrap"><nav className="nav">
    <a href="/#top" className="brand"><Image src="/atascent-logo.webp" alt="Atascent" width={44} height={44}/><span>Atascent</span></a>
    <div className="nav-links">{links.map(([label,href])=><a key={href} href={href}>{label}</a>)}</div>
    <a className="nav-cta" href="#contact">Talk to an Expert <ArrowUpRight size={15}/></a>
    <button className="menu-btn" aria-label="Open menu" onClick={()=>setOpen(true)}><Menu/></button>
  </nav>
  {open && <div className="mobile-menu"><button className="close-btn" aria-label="Close menu" onClick={()=>setOpen(false)}><X/></button><div>{links.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}<a className="mobile-cta" href="#contact" onClick={()=>setOpen(false)}>Talk to an Expert <ArrowUpRight/></a></div></div>}
  </header>
}
