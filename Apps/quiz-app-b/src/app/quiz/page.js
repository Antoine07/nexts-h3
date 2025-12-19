import Link from "next/link";
import { quizzes } from "@/data/quizzes";

export default async function Quizzes() {

    const message = "le monde"
 
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1>Hello tous les Quizzies</h1>
            <ul>
                {quizzes.map((quiz, id) => (
                    <li key={id}><Link href={`/quiz/${quiz.id}`} >{quiz.title}</Link>
                    </li>
                ))}

                <p>Bonjour {"Bonjour tout  " + message + " ! "}</p>
                <p>Bonjour {`Bonjour tout le monde ${message} !`}</p>
            </ul>
        </div>
    );
}
