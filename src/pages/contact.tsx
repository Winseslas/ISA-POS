import { Header } from "../components/common/Header/Header";
import { Contact } from "../components/pages/Contact/Contact";
import { Footer } from "../components/common/Footer/Footer";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const ContactPage = () => {
  const { t } = useTranslation();
      useEffect(() => {
          document.title = `ISA POS - ${t('pages.contactPage.header.title')}`;
      }, [t]);
      
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

export default ContactPage
