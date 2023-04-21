async function dispCountry() {
    let allCont = await fetch("https://restcountries.com/v3.1/all")
    let result = await allCont.json()
    console.log(result);
    result.forEach((element, index) => {
        let contName = element.name.common
        let languages = element.languages
        console.log(contName);
        showresult.innerHTML +=`
        <tbody>
            <tr class="">
            <td>${index+1}</td>
            <td>${contName}</td>
            <td>${element.capital}</td>
            <td>${element.population}</td>
            <td>${JSON.stringify(languages)}</td>
            <td>${element.independent}</td>
            </tr>
        </tbody>
            `
            // <td>${Object.values(languages)}</td>
    });
    }
    dispCountry()
    // note: <td>${element.name.common}</td> or <td>${contName}</td> can be used


    async function Independent() {
    let allCont = await fetch("https://restcountries.com/v3.1/all");
    let result = await allCont.json();
    let independentcountry = result.filter((country)=> (country.independent) == true);
    console.log(independentcountry);
    showresult.innerHTML =""
    independentcountry.forEach((element, index) => {
        // let contName = element.name.common
        // let languages = element.languages
        // console.log(contName);
        showresult.innerHTML +=`
        <tbody>
            <tr class="">
            <td>${index+1}</td>
            <td>${element.name.common}</td>
            <td>${element.capital}</td>
            <td>${element.population}</td>
            <td>${JSON.stringify(element.languages)}</td>
            <td>${element.independent}</td>
            </tr>
        </tbody>
    `
     });
    }
    // Independent()

    async function NonIndependent() {
        let allCont = await fetch("https://restcountries.com/v3.1/all");
        let result = await allCont.json();
        let nonindependentcountry = result.filter((element)=> (element.independent) == false);
        console.log(nonindependentcountry);
        showresult.innerHTML =""
        nonindependentcountry.forEach((element, index) => {
            let contName = element.name.common
            let languages = element.languages
            console.log(contName);
            showresult.innerHTML +=`
            <tbody>
                <tr class="">
                <td>${index+1}</td>
                <td>${contName}</td>
                <td>${element.capital}</td>
                <td>${element.population}</td>
                <td>${JSON.stringify(languages)}</td>
                <td>${element.independent}</td>
                </tr>
            </tbody>
        `
         });
        }
