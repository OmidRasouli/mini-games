import { useRouter } from "next/router";

export default function ScoreBoard() {
  const router = useRouter();
  const { correct, wrong, score } = router.query;
  return <div className=""></div>;
}
