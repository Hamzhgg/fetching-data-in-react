const API_KEY = 'ffdc47ace4ab406a90e81021240611'
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`

const show = async (city) => {
    try {
        const queryString = `&q=${city}`
        const res = await fetch(BASE_URL + queryString)
        const data = await res.json()
        console.log('Data:', data)
        return data
    } catch (error) {
      console.log(error)
    }
  }

 // show('New York')

 export { show }