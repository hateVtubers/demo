import type { User } from "next-firebase-auth-cookies";
import Image from "next/image";
import useSWR, { useSWRConfig } from "swr";
import { Loading } from "components/Loading";
import { logout } from "next-firebase-auth-cookies";
import { auth } from "firebase.config";

export const UserCard = () => {
  const { data, mutate } = useSWR<User>("/api/auth/login");
  const handlerLogout = () => {
    logout(auth);
    // @ts-ignore
    mutate({ ...data });
  };
  console.log(data);
  if (!data)
    return (
      <div className="absolute top-4 left-4 bg-slate-900 p-1 rounded-lg flex items-center justify-center flex-col w-32 h-36 overflow-hidden">
        <Loading width={55} height={55} />
      </div>
    );

  return (
    <div className="absolute top-4 left-4 bg-slate-900 p-1 rounded-lg flex items-center justify-center flex-col w-32 h-36 text-sm gap-2">
      {data?.displayName ? (
        <>
          <Image
            src={data.photoURL as string}
            alt="user icon"
            width={50}
            height={50}
            className="rounded-full"
            priority
          />
          <h2>{data?.displayName}</h2>
          <button
            className="bg-slate-700 hover:bg-slate-800 py-1 px-4 font-bold rounded-lg"
            onClick={handlerLogout}
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
