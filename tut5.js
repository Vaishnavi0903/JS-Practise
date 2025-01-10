// async and await


function fetchData(){
    return new Promise((resolve , reject) => {
        setTimeout(()=> {
            resolve("Data fetched successfully");
        } , 4000)
    });
}


function fetchPosts(){
    return new Promise((resolve , reject) => {
        setTimeout(()=> {
            resolve("Posts fetched successfully");
        } , 2000)
    });
}

async function displayData(){
    const data = await fetchData();
    console.log(data);

    const data1 = await fetchPosts();
    console.log(data1);
}

//displayData();


async function fetchAll() {
    const [d , p] = await Promise.all([
        fetchData(),
        fetchPosts(),
    ]);
    console.log(p,d);
}

fetchAll();