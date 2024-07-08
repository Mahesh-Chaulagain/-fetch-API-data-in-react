import { useState, useEffect } from "react";

const Fetch = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        // Fetch data from the API when the component mounts
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
            return res.json();  // Parse the JSON response
        })
        .then((data) => {
            console.log(data);  // Log the fetched data to console
            setPhotos(data);    // Update the state with fetched photos
        });
    }, []);  // Empty dependency array means this effect runs only once after the initial render

    return (
        <div>
            {/* Map through the photos state array and render each photo as an image */}
            {photos.map((photo) => (
                <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
            ))}
        </div>
    );
}

export default Fetch;
