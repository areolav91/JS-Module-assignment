import { createHtml } from "./components/createHtml.js";


const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;
let allProducts;

const resultsContainer = document.querySelector(".results");

async function getItems() {
  try {
    const response = await fetch(corsFix);
    const json = await response.json();
    console.log(json);
    allProducts = json.data;
    createHtml(json.data);
    
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = alert("error", error);
  }
};

getItems();

