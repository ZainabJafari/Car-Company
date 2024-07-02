export async function fetchCars() {
    const headers = {
		'x-rapidapi-key': '17c0d40f4emsh3d4536a0fb70b1ap1cb616jsnab28c51e6a77',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    })

    const result = await response.json()

    return result

}