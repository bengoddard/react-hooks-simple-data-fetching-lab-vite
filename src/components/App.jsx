import React, { useState, useEffect } from 'react';

function App() {
    const [image, setImage] = useState();
    const [loading, setLoading] = useState(true);

    function fetchImage(){
        setLoading(true);
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => {
                if(!response.ok) { throw new Error("Failed to fetch image"); }
                return response.json();
            })
            .then(data => {
                setImage(data.message);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }

    useEffect(fetchImage, []);

    return(
        <div>
            <h2>Dog Image</h2>
            {loading ? <p>Loading...</p> : ""}
            <img src={image} alt="dog image" />
            <button onClick={fetchImage}>Get New Dog</button>
        </div>
    )
}

export default App;