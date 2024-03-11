import { useQuery } from "react-query";

const UseQueryTest = () => {
  const fetchData = useQuery(
    ["posts"],
    () => {
      return fetch("https://jsonplaceholder.org/posts").then((response) =>
        response.json()
      );
    },
    {
      enabled: false,
    }
  );

  const { data, isLoading, refetch } = fetchData;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <button onClick={() => refetch()}>Fetch Data</button>
      <div>{data && data.map((dt, i) => <div key={i}>{dt.title}</div>)}</div>
    </div>
  );
};

export default UseQueryTest;
