import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to AI assistant tools</h1>

      <Link href="/sign-in">
        <Button>
          SignIn
        </Button>
      </Link>
      <Link href="/sign-up">
        <Button>
        Register
        </Button>
      </Link>
    </div>
  );
}

export default LandingPage;
