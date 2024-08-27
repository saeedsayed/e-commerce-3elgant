// get api token from environment variable
const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API

export const postApi = async (
    endPoint: string,
    body: any
): Promise<[string | null, any]> => {
    let error: string | null = null;
    let response: any = null;
    // construct api url
    const apiUrl = `${baseUrl}${endPoint}`;
    try {
        // fetch data form api and send data with request
        const apiCall = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_STRAPI_API_TOKEN as string,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        // check if api call is successful
        if (!apiCall.ok) throw new Error(`HTTP error! status: ${apiCall.status}`);
        // parse response data
        const json = await apiCall.json();
        response = json?.data;
    } catch (err: any) {
        // set error message
        error = err.message;
    }
    // return error and response
    return [error, response];
};
