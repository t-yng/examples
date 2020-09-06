import Link from "next/link";
import dynamic from "next/dynamic";
import { useUser } from "../hooks/useUser";

const UserPage = () => {
  const { user } = useUser();

  return (
    <>
      <h1>ユーザー情報</h1>
      {user == null ? (
        <p>ユーザー情報が存在しません</p>
      ) : (
        <>
          <p>ID: {user.id} </p>
          <p>ユーザー名: {user.name} </p>
        </>
      )}
      <p>
        <Link href="/">ホーム</Link>
      </p>
    </>
  );
};

const DynamicUserPage = dynamic(
  {
    loader: async () => UserPage,
  },
  { ssr: false }
);

export default DynamicUserPage;
