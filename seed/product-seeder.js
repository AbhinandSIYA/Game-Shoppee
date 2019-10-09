let dbConfig=require('../dbconfig/db-connect');

dbConfig.connect(function (error) {
    if (error){
        console.log('DB connection error')
        process.exit(1);
    } else{
        console.log('connected successfully and inserting data to db');

        dbConfig.get().collection('product').insertMany([
            {
                imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
                title:'Gothic Video Game',
                discription:'Awesome game....',
                price:'20'
            },
            {
                imagePath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYszyfRr8q_zIi-SHHHm6o4TTl_KBpPMWdGJKoDRB7S1D7JtNz',
                title:'Call Of Duty',
                discription:'super game!!',
                price:'15'
            },
            {
                imagePath: 'https://static-ca.ebgames.ca/images/products/742074/3max.jpg',
                title: 'Super Mario',
                discription: 'Nice game',
                price: '10'
            },
            {
                imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Fortnite_Save_The_World.jpg/220px-Fortnite_Save_The_World.jpg',
                title:'Fort Nite',
                discription:'Best game',
                price:'13'
            },
            {
                imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Assassin%27s_Creed_Chronicles_cover_art.jpg/220px-Assassin%27s_Creed_Chronicles_cover_art.jpg',
                title:'Assassins Creed',
                discription:'super game',
                price:'18'
            },
            {
                imagePath:'https://s1.gaming-cdn.com/images/products/1842/271x377/far-cry-5-cover.jpg',
                title:'Far Cry 5',
                discription:'Best game',
                price:'20'
            }
        ]);

    }

});

