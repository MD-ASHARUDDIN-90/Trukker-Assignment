const dummmyData = [
    {
        f_name : "Ashar",
        f_name_arabic : "العصر",
        l_name : "Khan",
        l_name_arabic : "خان",
        gender : "Male",
        d_o_b : "04-02-1995",
        mobile : "9087655667",
        nation : "India",
        country_birth : "India",
        city_birth : "Kolkata",
        card_name : "Ashar Khan",
        street_name : "Bunrpur",
        country_name : "India",
        city_name : "Kolkata",
        zip : "713325",
        status : "Active",
        MoxeyID : `MXIN-DR${Math.floor(Math.random() * 10000)}`,
        Transporter : "Trukker",
        ExternalId : "ARB789065",
        CardNo : `******* ${Math.floor(Math.random) * 1000}`,
        isactive :false
    },
    {
        f_name : "Aman",
        f_name_arabic : "العصر",
        l_name : "Khan",
        l_name_arabic : "خان",
        gender : "Male",
        d_o_b : "20-09-1996",
        mobile : "9087655667",
        nation : "India",
        country_birth : "India",
        city_birth : "Kolkata",
        card_name : "Ashar Khan",
        street_name : "Bunrpur",
        country_name : "India",
        city_name : "Kolkata",
        zip : "713325",
        status : "Rejected",
        MoxeyID : `MXIN-DR${Math.floor(Math.random() * 10000)}`,
        Transporter : "Trukker",
        ExternalId : "ARB789065",
        CardNo : `******* ${Math.floor(Math.random()) * 1000}`,
        isactive :false
    },
    {
        f_name : "Harshit",
        f_name_arabic : "العصر",
        l_name : "Khan",
        l_name_arabic : "خان",
        gender : "Male",
        d_o_b : "20-09-1996",
        mobile : "9087655667",
        nation : "India",
        country_birth : "India",
        city_birth : "Kolkata",
        card_name : "Ashar Khan",
        street_name : "Bunrpur",
        country_name : "India",
        city_name : "Kolkata",
        zip : "713325",
        status : "IN-process",
        MoxeyID : `MXIN-DR${Math.floor(Math.random() * 10000)}`,
        Transporter : "Trukker",
        ExternalId : "ARB789065",
        CardNo : `******* ${Math.floor(Math.random()) * 1000}`,
        isactive :true
    }
]


let userData = JSON.parse(localStorage.getItem("userData")) || [];

let extendDiv;
let country;

function captureCountry(event) {
    console.log(event.target.value,"country seletc")
    country = event.target.value
}

