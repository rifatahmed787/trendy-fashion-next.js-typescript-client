"use client";
//@ts-ignore
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const WeChatWhatsApp = () => {
  return (
    <WhatsAppWidget
      phoneNo="8801945518927"
      position="left"
      widgetWidth="250px"
      widgetWidthMobile="200px"
      autoOpen={true}
      autoOpenTimer={5000}
      messageBox={true}
      messageBoxTxt="Hi Team, is there any related service available ?"
      iconSize="50"
      iconColor="black"
      iconBgColor="#FFC50F"
      headerIcon="https://res.cloudinary.com/dztlowlu0/image/upload/v1700225520/wkvfmyeuuvcjzikemeef.svg"
      headerIconColor="#FFC50F"
      headerTxtColor="black"
      headerBgColor="#FFC50F"
      headerTitle="Trendy Fashion"
      headerCaption="Online"
      bodyBgColor="#D0D0DD"
      chatPersonName="Support"
      chatMessage={
        <>
          Hi there 👋 <br />
          <br /> How can I help you?
        </>
      }
      footerBgColor="#bbb"
      placeholder="Type a message.."
      btnBgColor="#FFC50F"
      btnTxt="Start Chat"
      btnTxtColor="black"
    />
  );
};

export default WeChatWhatsApp;
