const apiKey = 'NWqHDjkE5mk4B8A5rX3H7GyP-sAM-Z4LQ_7i1gF1M6INCpYMoqAfTU7mOPBiUNde08dthg7LbmRvjG2iMZDaTJbX5KbhUJhC-mPZw3IwqDp9YprqaEvwzFuKVoPiXnYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then(response => response.json())
        .then(jsonResponse => {
            if (jsonResponse.businesses) {
                 return jsonResponse.businesses.map(business => {
                    return ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    });
                 })
            }
        });
    }

};

export default Yelp;