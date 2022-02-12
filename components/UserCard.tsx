import { useAuth } from "next-firebase-auth-cookies";
import Image from "next/image";
import { Loading } from "components/Loading";
import { signOut } from "next-firebase-auth-cookies";
import { auth } from "auth/client";

export const UserCard = () => {
  const { user } = useAuth({ auth });

  if (typeof user === "undefined")
    return (
      <div className="absolute top-4 left-4 bg-slate-900 p-1 rounded-lg flex items-center justify-center flex-col w-32 h-36 overflow-hidden">
        <Loading width={55} height={55} />
      </div>
    );

  return (
    <div className="absolute top-4 left-4 bg-slate-900 p-1 rounded-lg flex items-center justify-center flex-col w-32 h-36 text-sm gap-2">
      {user?.uid ? (
        <>
          <Image
            src={user.photoURL as string}
            alt="user icon"
            width={50}
            height={50}
            className="rounded-full"
            priority
          />
          <h2>{user?.displayName}</h2>
          <button
            className="bg-slate-700 hover:bg-slate-800 py-1 px-4 font-bold rounded-lg"
            onClick={() => signOut(auth)}
          >
            logout
          </button>
        </>
      ) : (
        <h2>{"not login"}</h2>
      )}
    </div>
  );
};
