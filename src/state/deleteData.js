
async function deleteData(url) {

    const requestOptions = {
        method: 'DELETE',
    };

    try {
        const response = await fetch(url, requestOptions);
        const fetchData = await response;

        return fetchData;

    }
    catch (error) {
        console.log(error.message);
        return error;
    }
}

export default deleteData;