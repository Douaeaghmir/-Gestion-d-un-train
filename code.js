const prompt = require("prompt-sync")();

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

function displayTrips() 
{
    for (let trip of trips) 
    {
        console.log("Trajet #" + trip.id);
        console.log("Départ : " + trip.departure);
        console.log("Destination : " + trip.destination);
        console.log("Heure de départ : " + trip.departureTime);
        console.log("Heure d'arrivée : " + trip.arrivalTime);
        console.log("Prix : " + trip.price);
        console.log("Places disponibles : " + trip.availableSeats);
    }
}

let tickets = [];
let ticketn = 1;
let placerm = [];

function achterticket()
{
    let ticket = [];
    let name = prompt("enter you name : ");
    let tid = Number(prompt(" enter traget id : "));

    let store;

    for(let i = 0; i < trips.length; i++)
    {
        if(trips[i].id === tid)
        {
            store = trips[i];
            break;
        }
    }

    if(store == undefined)
    {
        console.log("Trip not found!");
        return;
    }

    if(store.availableSeats === 0)
    {
        console.log("are tickets are sold!");
        return;
    }

    let place1;
    let found = false;
    for(let i = 0; i < placerm.length; i++)
    {
        if(placerm[i].tripid === tid)
        {
            place1 = placerm[i].place;
            placerm.splice(i, 1);
            found = true;
            break;
        }
    }
    if(found === false)
    {
        place1 = 50 - store.availableSeats + 1;
    }

    ticket = {
        serialnumber : ticketn,
        passangername : name,
        tripid : store.id,
        departure : store.departure,
        destination : store.destination,
        place : place1,
        prix : store.price
    };

    tickets.push(ticket);
    ticketn++;
    store.availableSeats--;

    console.log("--- Your tickets Purchased succesfully ---");
    console.table(tickets);
}

function annule()
{
    let sid;
    let idr = Number(prompt("enter your id : "));

    for(let i = 0; i < tickets.length; i++)
    {
        if(tickets[i].serialnumber === idr)
        {
            sid = tickets[i].tripid;
            placerm.push({
                tripid: tickets[i].tripid,
                place: tickets[i].place
            });

            for(let j = 0; j < trips.length; j++)
            {
                if(trips[j].id === sid)
                {
                    trips[j].availableSeats++;
                    break;
                }
            }

            tickets.splice(i, 1);

            console.log("your ticket was remove succefully");
            return;
        }
    }

    console.log("ticket was not found!");
    return;
}

function sort()
{
    let holder;

    let chose = Number(prompt(
        `---- Sort by price ----
1 - Low to high
2 - High to low
Choose: `
    ));

    if(chose === 1)
    {
        for(let i = 0; i < trips.length; i++)
        {
            for(let j = 0; j < trips.length - i - 1; j++)
            {
                if(trips[j].price > trips[j + 1].price)
                {
                    holder = trips[j];
                    trips[j] = trips[j + 1];
                    trips[j + 1] = holder;
                }
            }
        }
    }
    else if(chose === 2)
    {
        for(let i = 0; i < trips.length; i++)
        {
            for(let j = 0; j < trips.length - i - 1; j++)
            {
                if(trips[j].price < trips[j + 1].price)
                {
                    holder = trips[j];
                    trips[j] = trips[j + 1];
                    trips[j + 1] = holder;
                }
            }
        }
    }

    for(let i = 0; i < trips.length; i++)
    {
        console.log(
            trips[i].departure + "->" +
            trips[i].destination + " : " +
            trips[i].price + " DH"
        );
    }
}

function affallticket()
{
    console.log("==All the tickets==");

    for(let i = 0; i < tickets.length; i++)
    {
        console.log("traject id : " + tickets[i].serialnumber);
        console.log("depart : " + tickets[i].passangername);
        console.log(tickets[i].departure + " -> " + tickets[i].destination);
        console.log("set : " + tickets[i].place);
        console.log("price : " + tickets[i].prix);
    }
}

function recherchticket()
{
    let cname = prompt("enter your name : ");

    for(let i = 0; i < tickets.length; i++)
    {
        if(tickets[i].passangername === cname)
        {
            console.log("traject id : " + tickets[i].serialnumber);
            console.log("depart : " + tickets[i].passangername);
            console.log(tickets[i].departure + " -> " + tickets[i].destination);
            console.log("set : " + tickets[i].place);
            console.log("price : " + tickets[i].prix);
        }
    }
}

function filter()
{
    let depart = prompt("enter your depart : ");

    for(let i = 0; i < trips.length; i++)
    {
        if(trips[i].departure === depart)
        {
            console.log(
                trips[i].departure + "->" +
                trips[i].destination + " : " +
                trips[i].price + " DH"
            );
        }
    }
}

function affmenu()
{
    console.log(`=================================  
        RAILWAY MANAGER
=================================
1. Afficher les trajets
2. Acheter un ticket
3. Afficher les tickets
4. Annuler un ticket
5. Rechercher un ticket
6. Filtrer les trajets
7. Trier les trajets
0. Quitter`);
}

while(true)
{
    let aff = affmenu();
    let uvalue = Number(prompt("enter your choise : "));

    switch(uvalue)
    {
        case 1:
            displayTrips();
            break;

        case 2:
            achterticket();
            break;

        case 3:
            affallticket();
            break;

        case 4:
            annule();
            break;

        case 5:
            recherchticket();
            break;

        case 6:
            filter();
            break;

        case 7:
            sort();
            break;

        case 0:
            process.exit();
    }
}