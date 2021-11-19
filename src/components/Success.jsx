import React from 'react';
import {useFetchJson} from "../HOOKS/useFetchJson";

const Success = () => {
  const [data, loading, error] = useFetchJson('http://localhost:9009/data', {})
  return (
    <div>
      {data && <p className="text-centered">{data.status}</p>}
    </div>
  );
};

export default Success;