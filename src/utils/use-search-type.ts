import { useLocation } from "react-router-dom";

const useSearchType = () => {
  const { search } = useLocation();
  const searchType = new URLSearchParams(search).get("type")!;

  return {
    searchType,
  };
};

export default useSearchType;
