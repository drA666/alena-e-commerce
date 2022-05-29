import { UsersRoles } from '../enums/usersroles.enum';

interface SessionObj {
  data: {
    role: UsersRoles;
    id: string;
  };
}

export function filterCustomerAccess(session: SessionObj) {
  if (session.data.role !== UsersRoles.Customer) {
    return {};
  }
  return { user: { id: { equals: session.data.id } } };
}
