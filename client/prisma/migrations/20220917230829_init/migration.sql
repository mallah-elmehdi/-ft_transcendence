-- CreateTable
CREATE TABLE "Account" (
    "user_id" SERIAL NOT NULL,
    "user_login" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_avatar" TEXT NOT NULL,
    "games_lost" INTEGER NOT NULL DEFAULT 0,
    "games_won" INTEGER NOT NULL DEFAULT 0,
    "games_drawn" INTEGER NOT NULL DEFAULT 0,
    "games_played" INTEGER NOT NULL DEFAULT 0,
    "two_authentication" BOOLEAN NOT NULL DEFAULT false,
    "instagram" TEXT NOT NULL DEFAULT '',
    "twitter" TEXT NOT NULL DEFAULT '',
    "facebook" TEXT NOT NULL DEFAULT '',
    "discord" TEXT NOT NULL DEFAULT '',
    "online" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_user_login_key" ON "Account"("user_login");

-- CreateIndex
CREATE UNIQUE INDEX "Account_user_name_key" ON "Account"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "Account_user_avatar_key" ON "Account"("user_avatar");
