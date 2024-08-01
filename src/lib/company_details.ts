interface ICompanyDetails {
    companyName: string;
    companyPlace: string;
    address: string;
    email: string;
    phone: string;
    hotline: string;
    companyCode: string;
    baseUrl: string;
    favicon: string;
    sidebarLogo: string;
    progressMessage: string;
  }

export const COMPANY_DETAILS: ICompanyDetails = {
    companyName: "Trendy Fashion",
    companyPlace: "West Kazipara, Mirpur-10",
    address: "648/3E, Bashundhara Len",
    email: "mdrifatahmed787@mail.com",
    phone: "+880 1945518927",
    hotline: "111000",
    companyCode: "787",
    baseUrl: "https://trendy-fashion-server.vercel.app/api/v1",
    favicon: "/src/assets/Logo/trendy.svg",
    sidebarLogo: "/src/assets/Logo/2 (1).png",
    progressMessage:
      "Thank you for your interest! 🚀 We're currently working on implementing this feature. Stay tuned, as we'll be activating it very soon!",
  };