import { useCallback, useState } from "react";

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState();

  const onSelectUser = useCallback(() => {}, []);
  return { onSelectUser };
};
