import { config } from '@keystone-6/core';
import { lists } from './schema';
import { withAuth, session } from './auth';
import { UsersRoles } from './enums/usersroles.enum'; 
import { accessEnv, sendPasswordResetEmail } from "./lib"; 
const deployPrevURL = new RegExp(accessEnv("DEPLOY_PREV_URL", "localhost"));
const prodURL = accessEnv("PROD_URL", "https://change-me.vercel.app/"); 

export default withAuth(
  config({
    db: {
      provider: 'postgresql',
      url:
        process.env.DATABASE_URL ||
        'postgres://user:password@localhost/AlenaEcommerce',
      enableLogging: true,
      useMigrations: true,
    },
    ui: {
      isAccessAllowed: (context) =>
        context.session && context.session.data.role !== UsersRoles.Customer,
    }, 
    server: {
      port: Number(process.env.BACKEND_PORT) || 5000,
	  cors: {
        origin: [new RegExp("localhost"), deployPrevURL, prodURL],
        credentials: true,
      }, 
    },
    lists,
    session,
  })
);