import { NAME } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {NAME}. Built with React.</p>
    </footer>
  )
}
