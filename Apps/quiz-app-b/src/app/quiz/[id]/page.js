import { quizzes } from "@/data/quizzes";
import { Button } from "@/ui/Button";

// async pour travailler avec l'asynchronisme
// props est le contexte du composant 
export default async function Quiz(props) {
  // attend pour avoir l'information dans l'url
  const url = await props.params;
  const quiz = quizzes.find(q => q.id == url.id)

  return (
    <div className="quiz">
      <h1>{quiz.title} </h1>
      <p className="general-color" >{quiz.description}</p>
      <Button content="Cliquez ici" value={50} />
    </div>
  );
}
