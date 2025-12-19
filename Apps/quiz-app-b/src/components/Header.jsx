import Link from "next/link";

export default function Header() {
  return (
    <div>
        <h1>Header</h1>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/quiz">Tous les quiz</Link></li>
          </ul>
        </nav>
    </div>
  );
}