function submit_form(event) {
  event.preventDefault();

//   const counter = 3
//   document.getElementById("inprocess") = counter + 1

  let f_name = document.getElementById("f_name").value;
  let m_name = document.getElementById("m_name").value;
  let l_name = document.getElementById("l_name").value;
  let gender = document.getElementById("gender").value;
  let f_name_arabic = document.getElementById("f_name_arabic").value;
  let m_name_arabic = document.getElementById("m_name_arabic").value;
  let l_name_arabic = document.getElementById("l_name_arabic").value;
  let d_o_b = document.getElementById("d_o_b").value;
  let mobile = document.getElementById("mobile").value;
  let nation = document.getElementById("nation").value;
  let country_birth = document.getElementById("country_birth").value;
  let city_birth = document.getElementById("city_birth").value;
  let card_name = document.getElementById("card_name").value;
  let street_name = document.getElementById("street_name").value;
  let country_name = document.getElementById("country_name").value;
  let city_name = document.getElementById("city_name").value;
  let zip = document.getElementById("zip").value;

  

  if (
    f_name === "" ||
    l_name === "" ||
    gender === "" ||
    d_o_b === "" ||
    mobile === "" ||
    nation === "" ||
    country_birth === "" ||
    city_birth === "" ||
    card_name === "" ||
    street_name === "" ||
    country_name === "" ||
    city_name === "" ||
    zip === ""
  ) {
    alert("Please fill in all fields");
    return;
  }

  const currentDate = new Date();
  const dateOfBirth = new Date(d_o_b);
  const diffInMilliseconds = currentDate - dateOfBirth;
  const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

  if (diffInYears < 18) {
    alert("User is not valid as age is less than 18 years");
    return;
  }

  const userDetails = {
    f_name,
    m_name,
    l_name,
    gender,
    f_name_arabic : "العصر",
    m_name_arabic,
    l_name_arabic : "العصر",
    d_o_b,
    mobile,
    nation,
    country_birth,
    city_birth,
    card_name,
    street_name,
    country_name,
    city_name,
    zip,
    status : "IN-process",
    MoxeyID : `MXIN-DR${Math.floor(Math.random() * 10000)}`,
    Transporter : "Trukker",
    ExternalId : `ARB78${Math.floor(Math.random()) * 1000}`,
    CardNo : `******* ${Math.floor(Math.random() * 10000)}`,
    isactive :true
  };
  console.log(userDetails);
  userData = [...userData, userDetails];
  localStorage.setItem("userData", JSON.stringify(userData));
  const data = JSON.parse(localStorage.getItem("userData"));
  console.log(data);
  extendDiv = document.getElementById("userDetails");
  let html = "";
  let count = 0
  let totalDriver = 0
  for (let i = 0; i < data.length; i++) {
    count++
    totalDriver++
    html += `<section id="user_render"><span  id= "idIs" >${data[i].status}</span><span>${data[i].MoxeyID}</span><span>${data[i].Transporter}</span> <span>${data[i].f_name} ${data[i].l_name}</span><span>${data[i].f_name_arabic} ${data[i].l_name_arabic}</span><span>${data[i].mobile}</span><span>${data[i].ExternalId}</span><span>${data[i].CardNo}</span><span title="">👁️‍🗨️ </span>
       </section>`;
  }
  document.getElementById("inprocess").innerHTML = count
  document.getElementById("total_driver").innerHTML = totalDriver
  extendDiv.innerHTML = html;
  console.log(extendDiv);
  
}

  window.onload = function () {
    const data = JSON.parse(localStorage.getItem("userData"));
    // localStorage.setItem("userData" , JSON.stringify(dummmyData))
    document.getElementById("inprocess").innerHTML = count
    document.getElementById("total_driver").innerHTML = totalDriver
    console.log(data.length)
    
    if (data) {
      extendDiv = document.getElementById("userDetails");
      let html = "";
  
      for (let i = 0; i < data.length; i++) {
        html += `<section id="user_render"><span id="driver_status">${data[i].status}</span><span>${data[i].MoxeyID}</span><span>${data[i].Transporter}</span> <span>${data[i].f_name} ${data[i].l_name}</span><span>${data[i].f_name_arabic} ${data[i].l_name_arabic}</span><span>${data[i].mobile}</span><span>${data[i].ExternalId}</span><span>${data[i].CardNo}</span> <span>👁️‍🗨️ </span>
       </section>`;
      }
  
      extendDiv.innerHTML = html;
      console.log(extendDiv);
    }
  };

  const apiKey = 'RGhzemVIZFQ2VWZWRGdUb2UwMUlBeW9MUEZyejd0dUwzaUhsYWExbQ==';
  const apiUrl = 'https://api.countrystatecity.in/v1/countries';
  const dropdown = document.getElementById('country_name');
  const dropdownCountryBirth = document.getElementById('country_birth');
  const dropdownCountryMain = document.getElementById('country_main');
  const dropdownCity = document.getElementById('city_name');
  const dropdownCityBirth = document.getElementById('city_birth');
  
  // Function to fetch and populate city dropdowns
  function fetchCities(selectedCountry, dropdownCity) {
    const apiCity = `https://api.countrystatecity.in/v1/countries/${selectedCountry}/cities`;
  
    // Clear the previous list of cities from the dropdown
    dropdownCity.innerHTML = '';
  
    // Fetch cities and populate city dropdown
    fetch(apiCity, {
      headers: {
        'X-CSCAPI-KEY': apiKey
      }
    })
    .then(response => response.json())
    .then(data => {
      data.forEach(city => {
        const option = document.createElement('option');
        option.value = city.id;
        option.text = city.name;
        dropdownCity.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }
  
  // Fetch countries and populate country dropdowns
  fetch(apiUrl, {
    headers: {
      'X-CSCAPI-KEY': apiKey
    }
  })
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      const option1 = document.createElement('option');
      option1.value = country.iso2;
      option1.text = country.name;
      dropdown.appendChild(option1);
      
      const option2 = document.createElement('option');
      option2.value = country.iso2;
      option2.text = country.name;
      dropdownCountryBirth.appendChild(option2);

      const option3 = document.createElement('option');
      option3.value = country.iso2;
      option3.text = country.name;
      dropdownCountryMain.appendChild(option3);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  
  // When a country is selected, fetch the list of cities for that country and populate the city dropdown
  dropdown.addEventListener('change', () => {
    const selectedCountry = dropdown.value;
    fetchCities(selectedCountry, dropdownCity);
  });
  
  dropdownCountryBirth.addEventListener('change', () => {
    const selectedCountryBirth = dropdownCountryBirth.value;
    fetchCities(selectedCountryBirth, dropdownCityBirth);
  });


  function  show() {
    document.getElementById("form").style.display = "unset"
    // document.getElementById("container").style.opacity = "0.5"
    document.getElementById("container").style.filter = "blur(10px)"

  }
  function  hide() {
    document.getElementById("form").style.display = "none"
    document.getElementById("container").style.filter = "blur(0px)"
  }