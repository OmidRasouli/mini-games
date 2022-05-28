import { useParams } from "react-router-dom";
import { PlayGround } from "../../components/Playground/playground";

export default function PlayGame() {
  const { game } = useParams();

  return <PlayGround game={game ?? ""} />;
}
