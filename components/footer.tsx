export default function Footer() {
  return (
    <footer className="bg-card border-t border-muted py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Ventus Noble</h3>
            <p className="text-sm text-muted-foreground">Crafting luxury fragrances for the discerning individual.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Collections</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Original
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Nocturne
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Ethereal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Experience</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Concierge
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Shipping
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 Ventus Noble. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
