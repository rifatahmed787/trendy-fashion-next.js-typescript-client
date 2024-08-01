import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import WeChatWhatsApp from "@/components/WhatsAppChat/WeChatWhatsApp";
import TopNav from "@/components/shared/Navbar/TopNav";
import { ThemeProvider } from "@/components/DarkModeContext/Theme-provider";
import { COMPANY_DETAILS } from "@/lib/company_details";

export default function GroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey={`${COMPANY_DETAILS.companyCode}theme`}
    >
      <TopNav />
      <Navbar />
      <div className="min-h-screen pt-24 md:pt-[132px]">{children}</div>
      <WeChatWhatsApp />
      <ScrollToTop />
      <Footer />
    </ThemeProvider>
  );
}
