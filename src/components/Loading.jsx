import React from 'react';
import {useFetchJson} from "../HOOKS/useFetchJson";
import Loader from "./Loader";

const Loading = () => {
  const [data, loading, error] = useFetchJson('http://localhost:9009/loading', {})
  return (
    <div>
      {loading && <Loader/>}
    </div>
  );
};

export default Loading;