async function dispCountry() {
    let allCont = await fetch("https://restcountries.com/v3.1/all")
    let result = await allCont.json()
    console.log(result);
    result.forEach((element, index) => {
        let contName = element.name.common
        let languages =element.languages
        console.log(contName);
        showresult.innerHTML +=`
        <tbody>
            <tr class="">
            <td>${index+1}</td>
            <td>${contName}</td>
            <td>${element.capital}</td>
            <td>${element.population}</td>
            <td>${languages}</td>
            <td>${element.independent}</td>
            </tr>
        </tbody>
            `
            // <td>${Object.values(languages)}</td>
    });
    }
    dispCountry()
    // note: <td>${element.name.common}</td> or <td>${contName}</td> can be used

    function Independent() {
        
        // let independent = result.filter((independent)=> (element.independent) == "true") 
        dispCountry()  
    }