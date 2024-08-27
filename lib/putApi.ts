const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API

export const putApi = async (
    endPoint: string,
    body: any,
    populate?: string[],
): Promise<[string | null, any]> => {
    let error: string | null = null;
    let response: any = null;
    const apiUrl = `${baseUrl}${endPoint}?${populate?.map(p => `populate=${p}&`).join('')}`;
    try {
        const apiCall = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_STRAPI_API_TOKEN as string,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        if (!apiCall.ok) throw new Error(`HTTP error! status: ${apiCall.status}`);
        const json = await apiCall.json();
        response = json?.data;
    } catch (err: any) {
        error = err.message;
    }
    return [error, response];
};
