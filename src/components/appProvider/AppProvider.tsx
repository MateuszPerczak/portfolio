import type {FC, PropsWithChildren} from "react";

const AppProvider: FC<PropsWithChildren> = ({children}) => {
	return <>{children}</>;
};
export default AppProvider;