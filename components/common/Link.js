import Link from "next/link";

export default props => {
  const name = props.name ? props.name : "pick a name";
  const href = props.href;

  return (
    <div>
      <Link href={href}>
        <a className={props.className} target="_blank">
          {name}
        </a>
      </Link>
      <style jsx>{`
        .link {
          color: green;
        }
      `}</style>
    </div>
  );
};
