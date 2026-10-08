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
    <nav className={styles.nav}>
      <a className={styles.logo} href="#home"><span>K</span>YLE<span className={styles.dot}>.</span></a>
      <div className={styles.links}>
        <a href="#home">Home</a><a href="#about">About</a><a href="#education">Education</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
      </div>
      <a className={styles.navCta} href="#contact">Let&apos;s Talk <span>↗</span></a>
    </nav>

    <section id="home" className={styles.hero}>
      <div className={styles.heroText}>
        <div className={styles.heroLabel}><span></span> IT STUDENT / STUDENT PROGRAMMER</div>
        <h1>Building ideas<br/><em>into reality.</em></h1>
        <p className={styles.heroIntro}>Hi, I&apos;m <strong>Kyle Angelo M. Dalaza</strong>. I&apos;m a college student who loves coding and building projects. I enjoy creating things that work and are useful.</p>
        <div className={styles.buttons}>
          <a className={styles.primary} href="#projects">Explore My Work <span>↗</span></a>
          <a className={styles.secondary} href="#about">More About Me</a>
        </div>
        <div className={styles.heroMeta}>
          <div><small>BASED IN</small><strong>Bagabag, Nueva Vizcaya</strong></div>
          <div><small>FOCUS</small><strong>Programming &amp; Technology</strong></div>
        </div>
      </div>
      <div className={styles.photoArea}>
        <div className={styles.photoFrame}>
          <div className={styles.photoNumber}>01</div>
          <div className={styles.photoLine}></div>
          <img src="/profile.svg" alt="Kyle Angelo M. Dalaza" />
          <div className={styles.photoCaption}><span>PROFILE</span><b>KYLE ANGELO M.</b></div>
        </div>
        <div className={styles.orbit}></div>
        <div className={styles.blueGlow}></div>
      </div>
    </section>

    <div className={styles.ticker}><span>CODE</span><b>•</b><span>BUILD</span><b>•</b><span>LEARN</span><b>•</b><span>IMPROVE</span><b>•</b><span>CODE</span><b>•</b><span>BUILD</span></div>

    <section id="about" className={styles.section}>
      <div className={styles.sectionHead}><p className={styles.num}>01 / ABOUT</p><h2 className={styles.title}>A little about<br/><em>who I am.</em></h2></div>
      <div className={styles.two}>
        <div>
          <p className={styles.big}>I&apos;m an IT student who is passionate about programming and technology.</p>
          <p className={styles.muted}>I love learning how websites and applications are built, and I enjoy turning simple ideas into actual working programs. I&apos;m still learning and improving every day.</p>
          <h3 className={styles.miniTitle}>What I enjoy</h3>
          <div className={styles.hobbyGrid}>{hobbies.map((x,i)=><div key={x}><span>0{i+1}</span>{x}</div>)}</div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTop}><span>TECH STACK</span><i>●</i></div>
          <h3>Skills</h3>
          <div className={styles.tags}>{skills.map(x=><span key={x}>{x}</span>)}</div>
          <div className={styles.terminal}><span>&gt;</span> learning_mode = true<br/><span>&gt;</span> build_projects()<br/><span>&gt;</span> keep_improving()<br/><span>&gt;</span> <b>ready_to_create</b></div>
        </div>
      </div>
    </section>

    <section id="education" className={styles.section+" "+styles.alt}>
      <div className={styles.sectionHead}><p className={styles.num}>02 / EDUCATION</p><h2 className={styles.title}>Where I&apos;m<br/><em>learning.</em></h2></div>
      <div className={styles.edu}>
        <div className={styles.eduMark}>NVSU</div>
        <div className={styles.eduMain}>
          <div className={styles.eduYear}>CURRENT EDUCATION</div>
          <h3>Nueva Vizcaya State University</h3>
          <p>Bayombong Campus</p>
          <strong>Bachelor of Science in Information Technology</strong>
        </div>
        <div className={styles.eduLevel}>1st Year <span>→</span> 3rd Year</div>
      </div>
    </section>

    <section id="projects" className={styles.section}>
      <div className={styles.sectionHeadRow}><div><p className={styles.num}>03 / PROJECTS</p><h2 className={styles.title}>Things I&apos;ve<br/><em>built.</em></h2></div><p className={styles.sectionNote}>A few projects that show my interest in building useful systems and learning through practice.</p></div>
      <div className={styles.projects}>{projects.map(p=><article className={styles.project} key={p.n}>
        <div className={styles.projectTop}><span>{p.n}</span><span>↗</span></div>
        <h3>{p.t}</h3><p>{p.d}</p>
        <div className={styles.tags}>{p.tools.map(x=><span key={x}>{x}</span>)}</div>
      </article>)}</div>
    </section>

    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactTop}><p className={styles.num}>04 / CONTACT</p><h2>Let&apos;s make<br/><em>something useful.</em></h2><p>Have a project, idea, or just want to connect? Feel free to reach out.</p></div>
      <div className={styles.contactGrid}>
        <div className={styles.contactDetails}>
          <p><small>NAME</small>Kyle Angelo M Dalaza</p>
          <p><small>EMAIL</small><a href="mailto:angelodalaza87@gmail.com">angelodalaza87@gmail.com</a></p>
          <p><small>PHONE</small>09204210229</p>
          <p><small>LOCATION</small>Bagabag, Nueva Vizcaya</p>
        </div>
        <a className={styles.bigContact} href="mailto:angelodalaza87@gmail.com"><span>START A CONVERSATION</span><b>↗</b></a>
      </div>
    </section>

    <footer className={styles.footer}><span>© 2026 KYLE ANGELO M. DALAZA</span><span>CODE / BUILD / IMPROVE / REPEAT.</span></footer>
  </main>
}