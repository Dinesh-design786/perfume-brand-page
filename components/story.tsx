export default function Story() {
  return (
    <section className="py-20 px-4 md:px-8 bg-card" id="story">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 text-center">Our Heritage</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/luxury-perfume-atelier-artisan-craftsmanship.jpg"
              alt="Ventus Noble atelier"
              className="w-full rounded-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-accent mb-3">A Legacy of Luxury</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in Grasse, France in 1896, Ventus Noble has been the custodian of olfactory excellence for over
                a century. Our master perfumers continue the traditions established by our founders, creating fragrances
                that transcend trends and capture the essence of refined nobility.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-accent mb-3">British Aristocratic Elegance</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In 1922, we established our headquarters in Mayfair, London, becoming the fragrance of choice for
                British nobility and international elite. Our atelier on Savile Row has remained a sanctuary for bespoke
                fragrance experiences.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-accent mb-3">Expanding to India - 2025</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This year marks our expansion into India, bringing the philosophy of slow, deliberate luxury to the
                subcontinent. We honor the rich fragrance traditions of the East while maintaining our European heritage
                of craftsmanship.
              </p>
            </div>

            <div className="pt-4 flex gap-8 flex-wrap">
              <div>
                <p className="font-serif text-3xl font-bold text-accent mb-1">1896</p>
                <p className="text-sm text-muted-foreground">Founded in Grasse</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-accent mb-1">1922</p>
                <p className="text-sm text-muted-foreground">Mayfair, London</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-accent mb-1">2025</p>
                <p className="text-sm text-muted-foreground">India Launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
