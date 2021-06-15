export function getExpenseApi() {
    var expenses = [
      {
        id: 1,
        date: "2020-11-15T18:30:00.000Z",
        exp_name: "bus_ticket",
        amount: 132,
        type: "transport"
      },
      {
        id: 2,
        date: "2020-11-16T18:30:00.000Z",
        exp_name: "lunch",
        amount: 200,
        type: "food"
      },
      {
        id: 3,
        date: "2020-11-16T18:30:00.000Z",
        exp_name: "petrol",
        amount: 500,
        type: "transport"
      },
      {
        id: 4,
        date: "2020-11-17T18:30:00.000Z",
        exp_name: "lunch",
        amount: 100,
        type: "food"
      },
      {
        id: 5,
        date: "2020-11-18T18:30:00.000Z",
        exp_name: "medicine",
        amount: 125,
        type: "health"
      },
      {
        id: 6,
        date: "2020-11-19T18:30:00.000Z",
        exp_name: "breakfast",
        amount: 90,
        type: "food"
      },
      {
        id: 7,
        date: "2020-11-19T18:30:00.000Z",
        exp_name: "health_Drink",
        amount: 90,
        type: "health"
      },
      {
        id: 8,
        date: "2020-11-20T18:30:00.000Z",
        exp_name: "snacks",
        amount: 40,
        type: "food"
      },
      {
        id: 9,
        date: "2020-11-20T18:30:00.000Z",
        exp_name: "guitar_wire",
        amount: 799,
        type: "entertainment"
      },
      {
        id: 10,
        date: "2020-11-21T18:30:00.000Z",
        exp_name: "shoes",
        amount: 1600,
        type: "cloths"
      },
      {
        id: 12,
        date: "2020-11-21T18:30:00.000Z",
        exp_name: "jeans",
        amount: 2100,
        type: "cloths"
      },
      {
        id: 13,
        date: "2020-11-21T18:30:00.000Z",
        exp_name: "icecream",
        amount: 149,
        type: "food"
      },
      {
        id: 14,
        date: "2020-11-21T18:30:00.000Z",
        exp_name: "movie_ticket",
        amount: 350,
        type: "entertainment"
      },
      {
        id: 15,
        date: "2020-11-22T18:30:00.000Z",
        exp_name: "petrol",
        amount: 20,
        type: "transport"
      },
      {
        id: 16,
        date: "2020-11-23T18:30:00.000Z",
        exp_name: "breakfast",
        amount: 90,
        type: "food"
      },
      {
        id: 17,
        date: "2020-11-23T18:30:00.000Z",
        exp_name: "lunch",
        amount: 190,
        type: "food"
      },
      {
        id: 18,
        date: "2020-11-23T18:30:00.000Z",
        exp_name: "bike_parking",
        amount: 190,
        type: "transport"
      },
      {
        id: 19,
        date: "2020-11-24T18:30:00.000Z",
        exp_name: "tea",
        amount: 40,
        type: "food"
      },
      {
        id: 20,
        date: "2020-11-25T18:30:00.000Z",
        exp_name: "ola_cab",
        amount: 80,
        type: "transport"
      },
      {
        id: 21,
        date: "2020-11-26T18:30:00.000Z",
        exp_name: "nariyal_pani",
        amount: 35,
        type: "food"
      },
      {
        id: 22,
        date: "2020-11-27T18:30:00.000Z",
        exp_name: "medicine",
        amount: 110,
        type: "health"
      },
      {
        id: 23,
        date: "2020-11-28T18:30:00.000Z",
        exp_name: "snacks",
        amount: 60,
        type: "food"
      },
      {
        id: 24,
        date: "2020-11-29T18:30:00.000Z",
        exp_name: "bike_parking",
        amount: 70,
        type: "transport"
      },
      {
        id: 25,
        date: "2020-11-30T18:30:00.000Z",
        exp_name: "lunch",
        amount: 90,
        type: "food"
      }
    ];
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(expenses);
      }, 3000);
    });
  }
  