import type { GetServerSideProps, NextPage } from "next";
import { providers } from "auth/client";
import { LoginButtons } from "components/loginButtons";
import { List } from "components/List";
import { useAuth, userSessionState } from "next-firebase-auth-cookies";
import { auth } from "auth/client";
import { UserServer } from "next-firebase-auth-cookies/types";

type Props = {
  userSSR: UserServer;
};

const Home: NextPage<Props> = ({ userSSR }) => {
  const { user, loading } = useAuth({ auth, userSSR });
  console.log({ userClient: user, userServer: userSSR, loading });
  return (
    <div>
      {user?.uid ? (
        <>
          <h1 className="font-medium text-lg text-center mb-4">
            {"Hi you're loged"}
          </h1>
        </>
      ) : (
        <>
          <h1 className="font-medium text-lg text-center">
            {"Hi you're not loged"}
          </h1>
          <List customClassName="gap-4">
            {Object.entries(providers).map(([key, value]) => (
              <li key={key}>
                <LoginButtons onClick={value} content={key} />
              </li>
            ))}
          </List>
        </>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { auth } = await import("auth/server");
  const { user } = await userSessionState(auth, { req, res });

  return {
    props: {
      userSSR: user,
    },
  };
};

export default Home;
