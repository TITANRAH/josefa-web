import { withAuth } from "next-auth/middleware";

export default withAuth({
    
    pages: {
        signIn: "/home/login",
    },
});

export const config = {
    matcher: "/((?!api|home|.*\\..*|_next).*)",
};