import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Footer from "@/components/shared/Footer/Footer";
import UserNavbar from "@/components/shared/UserNav/UserNavbar";
import Sidebar from "@/components/shared/UserNav/Sidebar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UserNavbar />
      <Sidebar />
      <div className="min-h-screen pt-10 md:pt-24">{children}</div>
      <ScrollToTop />
      <Footer />
    </>
  );
}
