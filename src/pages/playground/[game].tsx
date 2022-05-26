import Router from "next/router";
import { Layout } from "../../components/Layout/Layout";
import { PlayGround } from "../../components/Playground/playground";

export default function PlayGame() {
  const game: any = Router.query.game;

  return (
    <Layout>
      <PlayGround game={game} />
    </Layout>
  );
}
