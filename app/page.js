"use client";
import styles from "./page.module.css";

const projects=[
{n:"01",t:"Student Attendance System",d:"Tracks and records daily attendance of students.",tools:["HTML","CSS","JavaScript"]},
{n:"02",t:"Library Book Management System",d:"Helps organize and manage books in the school library.",tools:["Java","Basic Database"]},
{n:"03",t:"Personal Portfolio Website",d:"Displays my profile, skills, education, and projects.",tools:["Next.js","CSS"]}
];
const skills=["HTML","CSS","JavaScript","Java","Basic Python","Next.js"];
const hobbies=["Coding","Exploring new technologies","Building small projects","Solving problems"];

export default function Home(){
return <main>
<nav className={styles.nav}><a className={styles.logo} href="#home">K<span>.</span></a><div className={styles.links}><a href="#home">Home</a><a href="#about">About</a><a href="#education">Education</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div></nav>
<section id="home" className={styles.hero}><div className={styles.heroText}><p className={styles.eyebrow}>STUDENT PROGRAMMER</p><h1>Hi, I&apos;m <span>Kyle Angelo M.<br/>Dalaza</span></h1><h2>Student Programmer / IT Student</h2><p>Hi! I&apos;m Kyle Angelo. I&apos;m a college student who loves coding and building projects. I enjoy creating things that work and are useful. Welcome to my profile!</p><div className={styles.buttons}><a className={styles.primary} href="#projects">View Projects</a><a className={styles.secondary} href="#contact">Contact Me</a></div></div><div className={styles.photoWrap}><div className={styles.photoGlow}></div><img src="/profile.svg" alt="Kyle Angelo M. Dalaza" /></div></section>
<section id="about" className={styles.section}><p className={styles.num}>01. /</p><h2 className={styles.title}>About Me</h2><div className={styles.two}><div><p className={styles.big}>I&apos;m an IT student who is passionate about programming and technology.</p><p className={styles.muted}>I love learning how websites and applications are built, and I enjoy turning simple ideas into actual working programs. I&apos;m still learning and improving every day.</p><h3>Hobbies</h3><ul>{hobbies.map(x=><li key={x}>{x}</li>)}</ul></div><div className={styles.card}><h3>Skills</h3><div className={styles.tags}>{skills.map(x=><span key={x}>{x}</span>)}</div><div className={styles.terminal}>&gt; Better<br/>&gt; Code<br/>&gt; Better<br/>&gt; Tomorrow</div></div></div></section>
<section id="education" className={styles.section+" "+styles.alt}><p className={styles.num}>02. /</p><h2 className={styles.title}>Education</h2><div className={styles.edu}><div className={styles.badge}>EDU</div><div><h3>Nueva Vizcaya State University</h3><p>Bayombong Campus</p><p>Bachelor of Science in Information Technology</p><strong>1st Year → 3rd Year</strong></div></div></section>
<section id="projects" className={styles.section}><p className={styles.num}>03. /</p><h2 className={styles.title}>Projects</h2><div className={styles.projects}>{projects.map(p=><article className={styles.project} key={p.n}><div className={styles.pnum}>{p.n}</div><h3>{p.t}</h3><p>{p.d}</p><div className={styles.tags}>{p.tools.map(x=><span key={x}>{x}</span>)}</div></article>)}</div></section>
<section id="contact" className={styles.section+" "+styles.alt}><p className={styles.num}>04. /</p><h2 className={styles.title}>Contact</h2><div className={styles.contact}><div><p><small>Name</small>Kyle Angelo M Dalaza</p><p><small>Email</small><a href="mailto:angelodalaza87@gmail.com">angelodalaza87@gmail.com</a></p><p><small>Phone</small>09204210229</p><p><small>Location</small>Bagabag, Nueva Vizcaya</p></div><div className={styles.contactCard}><p>Let&apos;s build something useful.</p><a className={styles.primary} href="mailto:angelodalaza87@gmail.com">Send Message</a></div></div></section>
<footer>© 2026 Kyle Angelo M. Dalaza <span>Code / Build / Improve / Repeat.</span></footer>
</main>}