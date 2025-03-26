import { searchProduct } from "./searchProduct";
const baseUrl = "http://localhost:4000";
const BACKEND_URL = "http://34.135.145.173:1337"
const url = `${BACKEND_URL}/api/products`

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

function parseJSON(response: Response) {
    return response.json().then(json => {
        console.log("Parsed JSON:", json);
        return json;
    });
}

function convertToSearchProductModels(data: any): searchProduct[] {
    console.log(`this is you data: `, data )

    let searchProducts: searchProduct[] = data.data.map(convertToSearchProductModel)
    return searchProducts
}



function convertToSearchProductModel(item: any): searchProduct {
    return new searchProduct(item);
}

const searchProductAPI = {

 

    get(searchText: string) {
        console.log(`this is url: ${url}`)
        console.log(`BACKEND_URL: ${BACKEND_URL}`)
        return fetch(`${url}?filters[product_name][$containsi]=${searchText}&sort=product_name`)
        //return fetch(`${url}?filters[product_name][$containsi]=${searchText}&sort=product_name&filters[categories][$containsi]=เสื้อผ้า`)

        
          .then(checkStatus)
          .then(parseJSON)
          .then(convertToSearchProductModels)
          .catch((error: TypeError) => {
            console.log("log client error " + error);
            throw new Error("There was an error retrieving the projects. Please try again.");
          });
      },

      getWithFilter(searchText: string, filter: string) {
        console.log(`this is url: ${url}?filters[product_name][$containsi]=${searchText}&sort=product_name&filters[categories][$containsi]=${filter}}`)
        console.log(`BACKEND_URL: ${BACKEND_URL}`)
        //return fetch(`${url}?filters[product_name][$containsi]=${searchText}&sort=product_name`)
        return fetch(`${url}?filters[product_name][$containsi]=${searchText}&sort=product_name&filters[categories][$containsi]=${filter}`)

        
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