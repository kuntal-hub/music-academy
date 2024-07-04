import Image from "next/image";
import HeroSection  from "@/components/HeroSection";
import FeaturedCourses from "@/components/FreturedCourses";
import  WhyChooseUs  from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/TestimonialsCards";
import UpcomingWebinars from "@/components/UpcommingWebinears";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
