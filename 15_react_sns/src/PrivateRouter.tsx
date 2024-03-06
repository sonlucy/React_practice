import { Navigate } from "react-router-dom";
import { ReactElement, useEffect } from "react";

interface IPrivateRouter {
  component: ReactElement
}

function PrivateRouter({ component }: IPrivateRouter) {
  const access = false;

  useEffect(() => {
    if(!access){
      alert("로그인이 필요한 서비스입니다.");
    }
  }, [access]);
  
  return access ? component : <Navigate to="/login" replace />;
}

export default PrivateRouter;
