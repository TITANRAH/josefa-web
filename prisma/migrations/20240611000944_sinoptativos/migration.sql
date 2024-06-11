/*
  Warnings:

  - Made the column `imagen` on table `Articulo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `descripcion` on table `Articulo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `monto` on table `Donacion` required. This step will fail if there are existing NULL values in that column.
  - Made the column `mensaje` on table `Donacion` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `role` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Articulo" ALTER COLUMN "imagen" SET NOT NULL,
ALTER COLUMN "descripcion" SET NOT NULL;

-- AlterTable
ALTER TABLE "Donacion" ALTER COLUMN "monto" SET NOT NULL,
ALTER COLUMN "mensaje" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "role" SET NOT NULL;
