import type { Auth } from "firebase/auth";
import { loginWith } from "next-firebase-auth-cookies";

type Props = {
  auth: Auth;
  provider: any;
  content: string;
};

export const LoginButtons = ({ auth, provider, content }: Props) => {
  return (
    <button
      onClick={() => {
        loginWith(auth, provider);
      }}
      className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded transition-colors"
    >
      login with {content}
    </button>
  );
};
