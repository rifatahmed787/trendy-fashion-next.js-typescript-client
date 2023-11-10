import TopNavbar from "@/components/shared/Navbar/TopNavbar";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

export default function GroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className="min-h-screen pt-32">{children}</div>
      <ScrollToTop />
      <Footer />
    </>
  );
}
