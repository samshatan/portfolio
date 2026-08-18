import { useEffect, useState } from 'react'
import './App.css'

type RoutePath = '/' | '/about' | '/projects' | '/skills' | '/contact'

type Project = {
  title: string
  description: string
  tech: string[]
}

const routes: Array<{ path: RoutePath; label: string }> = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/contact', label: 'Contact' },
]

const projectList: Project[] = [
  {
    title: 'Find-Movie',
    description: 'Search and discover movies with a simple and clean experience.',
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-stack store app with auth, checkout flow, and product management.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Birthday Wisher',
    description: 'Share celebration links and send birthday wishes instantly.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Todo List',
    description: 'Task tracking app focused on quick planning and productivity.',
    tech: ['React', 'TypeScript', 'Shadcn UI'],
  },
]

const skillList = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Tailwind CSS',
  'Git',
  'Java',
  'Python',
  'NPM',
]

const getRouteFromHash = (): RoutePath => {
  const raw = window.location.hash.replace('#', '')
  const normalized = raw.startsWith('/') ? raw : '/'

  if (routes.some((route) => route.path === normalized)) {
    return normalized as RoutePath
  }

  return '/'
}

const setHashRoute = (path: RoutePath) => {
  window.location.hash = path
}

function BookPage() {
  return (
    <section className="book-theme page-shell">
      <p className="theme-label">Book Theme</p>
      <h1>About Me</h1>
      <p className="lead">
        Hi, I’m Sameer Maurya — I enjoy building polished, useful web experiences and constantly
        learning new things.
      </p>
      <div className="book-chapters">
        <article>
          <h2>Chapter 1: Builder Mindset</h2>
          <p>I focus on clean UI, practical features, and reliable implementation.</p>
        </article>
        <article>
          <h2>Chapter 2: Curiosity</h2>
          <p>I like exploring modern frontend patterns and improving performance.</p>
        </article>
        <article>
          <h2>Chapter 3: Growth</h2>
          <p>I keep practicing problem-solving through projects and coding challenges.</p>
        </article>
      </div>
    </section>
  )
}

function QuestProjectsPage() {
  return (
    <section className="quest-theme page-shell">
      <p className="theme-label">Quest Theme</p>
      <h1>Project Quests</h1>
      <p className="lead">Each project is a completed quest with its own mission and toolkit.</p>
      <div className="quest-grid">
        {projectList.map((project) => (
          <article key={project.title} className="quest-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="pill-wrap">
              {project.tech.map((tech) => (
                <span key={`${project.title}-${tech}`}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <section className="quest-theme page-shell">
      <p className="theme-label">Quest Theme</p>
      <h1>Sameer Maurya</h1>
      <p className="lead">Web Developer • Competitive Programmer • Modern Frontend Builder</p>
      <div className="home-actions">
        <button type="button" onClick={() => setHashRoute('/projects')}>
          Explore Quests
        </button>
        <button type="button" className="secondary" onClick={() => setHashRoute('/about')}>
          Read My Story
        </button>
      </div>
    </section>
  )
}

function SkillsPage() {
  return (
    <section className="book-theme page-shell">
      <p className="theme-label">Book Theme</p>
      <h1>Skill Index</h1>
      <p className="lead">A quick index of my current toolkit.</p>
      <ul className="book-list">
        {skillList.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="quest-theme page-shell">
      <p className="theme-label">Quest Theme</p>
      <h1>Contact Portal</h1>
      <p className="lead">Available for collaborations, projects, and freelance opportunities.</p>
      <div className="quest-grid">
        <article className="quest-card">
          <h2>Email</h2>
          <a href="mailto:sameermaurya97044@gmail.com">sameermaurya97044@gmail.com</a>
        </article>
        <article className="quest-card">
          <h2>GitHub</h2>
          <a href="https://github.com/samshatan" target="_blank" rel="noreferrer">
            github.com/samshatan
          </a>
        </article>
        <article className="quest-card">
          <h2>LinkedIn</h2>
          <a href="https://www.linkedin.com/in/samshatan/" target="_blank" rel="noreferrer">
            linkedin.com/in/samshatan
          </a>
        </article>
      </div>
    </section>
  )
}

function App() {
  const [route, setRoute] = useState<RoutePath>(getRouteFromHash)

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash())
    window.addEventListener('hashchange', onHashChange)

    if (!window.location.hash) {
      setHashRoute('/')
    }

    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const page =
    route === '/about' ? (
      <BookPage />
    ) : route === '/projects' ? (
      <QuestProjectsPage />
    ) : route === '/skills' ? (
      <SkillsPage />
    ) : route === '/contact' ? (
      <ContactPage />
    ) : (
      <HomePage />
    )

  return (
    <div className="app-root">
      <header className="top-nav">
        <div className="brand">Sameer Portfolio</div>
        <nav>
          {routes.map((item) => (
            <a
              key={item.path}
              href={`#${item.path}`}
              className={route === item.path ? 'active' : ''}
              aria-current={route === item.path ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <main>{page}</main>
    </div>
  )
}

export default App
