import type { GetServerSideProps, NextPage } from "next";
import { providers } from "auth/client";
import { LoginButtons } from "components/loginButtons";
import { List } from "components/List";
import { DecodedIdToken } from "firebase-admin/auth";
import { useAuth, getSessionUser } from "next-firebase-auth-cookies";
import { auth } from "auth/client";

type Props = {
  userSessionState: DecodedIdToken;
};

const Home: NextPage<Props> = ({ userSessionState }) => {
  const { user } = useAuth({ auth, userSSR: userSessionState });
  console.log({ user });
  return (
    <div>
      {user?.uid ? (
        <h1 className="font-medium text-lg text-center mb-4">
          {"Hi you're loged"}
        </h1>
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
  const userSessionState = await getSessionUser(auth, { req, res });
  return {
    props: {
      userSessionState: userSessionState ?? null,
    },
  };
};

export default Home;
