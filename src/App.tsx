import { ThemeToggle } from './components/ui/ThemeToggle'

function App() {
  return (
    <main>
      <section aria-labelledby="portfolio-heading">
        <div>
          <ThemeToggle />
        </div>
        <h1 id="portfolio-heading">Gayathri Portfolio</h1>
        <p>Engineering portfolio and product showcase coming soon.</p>
      </section>
    </main>
  )
}

export default App
