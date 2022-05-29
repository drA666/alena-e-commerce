-- CreateEnum
CREATE TYPE "UserRoleType" AS ENUM ('admin', 'customer');

-- CreateEnum
CREATE TYPE "BookingStatusType" AS ENUM ('Created');

-- CreateEnum
CREATE TYPE "PayingStatusType" AS ENUM ('Created');

-- CreateEnum
CREATE TYPE "DeliveryStatusType" AS ENUM ('Created');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "email" TEXT NOT NULL DEFAULT E'',
    "password" TEXT NOT NULL,
    "role" "UserRoleType" DEFAULT E'customer',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAddress" (
    "id" TEXT NOT NULL,
    "addressName" TEXT NOT NULL DEFAULT E'',
    "name" TEXT NOT NULL DEFAULT E'',
    "streetAddress" TEXT NOT NULL DEFAULT E'',
    "streetAddress2" TEXT NOT NULL DEFAULT E'',
    "city" TEXT NOT NULL DEFAULT E'',
    "postCode" TEXT NOT NULL DEFAULT E'',
    "country" TEXT NOT NULL DEFAULT E'',
    "telNo" TEXT NOT NULL DEFAULT E'',
    "user" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "lastModification" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemsCart" (
    "id" TEXT NOT NULL,
    "user" TEXT,
    "lastModified" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "sumAll" DECIMAL(18,4) NOT NULL,

    CONSTRAINT "ItemsCart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "user" TEXT,
    "items" JSONB,
    "payment" TEXT,
    "delivery" TEXT,
    "employee" TEXT,
    "status" "BookingStatusType",
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "lastModification" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "description" JSONB NOT NULL DEFAULT '[{"type":"paragraph","children":[{"text":""}]}]',
    "seoDesc" TEXT NOT NULL DEFAULT E'',
    "price" DECIMAL(18,4),
    "stars" INTEGER,
    "discount" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "lastModification" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Discount" (
    "id" TEXT NOT NULL,
    "discount" INTEGER,
    "nextDelivery" TIMESTAMP(3),
    "amountInNextDelivery" INTEGER,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "lastModification" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Discount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "parent" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "lastModification" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ItemType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemImage" (
    "id" TEXT NOT NULL,
    "alt" TEXT NOT NULL DEFAULT E'',
    "image" JSONB,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "lastModification" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ItemImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paying" (
    "id" TEXT NOT NULL,
    "booking" TEXT,
    "sumAll" DECIMAL(18,4),
    "currency" TEXT NOT NULL DEFAULT E'',
    "externalId" TEXT NOT NULL DEFAULT E'',
    "status" "PayingStatusType",
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "lastModification" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Paying_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Delivery" (
    "id" TEXT NOT NULL,
    "status" "DeliveryStatusType",
    "externalId" TEXT NOT NULL DEFAULT E'',
    "booking" TEXT,
    "worker" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "lastModification" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Delivery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_User_useraddress" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Item_itemTypes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Item_itemImages" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ItemsCart_items" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ItemType_items" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "UserAddress_user_idx" ON "UserAddress"("user");

-- CreateIndex
CREATE INDEX "ItemsCart_user_idx" ON "ItemsCart"("user");

-- CreateIndex
CREATE INDEX "Booking_user_idx" ON "Booking"("user");

-- CreateIndex
CREATE INDEX "Booking_payment_idx" ON "Booking"("payment");

-- CreateIndex
CREATE INDEX "Booking_delivery_idx" ON "Booking"("delivery");

-- CreateIndex
CREATE INDEX "Booking_employee_idx" ON "Booking"("employee");

-- CreateIndex
CREATE INDEX "Item_discount_idx" ON "Item"("discount");

-- CreateIndex
CREATE INDEX "ItemType_parent_idx" ON "ItemType"("parent");

-- CreateIndex
CREATE INDEX "Paying_booking_idx" ON "Paying"("booking");

-- CreateIndex
CREATE INDEX "Delivery_booking_idx" ON "Delivery"("booking");

-- CreateIndex
CREATE INDEX "Delivery_worker_idx" ON "Delivery"("worker");

-- CreateIndex
CREATE UNIQUE INDEX "_User_useraddress_AB_unique" ON "_User_useraddress"("A", "B");

-- CreateIndex
CREATE INDEX "_User_useraddress_B_index" ON "_User_useraddress"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Item_itemTypes_AB_unique" ON "_Item_itemTypes"("A", "B");

-- CreateIndex
CREATE INDEX "_Item_itemTypes_B_index" ON "_Item_itemTypes"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Item_itemImages_AB_unique" ON "_Item_itemImages"("A", "B");

-- CreateIndex
CREATE INDEX "_Item_itemImages_B_index" ON "_Item_itemImages"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ItemsCart_items_AB_unique" ON "_ItemsCart_items"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemsCart_items_B_index" ON "_ItemsCart_items"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ItemType_items_AB_unique" ON "_ItemType_items"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemType_items_B_index" ON "_ItemType_items"("B");

-- AddForeignKey
ALTER TABLE "UserAddress" ADD CONSTRAINT "UserAddress_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemsCart" ADD CONSTRAINT "ItemsCart_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_employee_fkey" FOREIGN KEY ("employee") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_payment_fkey" FOREIGN KEY ("payment") REFERENCES "Paying"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_delivery_fkey" FOREIGN KEY ("delivery") REFERENCES "Delivery"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_discount_fkey" FOREIGN KEY ("discount") REFERENCES "Discount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemType" ADD CONSTRAINT "ItemType_parent_fkey" FOREIGN KEY ("parent") REFERENCES "ItemType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paying" ADD CONSTRAINT "Paying_booking_fkey" FOREIGN KEY ("booking") REFERENCES "Booking"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_worker_fkey" FOREIGN KEY ("worker") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_booking_fkey" FOREIGN KEY ("booking") REFERENCES "Booking"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_User_useraddress" ADD FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_User_useraddress" ADD FOREIGN KEY ("B") REFERENCES "UserAddress"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Item_itemTypes" ADD FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Item_itemTypes" ADD FOREIGN KEY ("B") REFERENCES "ItemType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Item_itemImages" ADD FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Item_itemImages" ADD FOREIGN KEY ("B") REFERENCES "ItemImage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemsCart_items" ADD FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemsCart_items" ADD FOREIGN KEY ("B") REFERENCES "ItemsCart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemType_items" ADD FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemType_items" ADD FOREIGN KEY ("B") REFERENCES "ItemType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
