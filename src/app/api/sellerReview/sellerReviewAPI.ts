// import { sellerReview } from "./sellerReview";
// const baseUrl = "http://localhost:4000";
// const url = `${baseUrl}/sellerReviews`

// function translateStatusToErrorMessage(status: number){
//     switch(status){
//         case 401: 
//             return "Please login again";
//         case 403:
//             return "You do not have permission to view the project(s)."
//         default:
//             return "There was an error retrieving the project(s). Please try again."
//     }
// }

// function checkStatus(response: any){
//     if(response.ok){
//         return response;
//     } else {
//         const httpErrorInfo = {
//             status: response.status,
//             statusText: response.statusText,
//             url: response.url
//         }
//         console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`)

//         let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status)
//         throw new Error(errorMessage);
//     }
// }

// function parseJSON(response: Response){
//     return response.json()
// }

// function convertToSearchProductModels(data: any[]): sellerReview[] {
//     let sellerReviews: sellerReview[] = data.map(convertToSearchProductModel)
//     return sellerReviews
// }

// function convertToSearchProductModel(item: any): sellerReview {
//     return new sellerReview(item);
// }

// const sellerReviewAPI = {

//     get(seller_name: string) {
//         return fetch(`${url}/?_sort=review_name&seller_name=${seller_name}`)
//           .then(checkStatus)
//           .then(parseJSON)
//           .then(convertToSearchProductModels)
//           .catch((error: TypeError) => {
//             console.log("log client error " + error);
//             throw new Error("There was an error retrieving the projects. Please try again.");
//           });
//       },

//     // find(id: number) {
//     //     return fetch(`${url}/${id}`)
//     //         .then(checkStatus)
//     //         .then(parseJSON)
//     //         .then(convertToSearchProductModel)
//     // },

//     post({ seller_name, reviewer_name, star_rating, review_text }: sellerReview) {
//         return fetch(`${url}`, {
//           method: "POST",
//           body: JSON.stringify({
//               seller_name,
//               reviewer_name,
//               star_rating,
//               review_text
//           }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         })
//           .then(checkStatus)
//           .then(parseJSON)
//           .catch((error: TypeError) => {
//             console.log("log client error " + error);
//             throw new Error("There was an error retriving the project. Please try again.");
//           });
//       },


//       put(searchText: string, data: any) {
//         return fetch(`${url}/${searchText}`, {
//           method: "PUT",
//           body: JSON.stringify(data),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         })
//           .then(checkStatus)
//           .then(parseJSON)
//           .catch((error: TypeError) => {
//             console.log("log client error " + error);
//             throw new Error("There was an error updating the project. Please try again.");
//           });
//       }
// }



// export { sellerReviewAPI }