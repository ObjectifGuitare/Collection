const collection =
[
    {
        img: "https://upload.wikimedia.org/wikipedia/en/9/9c/MilesDavisKindofBlue.jpg",
        name: "Kind of blue",
        band: "Miles Davis",
        genre: "Jazz modal",
        musicians: [
            "Miles Davis", "John Coltrane", "Julian Cannonball Adderley", "Bill Evans", "Wynton Kelly", "Paul Chambers", "Jimmy Cobb"
        ],
        year: "1959",
        duration: "45:44",
    },
    {
        img: "https://i.discogs.com/QikH-8ZM-QV0uD0-eqzKah8Sop8iJG8ZD2tINCjT6HQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgzMDU2/NzMtMTQ1OTAxNTM0/OS03NzAyLmpwZWc.jpeg",
        name: "Light as a Feather",
        band: "Return to Forever",
        genre: "Jazz fusion",
        musicians: [
            "Chick Corea", "Stanley Clarke", "Joe Farrell", "Flora Purim", "Airto Moreira"
        ],
        year: "1972",
        duration: "45:28",
    },
    {   
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/SnarkyP_WeLike.jpg/220px-SnarkyP_WeLike.jpg",
        name: "We like it here",
        band: "Snarky Puppy",
        genre: "Jazz fusion",
        musicians: [
            "Michael League", "Mike Maher", "Jay Jennings", "Chris Bullock", "Bob Reynolds", "Yannick Hiwat", "Tessel Hersbach", "Mara Tieles", "Susanne Rosmolen", "Bill Laurance", "Justin Stanton", "Cory Henry the ultra goat", "Shaun Martin", "Bob Lanzetti", "Mark Lettieri", "Chris McQueen", "Larnell GOD Lewis ", "Julio Pimental", "Steven Brezet", "Nate Werth"
        ],
        year: "2014",
        duration: "54:38"
    },
    {   
        img: "https://www.large.be/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwc3343f30/images/4/3/0/3/430370.jpg?sw=1000&sh=800&sm=fit&sfrm=png",
        name: "Billy Talent II",
        band: "Billy Talent",
        genre: "Punk rock",
        musicians: [
            "Benjamin Kowalewicz", "Ian D'Sa", "Jonathan Gallant", "Aaron Solowoniuk"
        ],
        year: "2006",
        duration: "47:00"
    },
    {   
        img: "https://static.fnac-static.com/multimedia/FR/Images_Produits/FR/fnac.com/Visual_Principal_340/7/2/8/0074646510827/tsp20120921194236/Heavy-weather.jpg",
        name: "Heavy Weather",
        band: "Weather Report",
        genre: "Jazz Fusion",
        musicians: [
            "Joe Zawinul", "Wayne Shorter", "Jaco Pastorius", "Alex Acuña", "Manolo Badrena"
        ],
        year: "1977",
        duration: "37:39"
    },
    {   
        img: "https://media.s-bol.com/rmGWlEq6gK14/550x550.jpg",
        name: "In Waves",
        band: "Trivium",
        genre: "Metalcore",
        musicians: [
            "Matt Heafy", "Corey Beaulieu", "Paolo Gregoletto", "Nick Augusto"
        ],
        year: "2011",
        duration: "51:21"
    },
    {   
        img: "https://m.media-amazon.com/images/I/71M8yXz6o7L._SL1300_.jpg",
        name: "Demon Days",
        band: "Gorillaz",
        genre: "Rock alternatif - Hip Hop",
        musicians: [
            "Damon Albarn", "Danger Mouse", "Jason Cox", "James Dring", "Cass Browne", "Simon Tong", "Morgan Nicholls", "Sally Jackson", "Stella Page", "Amanda Drummond", "Isabelle Dunn", "Al Mobbs", "Emma Smith", "Prabjote Osahn", "Neneh Cherry", "Bootie Brown", "The San Fernandez Youth Chorus", "De La Soul", "Antonia Pagulatos", "Ike Turner", "MF Doom", "Roots Manuva", "Martina Topley-Bird", "Shaun Ryder", "Rosie Wilson", "Dennis Hopper", "London Community Gospel Choir"
        ],
        year: "2005",
        duration: "50:47"
    },
    {   
        img: "https://media.senscritique.com/media/000004816153/source_big/Minutes_to_Midnight.jpg",
        name: "Minutes to Midnight",
        band: "Linkin Park",
        genre: "Rock alternatif",
        musicians: [
            "Chester Bennington", "Rob Bourdon", "Brad Delson", "Dave Phoenix Farrell", "Joe Hahn", "Mike Shinoda"
        ],
        year: "2007",
        duration: "43:23"
    },
    {   
        img: "https://media.senscritique.com/media/000000184448/source_big/This_Is_Me.jpg",
        name: "This is me",
        band: "Emily Remler",
        genre: "Jazz Fusion",
        musicians: [
            "Emily Remler", "Romero Lubambo", "David Benoit", "Aydin Esen", "Bill O'Conell", "Jay Ashby", "Jimmy Johnson", "Lincoln Goines", "Jeff Porcaro", "Daduka Fonseca", "Ricky Sebastian", "Jeffrey Weber", "Luis Conte", "Edson Aparecido da Silva", "Maúcha Adnet"
        ],
        year: "1990",
        duration: "54:18"
    },
    {   
        img: "https://m.media-amazon.com/images/I/71oFtpSh4nL._SL1300_.jpg",
        name: "カシオペア",
        band: "Casiopea",
        genre: "Jazz Fusion",
        musicians: [
            "Tetsuo Sakurai", "Takashi Sasaki", "Issei Noro", "Minoru Mukaiya", "David Sanborn", "Michael Brecker", "Randy Brecker", "Tomato"
        ],
        year: "1979",
        duration: "36:38"
    },
]

function displayAlbum()
{
    let main = document.querySelector("main");
    let fig;
    let cover;
    let figcaption;
    let div;
    let name;
    let band;
    let duration;
    let year;
    let musicians;
    let genre;

    for (const album of collection)
    {
        fig = document.createElement("figure");
        cover = document.createElement("img");
        figcaption = document.createElement("figcaption");
        div = document.createElement("div");
        name = document.createElement("h3");
        band = document.createElement("i");
        duration = document.createElement("p");
        year = document.createElement("p");
        musicians = document.createElement("p");
        genre = document.createElement("p");
        
        name.appendChild(document.createTextNode(album.name));
        band.appendChild(document.createTextNode(album.band));
        duration.appendChild(document.createTextNode(album.duration));
        year.appendChild(document.createTextNode(album.year));
        musicians.appendChild(document.createTextNode("STARRING "));
        musicians.appendChild(document.createTextNode(album.musicians));
        genre.appendChild(document.createTextNode(album.genre));

        fig.appendChild(cover);
        fig.appendChild(figcaption);
        name.appendChild(band);
        div.appendChild(name);
        div.appendChild(duration);
        figcaption.appendChild(div);
        figcaption.appendChild(year);
        figcaption.appendChild(musicians);
        figcaption.appendChild(genre);
        document.querySelector("main").appendChild(fig);

        cover.setAttribute("src", album.img);
        cover.setAttribute("alt", "album cover");
        genre.setAttribute("class", "genre");
    }
}

displayAlbum();
console.log("bonjour");