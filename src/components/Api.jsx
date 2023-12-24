import { useQuery, useMutation } from "@tanstack/react-query";
import axios from 'axios'

const Api = () => {
    const {data, error, status, refetch} = useQuery({
        queryKey: ['api'],  // unique key to this particular request (url)
        queryFn: async () => {
            try{
                const res = await axios.get("https://catfact.ninja/fact");
                return res.data
            }
            catch(error) {
                throw new Error('Error:', error);
            }
        },
        //refetchInterval:2000,
    });

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

  return (
    <div>
        <h2>{data?.fact}</h2>
        <button onClick={() => {refetch()}}>More Facts</button>
    </div>
  )
}

export default Api