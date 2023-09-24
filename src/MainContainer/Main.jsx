import { ClerkProvider } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
// import Home from "./Home/Home";
import "./Main.scss";

const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API
  .substring(1, process.env.REACT_APP_CLERK_FRONTEND_API.length - 1);

function Main() {
  const navigate = useNavigate();
  return (
    <ClerkProvider frontendApi={frontendApi} navigate={(to) => navigate(to)}>
      <div>
        <Hello />
        {/* <SignedIn>
          <Home />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn redirectUrl="/" />
        </SignedOut> */}
      </div>
    </ClerkProvider>
  );
}

function Hello() {
  return <div>Welcome on Main Portal</div>;
}

export default Main;
