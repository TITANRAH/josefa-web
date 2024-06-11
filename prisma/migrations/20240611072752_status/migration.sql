/*
  Warnings:

  - Added the required column `statusPayment` to the `Donacion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Donacion" ADD COLUMN     "statusPayment" TEXT NOT NULL;
