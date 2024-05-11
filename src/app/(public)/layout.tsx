import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import WeChatWhatsApp from "@/components/WhatsAppChat/WeChatWhatsApp";
import TopNav from "@/components/shared/Navbar/TopNav";

export default function GroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNav />
      <Navbar />
      <div className="min-h-screen pt-24 md:pt-[125px]">{children}</div>
      <WeChatWhatsApp />
      <ScrollToTop />
      <Footer />
    </>
  );
}
