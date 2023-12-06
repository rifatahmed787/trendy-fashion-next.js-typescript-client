import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "trendy-fashion-backend",
      name: "Credentials",
      type: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "Your Email...",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch(`http://localhost:5000/api/v1/auth/login`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content.Type": "application/json" },
          });
          const { data } = await res.json();
          console.log(data);
          return {
            ...data,
          };
        } catch (error) {}
      },
    }),
  ],
};
