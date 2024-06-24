
import { withAuth } from "next-auth/middleware";

export default withAuth({
    
    pages: {
        signIn: "/",
    },
});

export const config = {
    matcher: "/((?!api|manualidades|dibujos|gracias|kawai|libros|login|miscelaneos|musica|pago-fallido|pendiente|procesando|tita|.*\\..*|_next).*)",
};
