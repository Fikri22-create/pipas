function calculateCarbon() {
    let power = document.getElementById("electronic").value;
    let hours = document.getElementById("hours").value;
    let days = document.getElementById("days").value;
    let period = document.getElementById("period").value;
    let emissionFactor = 0.92; // kg CO2 per kWh

    let daysInPeriod = period === "perhari" ? 1 : period === "perbulan" ? 30 : 365;
    
    if (power && hours && days) {
        let energyConsumption = (power * hours * days * daysInPeriod) / 1000; // kWh dalam periode tertentu
        let carbonFootprint = energyConsumption * emissionFactor; // kg CO2 dalam periode tertentu
        document.getElementById("result").innerText = `Jejak karbon: ${carbonFootprint.toFixed(2)} kg CO2 ${period}`;
    } else {
        document.getElementById("result").innerText = "Silakan isi semua bidang terlebih dahulu.";
    }
}

function calculateElectricityCarbon() {
    let regionFactor = parseFloat(document.getElementById("region").value);
    let kwh = parseFloat(document.getElementById("kwh").value);
    let householdKwh = parseFloat(document.getElementById("household_kwh").value);
    
    if (!isNaN(kwh) && !isNaN(householdKwh)) {
        let individualCarbon = kwh * regionFactor;
        let householdCarbon = householdKwh * regionFactor;
        document.getElementById("result").innerText = `Jejak karbon individu: ${individualCarbon.toFixed(2)} kg CO2/bulan\nJejak karbon rumah tangga: ${householdCarbon.toFixed(2)} kg CO2/bulan`;
    } else {
        document.getElementById("result").innerText = "Silakan masukkan konsumsi listrik dengan benar.";
    }
}