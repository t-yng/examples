import Link from "next/link";
import { useUser } from "../hooks/useLoadingUser";

const LoadingUserPage = () => {
  const { user, loading } = useUser();

  if (loading) {
    return <h1>読み込み中...</h1>;
  }

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

export default LoadingUserPage;
