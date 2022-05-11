import { useState, useEffect } from 'react';

async function deleteData(url) {

    // console.log(JSON.stringify(postbody))
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