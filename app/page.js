import styles from "./page.module.css";

const projects=[
{n:"01",t:"Student Attendance System",d:"A proposed system for tracking and recording daily student attendance.",tools:["HTML","CSS","JavaScript"]},
{n:"02",t:"Library Book Management System",d:"A proposed system for organizing and managing books in a school library.",tools:["Java","Basic Database"]},
{n:"03",t:"Personal Portfolio Website",d:"A portfolio project for presenting my profile, skills, education, and project ideas.",tools:["Next.js","CSS"]}
];
const skills=["HTML","CSS","JavaScript","Java","Basic Python","Next.js"];
const hobbies=["Coding","Exploring new technologies","Building small projects","Solving problems"];

export default function Home(){return <main>
<nav className={styles.nav}>
<a className={styles.logo} href="#home">KAD<span>◆</span></a>
<div className={styles.links}><a href="#home">Home</a><a href="#education">Education</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#about">About</a><a href="#contact">Contact</a></div>
</nav>

<section id="home" className={styles.hero}>
<div className={styles.decor+" "+styles.d1}>◆</div><div className={styles.decor+" "+styles.d2}>+</div><div className={styles.decor+" "+styles.d3}>◇</div>
<div className={styles.heroText}>
<p className={styles.kicker}>STUDENT PROGRAMMER • IT STUDENT</p>
<h1>KYLE ANGELO M.<br/><span>DALAZA.</span></h1>
<p className={styles.heroIntro}>I&apos;m a college student who enjoys learning programming, web development, networking, and building simple digital solutions.</p>
<div className={styles.buttons}><a className={styles.primary} href="#projects">View My Projects <span>↗</span></a><a className={styles.secondary} href="#contact">Let&apos;s Connect <span>↗</span></a></div>
</div>
<div className={styles.profileSide}><div className={styles.glow}></div><div className={styles.profileCard}>
<span className={styles.cardNo}>01</span>
<div className={styles.photoRing}><img src="/profile.svg" alt="Kyle Angelo M. Dalaza"/></div>
<h2>Kyle Angelo M. Dalaza</h2><p>BS Information Technology Student</p><strong>Nueva Vizcaya State University</strong>
<div className={styles.cardLine}></div><span className={styles.status}><i></i> AVAILABLE TO LEARN &amp; BUILD</span>
</div></div>
</section>

<div className={styles.ticker}><span>CODE</span><b>◆</b><span>BUILD</span><b>◆</b><span>LEARN</span><b>◆</b><span>CREATE</span><b>◆</b><span>IMPROVE</span></div>

<section id="education" className={styles.section}>
<div className={styles.sectionTitle}><p>01 / EDUCATION</p><h2>Where I&apos;m <span>learning.</span></h2></div>
<div className={styles.eduCard}><div className={styles.eduBadge}>NVSU</div><div><small>CURRENT EDUCATION</small><h3>Nueva Vizcaya State University</h3><p>Bayombong Campus</p><strong>Bachelor of Science in Information Technology</strong></div><div className={styles.eduYear}>COLLEGE<br/><b>1ST → 3RD YEAR</b></div></div>
</section>

<section id="projects" className={styles.section+" "+styles.darkSection}>
<div className={styles.sectionTitle}><p>02 / PROJECTS</p><h2>Projects I&apos;m <span>working on.</span></h2></div>
<div className={styles.projects}>{projects.map(p=><article className={styles.project} key={p.n}><div className={styles.projectTop}><span>{p.n}</span><b>↗</b></div><h3>{p.t}</h3><p>{p.d}</p><div className={styles.tags}>{p.tools.map(x=><span key={x}>{x}</span>)}</div></article>)}</div>
</section>

<section id="skills" className={styles.section}>
<div className={styles.sectionTitle}><p>03 / SKILLS</p><h2>Tools I <span>work with.</span></h2></div>
<div className={styles.skillsLayout}><div><p className={styles.skillText}>I enjoy learning new tools and using technology to turn simple ideas into useful working projects.</p><div className={styles.codeLine}>&gt; keep_learning<span>_</span></div></div><div className={styles.skillGrid}>{skills.map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b></div>)}</div></div>
</section>

<section id="about" className={styles.section+" "+styles.darkSection}>
<div className={styles.sectionTitle}><p>04 / ABOUT</p><h2>A little <span>about me.</span></h2></div>
<div className={styles.aboutGrid}><div><p className={styles.aboutLead}>I&apos;m an IT student who is passionate about programming and technology.</p><p className={styles.muted}>I love learning how websites and applications are built, and I enjoy turning simple ideas into actual working programs. I&apos;m still learning and improving every day.</p></div><div className={styles.hobbies}><small>WHAT I ENJOY</small>{hobbies.map((x,i)=><div key={x}><span>0{i+1}</span>{x}</div>)}</div></div>
</section>

<section id="contact" className={styles.contactSection}>
<div className={styles.contactTitle}><p>05 / CONTACT</p><h2>Let&apos;s build<br/><span>something useful.</span></h2><p>Have a project, idea, or just want to connect? Feel free to reach out.</p></div>
<div className={styles.contactGrid}><div className={styles.contactDetails}><div><small>NAME</small><b>Kyle Angelo M Dalaza</b></div><div><small>EMAIL</small><a href="mailto:angelodalaza87@gmail.com">angelodalaza87@gmail.com</a></div><div><small>PHONE</small><b>09204210229</b></div><div><small>LOCATION</small><b>Bagabag, Nueva Vizcaya</b></div></div><a className={styles.contactButton} href="mailto:angelodalaza87@gmail.com"><span>START A CONVERSATION</span><b>↗</b></a></div>
</section>

<footer className={styles.footer}><span>© 2026 KYLE ANGELO M. DALAZA</span><span>CODE • BUILD • IMPROVE • REPEAT</span></footer>
</main>}