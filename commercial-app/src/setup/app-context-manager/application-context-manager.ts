import { createContext } from "react";
import { UserContextInterface } from "../../utils/modal";

export const UserContext = createContext<UserContextInterface | null>(null);
