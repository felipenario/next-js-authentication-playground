import { useRouter } from "next/router";

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default function Home() {
  const { push } = useRouter();

  const logout = async () => {
    const signInRes = await fetch(`${process.env.NEXT_URL}/api/auth/sign-out`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (signInRes.ok) {
      push("/sign-in");
    }
  };

  return (
    <main className="h-screen w-screen items-center justify-center">
      <button onClick={() => logout()}>LOGOUT</button>
    </main>
  );
}
