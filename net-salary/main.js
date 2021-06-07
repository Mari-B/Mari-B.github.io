function calculateTaxes() {
    let grossSalary = parseFloat(document.getElementById("gross-salary").value.replace(/,/g, ''));
    let taxDue = document.getElementById("tax-due");
    let niDue = document.getElementById("NI-due");
    let netPay = document.getElementById("net-pay");

    const formatter = new Intl.NumberFormat('en-UK', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2
      })

    if(grossSalary <= 15000) {
        taxDue.innerHTML = formatter.format(0)
        niDue.innerHTML = formatter.format(0)
        netPay.innerHTML = formatter.format(grossSalary)
    }
    else if(grossSalary > 15000 && grossSalary <= 50000) {
        tax = ((grossSalary - 15000)/100) * 20
        ni = ((grossSalary - 15000)/100) * 12
        taxDue.innerHTML = formatter.format(tax)
        niDue.innerHTML = formatter.format(ni)
        netPay.innerHTML = formatter.format(grossSalary - tax - ni)
    }
    else {
        taxableIncome1 = (grossSalary - 15000) - (grossSalary - 50000)
        tax1 = (taxableIncome1/100) * 20
        tax2 = ((grossSalary - 50000)/100) * 40
        totalTax = tax1 + tax2
        ni1 = (taxableIncome1/100) * 12
        ni2 = ((grossSalary - 50000)/100) * 2
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



