import type { GetServerSideProps, NextPage } from "next";
import { User, getAuthCookieProps } from "next-firebase-auth-cookies";
import { providers } from "firebase.config";
import { LoginButtons } from "components/loginButtons";
import useSWR from "swr";
import { List } from "components/List";
import Link from "next/link";

type ProviderDataValue = string | null;

// @ts-ignore
const Home: NextPage = ({ user }: { user: any }) => {
  const { data } = useSWR<User>("/api/auth/login");

  return (
    <div>
      {user?.displayName ?? data?.displayName ? (
        <>
          <h1 className="font-medium text-lg text-center mb-4">
            {"Hi you're loged"}
          </h1>
          <List customClassName="flex-col gap-2">
            {Object.entries<ProviderDataValue>(
              data?.providerData[0] ?? user?.providerData[0]
            ).map(([key, value]) => (
              <li key={key}>
                <p>{`${key.toUpperCase()}: ${value}`}</p>
              </li>
            ))}
          </List>
        </>
      ) : (
        <>
          <h1 className="font-medium text-lg text-center">
            {"Hi you're not loged"}
          </h1>
          <List customClassName="gap-4">
            {Object.entries(providers).map(([key, [auth, provider]]) => (
              <li key={key}>
                <LoginButtons auth={auth} provider={provider} content={key} />
              </li>
            ))}
          </List>
        </>
      )}
      <footer className="absolute bottom-5 left-0 right-0">
        <Link href={"/api/auth/login"}>
          <a className="text-center block hover:text-neutral-500 transition-colors" target={"_blank"}>
            {`view json in "api/auth/[...login]"`}
          </a>
        </Link>
      </footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const user = await getAuthCookieProps(req, res);
  return {
    props: {
      user,
    },
  };
};

export default Home;
