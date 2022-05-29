import { list } from '@keystone-6/core';
import { text, timestamp } from '@keystone-6/core/fields';
import { cloudinaryImage } from '@keystone-6/cloudinary'; 
import { UsersRoles } from '../enums/usersroles.enum'; 

export const ItemImage = list({
  fields: {
    alt: text({ validation: { isRequired: true } }),
    image: cloudinaryImage({
      cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME ?? 'alenarasuk',
        apiKey: process.env.CLOUDINARY_API_KEY ?? '639437786523791',
        apiSecret: process.env.CLOUDINARY_API_SECRET ?? 'DHtx8_I7tlyASuCn0nfiWhuMOns',
        folder: process.env.CLOUDINARY_API_FOLDER ?? '',
      },
    }), 
    createdAt: timestamp({
      defaultValue: { kind: 'now' },
    }),
    lastModification: timestamp({
      defaultValue: { kind: 'now' },
      db: {
        updatedAt: true,
      },
    }),
  },
  access: {
    operation: {
      create: ({ session }) =>
        !!session && session.data.role !== UsersRoles.Customer,
      update: ({ session }) =>
        !!session && session.data.role !== UsersRoles.Customer,
      delete: ({ session }) =>
        !!session && session.data.role !== UsersRoles.Customer,
    },
  }, 	
});