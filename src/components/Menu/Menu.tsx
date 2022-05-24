import Link from "next/link";

export function Menu() {
  return (
    <div>
      <Link href={""}>
        <a>Play</a>
      </Link>
      <Link href={""}>
        <a>Help</a>
      </Link>
      <Link href={""}>
        <a>About</a>
      </Link>
    </div>
  );
}
