import { UsersRoles } from '../enums/usersroles.enum';

interface SessionObj {
  data: {
    role: UsersRoles;
    id: string;
  };
}

export function filterCustomerAccessCreate(
  session: SessionObj,
  inputData: any
) {
  if (session.data.role !== UsersRoles.Customer) {
    return true;
  }
  if (!inputData.user) {
    return false;
  }
  return (
    inputData.user.connect && inputData.user.connect.id === session.data.id
  );
}
