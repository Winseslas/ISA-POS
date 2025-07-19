import { Header } from "../components/common/Header/Header";
import Contact from "../components/pages/Contact/Contact";
import { Footer } from "../components/common/Footer/Footer";

const contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default contact
