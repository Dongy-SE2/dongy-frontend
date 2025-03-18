import { searchProduct } from "./searchProduct";
const baseUrl = "http:/localhost:4000";
const url = `http:/localhost:4000${baseUrl}/searchProducts`

function translateStatusToErrorMessage(status: number){
    switch(status){
        case 401: 
            return "Please login again";
        case 403:
            return "You do not have permission to view the project(s)."
        default:
            return "There was an error retrieving the project(s). Please try again."
    }
}

function checkStatus(response: any){
    if(response.ok){
        return response;
    } else {
        const httpErrorInfo = {
            status: response.status,
            statusText: response.statusText,
            url: response.url
        }
        console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`)

        let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status)
        throw new Error(errorMessage);
    }
}

function parseJSON(response: Response){
    return response.json()
}

function convertToSearchProductModels(data: any[]): searchProduct[] {
    let searchProducts: searchProduct[] = data.map(convertToSearchProductModel)
    return searchProducts
}

function convertToSearchProductModel(item: any): searchProduct {
    return new searchProduct(item);
}

const searchProductAPI = {

    get(page = 1, limit = 10) {
        return fetch(`${url}?_page=${page}&_limit=${limit}&_sort=name`)
          .then(checkStatus)
          .then(parseJSON)
          .then(convertToSearchProductModels)
          .catch((error: TypeError) => {
            console.log("log client error " + error);
            throw new Error("There was an error retrieving the projects. Please try again.");
          });
      },

    find(id: number) {
        return fetch(`${url}/${id}`)
            .then(checkStatus)
            .then(parseJSON)
            .then(convertToSearchProductModel)
    }
}

export { searchProductAPI }