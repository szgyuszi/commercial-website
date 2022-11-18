import { useState } from "react";
import RoutesManager from "./setup/routes-manager";
import { UserContextInterface } from "./utils/modal";
import { UserContext } from "./setup/app-context-manager/application-context-manager";

function App() {
  const [user, setUser] = useState<UserContextInterface | null>(null);

  return (
    <UserContext.Provider value={user}>
      <RoutesManager />
    </UserContext.Provider>
  );
}

export default App;
