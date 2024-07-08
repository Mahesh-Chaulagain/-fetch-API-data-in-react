// import useSWR from the swr package
import useSWR from 'swr';

// create a function to handle API request
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SWR = () => {
    const{
        data: countries,
        error,
        isValidating,
    }   = useSWR('https://restcountries.com/v2/all', fetcher);

    // handles error and loading state
    if (error) return <div className='failed'>failed to load </div>;
    if (isValidating) return <div className='Loading'>Loading...</div>

    return(
        <div>
            {countries && countries.map((country, index) => (
                <img key={index} src={country.flags.png} alt='flag' width={100} />
            ))}
        </div>
    )
}

export default SWR;