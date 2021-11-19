import React from 'react';
import {useFetchJson} from "../HOOKS/useFetchJson";

const Error = () => {
  const [data, loading, error] = useFetchJson('http://localhost:9009/error', {})
  return (
    <div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Error;