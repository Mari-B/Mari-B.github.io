function calculateTaxes() {
    let grossSalary = parseFloat(document.getElementById("gross-salary").value.replace(/,/g, ''));
    let taxDue = document.getElementById("tax-due");
    let niDue = document.getElementById("NI-due");
    let netPay = document.getElementById("net-pay");
    const taxPer1 = 20;
    const taxPer2 = 40;
    const niPer1 = 12;
    const niPer2 = 2;
    const minWage = 15000;
    const maxWage = 50000;  
    

    const formatter = new Intl.NumberFormat('en-UK', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2
      })

    if(isNaN(grossSalary)) {
        alert("Type in your salary!");
        taxDue.innerHTML = formatter.format(0)
        niDue.innerHTML = formatter.format(0)
        netPay.innerHTML = formatter.format(0)
    }
    else if(grossSalary <= minWage) {
        taxDue.innerHTML = formatter.format(0)
        niDue.innerHTML = formatter.format(0)
        netPay.innerHTML = formatter.format(grossSalary)
    }
    else if(grossSalary > minWage && grossSalary <= maxWage) {
        tax = ((grossSalary - minWage)/100) * taxPer1
        ni = ((grossSalary - minWage)/100) * niPer1;
        taxDue.innerHTML = formatter.format(tax)
        niDue.innerHTML = formatter.format(ni)
        netPay.innerHTML = formatter.format(grossSalary - tax - ni)
    }
    else {
        taxableIncome1 = (grossSalary - minWage) - (grossSalary - maxWage)
        tax1 = (taxableIncome1/100) * taxPer1
        tax2 = ((grossSalary - maxWage)/100) * taxPer2
        totalTax = tax1 + tax2
        ni1 = (taxableIncome1/100) * niPer1
        ni2 = ((grossSalary - maxWage)/100) * niPer2
        totalNi = ni1+ni2
        taxDue.innerHTML = formatter.format(totalTax)
        niDue.innerHTML = formatter.format(totalNi)
        netPay.innerHTML = formatter.format(grossSalary - totalTax - totalNi)
    }
}

new Cleave('.form-control', {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand'
});

document.getElementById("button-addon2").addEventListener("click", calculateTaxes);



