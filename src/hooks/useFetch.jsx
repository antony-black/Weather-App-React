import { useState, useEffect } from "react";
import { FetchService } from "../services/fetch.service";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setPending(true);
      try {
        const response = await FetchService.getData(url, options);
        setData(response);
        setErrorMsg("");
      } catch (error) {
        setErrorMsg("An error occurred");
      } finally {
        setPending(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, pending, errorMsg };
}
