/*
  Warnings:

  - You are about to drop the column `i_delivered` on the `Chats` table. All the data in the column will be lost.
  - You are about to drop the column `opponent_id` on the `Chats` table. All the data in the column will be lost.
  - You are about to drop the `PendingFriends` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PendingFriends" DROP CONSTRAINT "PendingFriends_userId_fkey";

-- AlterTable
ALTER TABLE "Chats" DROP COLUMN "i_delivered",
DROP COLUMN "opponent_id",
ADD COLUMN     "to_id" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "PendingFriends";

-- CreateTable
CREATE TABLE "Room_info" (
    "room_id" SERIAL NOT NULL,
    "room_name" TEXT NOT NULL,
    "room_avatar" TEXT NOT NULL,
    "room_type" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Room_info_pkey" PRIMARY KEY ("room_id")
);

-- CreateTable
CREATE TABLE "Members" (
    "membership_id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "prev" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Members_pkey" PRIMARY KEY ("membership_id")
);

-- AddForeignKey
ALTER TABLE "Chats" ADD CONSTRAINT "Chats_to_id_fkey" FOREIGN KEY ("to_id") REFERENCES "Room_info"("room_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Members" ADD CONSTRAINT "Members_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room_info"("room_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Members" ADD CONSTRAINT "Members_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Account"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
