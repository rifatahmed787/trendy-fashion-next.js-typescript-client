import TopNavbar from "@/components/shared/Navbar/TopNavbar";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

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
      <Footer />
    </>
  );
}
