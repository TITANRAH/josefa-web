/*
  Warnings:

  - Added the required column `nombre` to the `Articulo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Articulo" ADD COLUMN     "nombre" TEXT NOT NULL;
