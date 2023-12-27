//custom hooks can be viewed as essentially abstracting logic/simplfying your components 
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const useFact = () => {
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

    const handleRefetch = () => {
        refetch()
    }

    return { data, error, status, handleRefetch }
}

export default useFact;