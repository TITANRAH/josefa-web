/*
  Warnings:

  - You are about to drop the column `nombre` on the `Articulo` table. All the data in the column will be lost.
  - Added the required column `categoria` to the `Articulo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Articulo" DROP COLUMN "nombre",
ADD COLUMN     "categoria" TEXT NOT NULL;
