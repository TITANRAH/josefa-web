import prismadb from "@/lib/prismadb";

export const getUserByEmail = async (email: string) => {
  console.log("email", email);

  try {
    const user = await prismadb.user.findFirst({
      where: { email: email },
    });
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await prismadb.user.findFirst({
      where: { id: +id },
    });
    return user;
  } catch (error) {
    return null;
  }
};
