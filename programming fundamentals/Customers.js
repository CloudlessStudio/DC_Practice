let customers = [{
    customer: {
        firstName: "Konrad",
        lastName: "Pawlikowski",
        phone: "832-111-1111",
        email: "me@gmail.com",
        address: "123 elm street",
        orderData:[
            {
                orderNum: 1,
                orderDate: "Dec 23rd 2025",
                totalQty: 2,
                totalAmt: 100
                
            },
            {
                orderNum: 2,
                orderDate: "Dec 23rd 2025",
                totalQty: 16,
                totalAmt: 100
            }],
        itemData:[
            {
                itemNum: 85676,
                itemName: "Bread",
                qty: 1,
                price: "17$"
            },
            {
                itemNum: 85676,
                itemName: "Cigarettes",
                qty: 1,
                price: "17$"
            }]  
    }
}]

console.log(customers[0].customer);