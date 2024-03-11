import { useMutation } from "react-query";

const UseMutationTest = () => {
  const { data, reset, mutate, isLoading } = useMutation(
    ["users"],
    (newPost) => {
      return fetch("https://jsonplaceholder.org/users", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => response.json());
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log("data", data);
  return (
    <div className="app">
      <button
        onClick={() => mutate({ title: "TEST", body: "TEST-body", userId: 1 })}
      >
        Add Data
      </button>
      <button onClick={() => reset()}>Delete Data</button>
    </div>
  );
};

export default UseMutationTest;
