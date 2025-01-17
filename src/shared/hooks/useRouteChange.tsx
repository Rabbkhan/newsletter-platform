import { sideBarActiveItem } from "@/app/configs/constants";
import { useAtom } from "jotai";




const useRouteChange = (): [string, (value: string) => void] => {
  const [activeRoute, setActiveRoute] = useAtom(sideBarActiveItem);
  return [activeRoute, setActiveRoute];
};





export default useRouteChange;
