import { Nunito} from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import { Toaster } from "react-hot-toast";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
// import RentModal from "./components/modals/Rentmodal";
import RentModal from "./components/modals/RentModal";
export const metadata = {
  title: "DeFi-Land",
  description: "DeFi-Land for all your DeFi needs",
};
const font = Nunito({
  subsets: ["latin"],
});


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser =  await getCurrentUser();
  
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal/>
          <RegisterModal/> 
          <LoginModal/>    
           <Navbar currentUser = {currentUser}/>
        </ClientOnly>
      {children}
      <div className="pb-20 pt-28">
        {children}
      </div>
      </body>
    </html>
  )
}