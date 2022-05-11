
async function usePostData(postbody, url) {

    console.log(JSON.stringify(postbody))
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(postbody)
    };

    try {
        const response = await fetch(url, requestOptions);
        // console.log("response", response);
        const fetchData = await response;

        // console.log("fetchdata",fetchData);
        return fetchData;

    }
    catch (error) {
        console.log(error.message);
        return error;
    }
}

export default usePostData;