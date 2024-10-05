console.log("video script added");
// 1 - Fetch, Load and Show Catagories on html

// create loadCategories
const loadCategories = () => {

    // fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error));
}

// create displayCategories
const displayCategories = (data) => {
    // add data in html
    console.log(data);
}

loadCategories();
