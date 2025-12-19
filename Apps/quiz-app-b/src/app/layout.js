import Header from "@/components/Header";
import "./globals.css"; // CSS du projet s'applique partout 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div>
        {children}
        </div>
      </body>
    </html>
  );
}
