import axios from "axios";

// fetching a joke from chucknorris.io api using axios (promise based rest client)

/*
    axios.get("https://api.chucknorris.io/jokes/random")
        .then(joke => {
            console.log(joke.data.value);
        }).catch(err => {
            console.log(err);
        });
*/

// better with async function and try and catch

const fetchJoke = async (url) => {
  try {
    const joke = await axios.get(url);
    console.log(joke.data.value);
  } catch (error) {
    console.log(error);
  }
};

fetchJoke("https://api.chucknorris.io/jokes/random");
