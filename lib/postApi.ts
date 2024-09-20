// get api token from environment variable
const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API

export const postApi = async (
    endPoint: string,
    body: any,
    populate?: string[],
    type?: 'formData' | 'json'
): Promise<[string | null, any]> => {
    let error: string | null = null;
    let response: any = null;
    try {
        const populates = !!populate ? populate.map((p, i) => `populate=${p}&`) : "";
        // construct api url
        const apiUrl = `${baseUrl}${endPoint}?${populates}`;
        const requestOption ={
            method: 'POST',
            headers: type === 'formData'? {
                'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_STRAPI_API_TOKEN as string,
            }:{
                'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_STRAPI_API_TOKEN as string,
                'Content-Type':  'application/json'
            },
            body: type === "formData" ? body : JSON.stringify(body)
        }
        // fetch data form api and send data with request
        const apiCall = await fetch(apiUrl, requestOption as any);
        // check if api call is successful
        if (!apiCall.ok) throw new Error(`HTTP error! status: ${apiCall.status}`);
        // parse response data
        const json = await apiCall.json();
        response = json?.data || json[0];
    } catch (err: any) {
        // set error message
        error = err.message;
    }
    // return error and response
    return [error, response];
};
