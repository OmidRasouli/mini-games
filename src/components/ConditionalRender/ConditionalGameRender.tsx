interface Props {
  children: Array<{
    props: { game; count: number };
  }>;
  game: string;
}
function ConditionalGameRender(props) {
  const game = props.children.find(
    (x) => x.props.game.name === props.game
  ).props;
  console.log(props);
  return game.game({ count: game.count });
}

function Condition(prop) {
  return null;
}

export { ConditionalGameRender, Condition };
