import { searchProduct } from "./searchProduct";
const baseUrl = "http://localhost:4000";
const url = `${baseUrl}/searchProducts`

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

    get(searchText: string) {
        return fetch(`${url}/?_sort=product_name&product_name_like=${searchText}`)
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
    },

    post(searchText: string) {
        return fetch(`${url}/${searchText}`, {
          method: "POST",
          body: JSON.stringify({query: searchText}),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(checkStatus)
          .then(parseJSON)
          .catch((error: TypeError) => {
            console.log("log client error " + error);
            throw new Error("There was an error retriving the project. Please try again.");
          });
      }
}

export { searchProductAPI }