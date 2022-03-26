let getData = async () => {
    let response = await axios.get('https://ergast.com/api/f1/2020/1/driverStandings');
    if (response.status == 200){
        return response.data
    }
    return'api call broken'
}
getData();