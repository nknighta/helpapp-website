-- CreateTable
CREATE TABLE "Account" (
    "accountid" TEXT NOT NULL,
    "userid" TEXT,
    "email" TEXT NOT NULL,
    "age" INTEGER,
    "accountname" TEXT,
    "icon" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("accountid")
);

-- CreateTable
CREATE TABLE "Geodata" (
    "id" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "logdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Geodata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlaceData" (
    "id" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "PlaceData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_accountid_key" ON "Account"("accountid");

-- CreateIndex
CREATE UNIQUE INDEX "Account_userid_key" ON "Account"("userid");

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_accountname_key" ON "Account"("accountname");

-- CreateIndex
CREATE UNIQUE INDEX "Account_icon_key" ON "Account"("icon");

-- CreateIndex
CREATE UNIQUE INDEX "PlaceData_id_key" ON "PlaceData"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PlaceData_name_key" ON "PlaceData"("name");

-- AddForeignKey
ALTER TABLE "Geodata" ADD CONSTRAINT "Geodata_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Account"("accountid") ON DELETE RESTRICT ON UPDATE CASCADE;
