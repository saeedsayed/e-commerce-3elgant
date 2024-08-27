// get api token from environment variable
const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API;

export const getData = async (
    endPoint: string,
    populate?: string[],
    filters?: {
        filter: string;
        operator: string;
        value: string | null | undefined;
    }[]
): Promise<[string | null, any]> => {
    let error: string | null = null;
    let response: any[] = [];
    // construct query params
    const populates = !!populate ? populate.map((p, i) => `populate=${p}&`) : "";
    const filter = !!filters
        ? filters.map(
            ({ filter, operator, value }) =>
                `filters${filter}[$${operator}]=${value}&`
        )
        : "";
    // construct api url with query params and remove commas
    const apiUrl = `${baseUrl}${endPoint}?${populates}${filter}`.replaceAll(",", "");
    try {
        // fetch data from api url
        const apiCall = await fetch(apiUrl, {
            headers: {
                Authorization: ("Bearer " +
                    process.env.NEXT_PUBLIC_STRAPI_API_TOKEN) as string,
            },
        });
        // check if api call is successful
        if (!apiCall.ok) throw new Error(`HTTP error! status: ${apiCall.status}`);
        // parse response data
        const json = await apiCall.json();
        response = json.data;
    } catch (err: any) {
        // set error message
        error = err.message;
    }
    // return error and response
    return [error, response];
};
