import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectCardAnimation from "../components/ProjectCardAnimation";
import CliniciansIntro from "../components/CliniciansIntro";
import CliniciansBenefits from "../components/CliniciansBenefits";
import ICTSIntro from "../components/ICTSIntro";
import CNGIntro from "../components/CNGIntro";
import Footer from "../components/Footer";
import { StickyScrollReveal } from "@/components/AboutUs";
import EnterDigital from "@/components/EnterDigital";
import Story from "@/components/Story";
export default function Home ()
{
  return (
    <div dir="rtl" className="bg-white text-gray-800 p-6">
      <Head>
        <title>Responsive Website</title>
        <meta name="description" content="Responsive single page application with animations" />
      </Head>
      <Header />
      <Hero />
      <ProjectCardAnimation />
      <CliniciansIntro />
      <CliniciansBenefits />
      <EnterDigital />
      <ICTSIntro />
      <CNGIntro />
      <Story />
      <StickyScrollReveal />
      <Footer />
    </div>
  );
}
