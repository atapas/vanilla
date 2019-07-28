// Customer object
let customers = [
   {
      'id': 001,
      'f_name': 'Abby',
      'l_name': 'Thomas',
      'gender': 'M',
      'married': true,
      'age': 32,
      'expense': 500,
      'purchased': ['Shampoo', 'Toys', 'Books']
   },
   {
      'id': 002,
      'f_name': 'Jerry',
      'l_name': 'Tom',
      'gender': 'M',
      'married': true,
      'age': 64,
      'expense': 100,
      'purchased': ['Stick', 'Blade']
   },
   {
      'id': 003,
      'f_name': 'Dianna',
      'l_name': 'Cherry',
      'gender': 'F',
      'married': true,
      'age': 22,
      'expense': 1500,
      'purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Books']
   },
   {
      'id': 004,
      'f_name': 'Dev',
      'l_name': 'Currian',
      'gender': 'M',
      'married': true,
      'age': 82,
      'expense': 90,
      'purchased': ['Books']
   },
   {
      'id': 005,
      'f_name': 'Maria',
      'l_name': 'Gomes',
      'gender': 'F',
      'married': false,
      'age': 7,
      'expense': 300,
      'purchased': ['Toys']
   }
];

// filter example - Build Customer Data for Senior Citizens
const seniorCustomers = customers.filter((customer) => {
   return (customer.age >= 60)
});
console.log('[filter] Senior Customers = ', seniorCustomers);

// map example - Build Customer Data with initial and full name
const customersWithFullName = customers.map((customer) => {
   let initial = '';
   if(customer.gender === 'M') {
      initial = 'Mr.';
   } else if(customer.gender === 'F' && customer.married) {
      initial = 'Mrs.';
   } else {
      initial = 'Miss';
   }
   customer['full_name'] = initial 
                           + " " 
                           + customer.f_name 
                           + " " 
                           + customer.l_name;
   return customer;
});
console.log('[map] Customers With Full Name = '
               , customersWithFullName);

// reduce example - Get the Average age of the Customers who purchased 'Books'
let count = 0;
const total = customers.reduce((accumulator, customer, currentIndex, array) => {
   if(customer.purchased.includes('Books')) {
      accumulator = accumulator + customer.age;
      count = count + 1;
   }
   return (accumulator);
}, 0);
console.log('[reduce] Customer Avg age Purchased Books:', Math.floor(total/count));

// some example - Check if the condition is satisfied for at least one of the
// elements in the Array
const hasYoungCustomer = customers.some((customer) => {
   return (customer.age < 10);
});
console.log('[some] Has Young Customer(Age < 10):', hasYoungCustomer);

// find example - Check if the condition is satisfied for any of the
// elements in the Array. If found, return it.
const foundYoungCustomer = customers.find((customer) => {
   return (customer.age < 10);
});
console.log('[find] Found Young Customer(Age < 10):', foundYoungCustomer);

// every example - Check if the condition is satisfied for all of the
// elements in the Array
const allCustomersWithPurchase = customers.every((customer) => {
   return (customer.purchased.length >= 1);
})
console.log('[every] All Customers With Purchase:', allCustomersWithPurchase);

// combine map() reduce() filter() - Get the total amount spent by Married customers

// filter the married customers
const marriedCustomers = customers.filter((customer) => {
   return (customer.married);
});

// map to get their spendings
const expenseMapped = marriedCustomers.map((marriedCustomer) => {
   return marriedCustomer.expense;
});

// reduce to sum up the total expense of all married customers
const totalExpenseMarriedCustomer = expenseMapped.reduce((accum, expense) => {
   return accum + expense;
}, 0);

console.log('Total Expense of Married Customers in INR: ', totalExpenseMarriedCustomer);

// Orchestrating together
const OrchestratedTotal = customers
                     .filter(customer => customer.married)
                     .map(married => married.expense)
                     .reduce((accum,expense) => accum + expense);
console.log('Orchestrated total expense in INR: ', OrchestratedTotal);

// Transform the Customer Array with id as key to get the full info
const idBasedCustomers = customers.reduce((accum, customer) => {
   return ((accum[customer.id] = customer), accum);
}, {});
console.log('[reduce] Id Based Customers = ', idBasedCustomers);

// Group Customers by Gender (Just the count)
const groupCustCountByGender = customers.reduce((accum, customer) => {
   accum[customer.gender] = accum[customer.gender] + 1 || 1;
   return accum;
}, {});
console.log('Group Cust Count By Gender = ', groupCustCountByGender);



