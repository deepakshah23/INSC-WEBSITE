import ContactForm from "../components/contact/contact-form";
import ContactInfo from "../components/contact/contact-info";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f8f8f8] w-full">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 sm:py-24 md:py-32 mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black/80 z-0"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 leading-tight">
              DO YOU HAVE A <span className="block md:inline">QUERY ?</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto lg:mx-0">
              We'd love to hear from you. Get in touch with our team and let's
              create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <ContactInfo />
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
