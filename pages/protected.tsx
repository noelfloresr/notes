import { withSSRContext } from "aws-amplify";
import { GetServerSideProps } from "next";

const Protected = (props: any) => {
  if (!props.authenticated) {
    return <h1>Not Authenticated</h1>;
  }

  return <h1>Hello {props.username} from SSR route!</h1>;
};

export default Protected;

// export async function getServerSideProps(context: any) {
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { Auth } = withSSRContext({ req });
  try {
    const user = await Auth.currentAuthenticatedUser();
    return {
      props: {
        authenticated: true,
        username: user.username,
      },
    };
  } catch (error) {
    res.writeHead(302, { Location: "/" });
    res.end();
  }
  return { props: {} };
};
