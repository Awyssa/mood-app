import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"],
});

// Will lock down all other routes
// https://clerk.com/docs/references/nextjs/auth-middleware#auth-middleware
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
