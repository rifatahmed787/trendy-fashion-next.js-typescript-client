import TopNavbar from "@/components/shared/Navbar/TopNavbar";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import WeChatWhatsApp from "@/components/WhatsAppChat/WeChatWhatsApp";

export default function GroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className="min-h-screen pt-[116px]">{children}</div>
      <WeChatWhatsApp />
      <ScrollToTop />
      <Footer />
    </>
  );
}
