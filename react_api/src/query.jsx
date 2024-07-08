import { useQuery } from '@tanstack/react-query'

const Query = () => {
    const {data: comments, isLoading, error} = useQuery({
        queryFn: () => 
            fetch('https://jsonplaceholder.typicode.com/comments?_limit=10').then(
                (res) => res.json()
            ),
        queryKey: ['comments'],
    });
    // show a loading message while the data is fetching
    if(isLoading){
        return <h2>Loading...</h2>
    }
    // to handle error
    if(error){
        return <div className='error'>Error: error fetching</div>
    }
    return (
        <div>
            <h1 className='title'>Email address of user</h1>
            {comments.map((comment) => (
                <h2 key={comment.id} className='users'>
                    {comment.id}.{comment.email}
                </h2>
            ))}
        </div>
    )
}

export default Query;