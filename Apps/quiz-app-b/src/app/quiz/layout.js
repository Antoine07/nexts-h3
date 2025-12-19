import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ "backgroundColor" : "orange"}}>
        {children}
        </div>
      </body>
    </html>
  );
}
