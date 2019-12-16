let afbeeldingen= [
    "https://images.pexels.com/photos/639123/pexels-photo-639123.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // Verticaal
    "https://images.pexels.com/photos/717988/pexels-photo-717988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1303094/pexels-photo-1303094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1303090/pexels-photo-1303090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/250177/pexels-photo-250177.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/40541/christmas-snow-snowman-decoration-40541.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1622539/pexels-photo-1622539.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // Verticaal
    "https://images.pexels.com/photos/716658/pexels-photo-716658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1028723/pexels-photo-1028723.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
];


for(i=0;i<afbeeldingen.length;i++){
        document.write(`<img src="${afbeeldingen[i]}">`);
    }