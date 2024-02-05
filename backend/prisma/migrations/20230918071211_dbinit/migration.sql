-- CreateTable
CREATE TABLE "Roles" (
    "id_rol" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id_rol")
);

-- CreateTable
CREATE TABLE "Users" (
    "id_user" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "names" TEXT NOT NULL,
    "biography" TEXT NOT NULL,
    "id_rol" INTEGER NOT NULL,
    "password" TEXT NOT NULL DEFAULT '_12@34@56@78!',

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "UrbanArts" (
    "id_urbanart" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" VARCHAR(500) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url_photo" VARCHAR(500) NOT NULL,
    "id_user" TEXT,
    "id_city" INTEGER,
    "id_urbanartcategory" INTEGER,
    "address" TEXT NOT NULL,

    CONSTRAINT "UrbanArts_pkey" PRIMARY KEY ("id_urbanart")
);

-- CreateTable
CREATE TABLE "Markers" (
    "id_marker" SERIAL NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "id_urbanart" INTEGER NOT NULL,

    CONSTRAINT "Markers_pkey" PRIMARY KEY ("id_marker")
);

-- CreateTable
CREATE TABLE "City" (
    "id_city" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id_city")
);

-- CreateTable
CREATE TABLE "UrbanArtCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url_photo" TEXT NOT NULL,

    CONSTRAINT "UrbanArtCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Roles_name_key" ON "Roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_names_key" ON "Users"("names");

-- CreateIndex
CREATE UNIQUE INDEX "UrbanArts_name_key" ON "UrbanArts"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Markers_id_urbanart_key" ON "Markers"("id_urbanart");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_id_rol_fkey" FOREIGN KEY ("id_rol") REFERENCES "Roles"("id_rol") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UrbanArts" ADD CONSTRAINT "UrbanArts_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Users"("id_user") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UrbanArts" ADD CONSTRAINT "UrbanArts_id_city_fkey" FOREIGN KEY ("id_city") REFERENCES "City"("id_city") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UrbanArts" ADD CONSTRAINT "UrbanArts_id_urbanartcategory_fkey" FOREIGN KEY ("id_urbanartcategory") REFERENCES "UrbanArtCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Markers" ADD CONSTRAINT "Markers_id_urbanart_fkey" FOREIGN KEY ("id_urbanart") REFERENCES "UrbanArts"("id_urbanart") ON DELETE RESTRICT ON UPDATE CASCADE;
