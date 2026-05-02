"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Award, CheckCircle, Layout, Shield, ShieldCheck, Sparkles, Star, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeMediumTitles"
        background="aurora"
        cardStyle="solid"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Início", id: "hero" },
        { name: "Sobre", id: "about" },
        { name: "Serviços", id: "services" },
        { name: "Avaliações", id: "testimonials" },
        { name: "Contacto", id: "contact" },
      ]}
      brandName="Odonto Zoe"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{ variant: "plain" }}
      title="Seu sorriso merece o melhor cuidado"
      description="Atendimento profissional em medicina dentária em Luanda."
      kpis={[
        { value: "5.0", label: "Avaliação" },
        { value: "942+", label: "Atendimentos" },
        { value: "12h", label: "Atendimento diário" },
      ]}
      enableKpiAnimation={true}
      buttons={[
        { text: "Agendar Consulta", href: "#contact" },
        { text: "Falar no WhatsApp", href: "https://wa.me/244942552454" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/hospital-assistant-putting-oxigen-mask-sick-man-patient-after-stomatology-surgery-sitting-dental-chair-orthodontic-hospital-room-medical-consultation-dentist-doctor-examining-toohache_482257-4906.jpg"
      mediaAnimation="slide-up"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/smiling-nurse-hospital-hallway_23-2151997625.jpg", alt: "Dentista 1" },
        { src: "http://img.b2bpic.net/free-photo/portrait-male-doctor-with-uniform-using-laptop-cabinet-working-checkup-appointments-desk-health-specialist-with-stethoscope-helping-with-prescription-medicine-treatment_482257-39448.jpg", alt: "Dentista 2" },
        { src: "http://img.b2bpic.net/free-photo/portrait-happy-african-american-doctor-nursing-home_637285-11403.jpg", alt: "Dentista 3" },
        { src: "http://img.b2bpic.net/free-photo/smiley-nurse-with-stethoscope_23-2148740054.jpg", alt: "Dentista 4" },
        { src: "http://img.b2bpic.net/free-photo/portrait-good-looking-curly-ethnic-woman-smiles-broadly-enjoys-day-off-has-happy-talk-with-interlocutor-discusses-holiday-preparation-wears-green-sweater-isolated-pink-wall_273609-42856.jpg", alt: "Dentista 5" },
      ]}
      avatarText="Nossa equipa qualificada"
      marqueeItems={[
        { type: "text", text: "Implantes" },
        { type: "text", text: "Ortodontia" },
        { type: "text", text: "Clareamento" },
        { type: "text", text: "Limpeza" },
        { type: "text", text: "Cirurgia" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="A Clínica Odonto Zoe"
      metrics={[
        { icon: CheckCircle, label: "Atendimento", value: "Personalizado" },
        { icon: Shield, label: "Qualidade", value: "Segura" },
        { icon: Zap, label: "Equipamento", value: "Moderno" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        { title: "Limpeza Dentária", description: "Higiene profunda e saúde gengival.", bentoComponent: "reveal-icon", icon: Sparkles, imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-happy-woman-coat_1303-11053.jpg", imageAlt: "portrait happy woman" },
        { title: "Clareamento", description: "Sorriso mais branco e radiante.", bentoComponent: "reveal-icon", icon: Star, imageSrc: "http://img.b2bpic.net/free-photo/hospital-assistant-putting-oxigen-mask-sick-man-patient-after-stomatology-surgery-sitting-dental-chair-orthodontic-hospital-room-medical-consultation-dentist-doctor-examining-toohache_482257-4906.jpg", imageAlt: "portrait happy woman" },
        { title: "Ortodontia", description: "Alinhamento e estética dentária.", bentoComponent: "reveal-icon", icon: Layout, imageSrc: "http://img.b2bpic.net/free-photo/smiling-nurse-hospital-hallway_23-2151997624.jpg", imageAlt: "portrait happy woman" },
        { title: "Extração", description: "Procedimentos seguros e precisos.", bentoComponent: "reveal-icon", icon: Shield, imageSrc: "http://img.b2bpic.net/free-photo/portait-handsome-european-elderly-man-smiles-positively-enjoys-retirement-wears-shirt-spectacles-has-perfect-white-teeth-isolated-beige-studio-wall_273609-44196.jpg", imageAlt: "portrait happy woman" },
        { title: "Implantes", description: "Recupere a sua função mastigatória.", bentoComponent: "reveal-icon", icon: Award, imageSrc: "http://img.b2bpic.net/free-photo/portrait-jolly-man-home-feeling-happy-grateful-life_482257-123005.jpg", imageAlt: "portrait happy woman" },
        { title: "Tratamento", description: "Tratamento eficaz de cáries.", bentoComponent: "reveal-icon", icon: ShieldCheck, imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-business-woman-wearing-id-card-smiling-confident-with-crossed-arms_839833-18875.jpg", imageAlt: "portrait happy woman" },
      ]}
      title="Nossos Serviços"
      description="Cuidado odontológico completo com tecnologia avançada."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="A Clínica oferece serviços profissionais na área de Medicina Dentária. Nota 10!"
      rating={5}
      author="Fernando Ruben"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/smiling-nurse-hospital-hallway_23-2151997624.jpg", alt: "Fernando" },
        { src: "http://img.b2bpic.net/free-photo/young-woman-walks-through-autumn-city-happy-body-female-with-curly-hair-raincoat_1321-4545.jpg", alt: "Ana" },
        { src: "http://img.b2bpic.net/free-photo/portrait-happy-carefree-woman-with-curly-blonde-hair-stands-with-crossed-arms-wears-casual-pink-turtleneck-smiles-broadly-has-white-teeth-poses-against-brown-studio-wall-emotions-concept_273609-59426.jpg", alt: "Maria" },
        { src: "http://img.b2bpic.net/free-photo/portrait-happy-young-woman-smiles-brroadly-wears-casual-turtleneck-feels-pleased-poses-glad-against-red-background-joyful-female-model-has-cheerful-expression-feels-optimistic-enjoys-good-day_273609-57948.jpg", alt: "Joana" },
        { src: "http://img.b2bpic.net/free-photo/portrait-smiling-man-beach_613910-9564.jpg", alt: "Pedro" },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        { id: "1", title: "Qual o horário de atendimento?", content: "Estamos abertos das 08:00 às 19:00." },
        { id: "2", title: "Onde estão localizados?", content: "Rua Direita da Ende, Luanda." },
        { id: "3", title: "Como agendar?", content: "Pelo número 942 552 454 ou via WhatsApp." },
      ]}
      sideTitle="Dúvidas?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Contacto"
      title="Agende sua Consulta"
      description="Estamos prontos para atender você com total excelência."
      imageSrc="http://img.b2bpic.net/free-photo/dentist-inviting-senior-man-consultation-dental-room-while-nurse-giving-patient-form-fill-indicating-sit-chair-waiting-area-slow-motion-shot-crowded-professional-orthodontist-office_482257-3575.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/stomatology-office-with-modern-equipment-nurse-wearing-blue-uniform-working-computer_482257-12534.jpg"
      logoText="Odonto Zoe"
      columns={[
        {
          title: "Clínica",          items: [
            { label: "Sobre", href: "#about" },
            { label: "Serviços", href: "#services" },
          ],
        },
        {
          title: "Legal",          items: [
            { label: "Privacidade", href: "#" },
            { label: "Termos", href: "#" },
          ],
        },
      ]}
      copyrightText="© 2025 Odonto Zoe | Luanda"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}