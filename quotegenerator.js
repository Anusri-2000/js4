const quotes = [
    {
        quote:
            "Laughter is the shortest distance between two people.",
        author: "Victor Borge"
    },
    {
        quote:
            "Programmers are constantly making things more complicated than they need to be because future. Program for Today.",
        author: "Mark Twain"
    },
    {
        quote:
            "Code is like humor. When you have to explain it, It's Bad.",
        author: "St. Augustine"
    },
    {
        quote: "The proper use of comments is to compensate for our failure to express ourself in code.",
        author: "Robert C Martin"
    },
    {
        quote:
            "If You Can't deploy your services independently then they are not microservice. ",
        author: "Daniel Bryant"
    },
    {
        quote:
            "Programming is key concept who want to understand and must have interested of ourself.",
        author: " Robert Louis Stevenson"
    }
];


const btn = document.querySelector('.generate');


btn.addEventListener('click', () => {

    
    let random = Math.floor(Math.random() * quotes.length);
    

    
    document.querySelector('.quote').innerText = quotes[random].quote;
    document.querySelector('.author').innerText = quotes[random].author;

});