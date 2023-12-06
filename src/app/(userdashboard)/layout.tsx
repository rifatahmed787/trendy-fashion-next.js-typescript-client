import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Footer from "@/components/shared/Footer/Footer";
import Sidebar from "@/components/shared/UserSidebar/Sidebar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen pt-[116px]">{children}</div>
      <ScrollToTop />
      <Footer />
    </>
  );
}
