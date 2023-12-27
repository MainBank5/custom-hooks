import useFact from "../Hooks/UseFact";

const Api = () => {

    const {data, status,error, handleRefetch} = useFact()
    

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

  return (
    <div>
        <h2>{data?.fact}</h2>
        <button onClick={handleRefetch}>More Facts</button>
    </div>
  )
}

export default Api