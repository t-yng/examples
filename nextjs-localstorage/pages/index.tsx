import Link from "next/link";

const IndexPage = () => {
  return (
    <>
      <p><Link href="/loading-user">非同期読み込みのユーザー情報</Link></p>
      <Link href="/user">同期読み込みのユーザー情報</Link>
    </>
  );
};

export default IndexPage;
