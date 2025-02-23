export async function GET(request) {
    const users = [
        {
            id: 1,
            firstName: "Vladimir",
            lastName: "Somov",
            email: "somovvova16@gmail.com",
            phone: "+7 951 455 78 96",
            image: "https://cs8.pikabu.ru/post_img/big/2016/02/04/7/145458292112119207.jpg"
        },
        {
            id: 2,
            firstName: "Vladimir",
            lastName: "Somov",
            email: "somovvova16@gmail.com",
            phone: "+7 951 455 78 96",
            image: "https://cs8.pikabu.ru/post_img/big/2016/02/04/7/145458292112119207.jpg"
        },
        {
            id: 3,
            firstName: "Vladimir",
            lastName: "Somov",
            email: "somovvova16@gmail.com",
            phone: "+7 951 455 78 96",
            image: "https://cs8.pikabu.ru/post_img/big/2016/02/04/7/145458292112119207.jpg"
        },
        
    ];

    return new Response(JSON.stringify({ users }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}