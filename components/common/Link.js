import Link from "next/link";

export default props => {
  const name = props.name ? props.name : "pick a name";
  const href = props.href;
  console.log("este es el link:" + href);
  return <Link href={href}>{name}</Link>;
};
