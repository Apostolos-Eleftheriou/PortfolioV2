export const portfolioData = {
    name: "Apostolis",
    title: "Frontend Engineer",
    tagline: "I build fast, modern, responsive web applications that deliver outstanding user experiences and drive business results. With a focus on clean architecture and scalable solutions, I bridge the gap between product vision and technical execution.",
    email: "eleftheriou.apostolis@gmail.com",

    socials: [
        {
            name: "GitHub",
            url: "https://github.com/Apostolos-Eleftheriou",
            icon: "github"
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/apostolis.eleftheriou/",
            icon: "facebook"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/apostolis_elef/?utm_medium=copy_link",
            icon: "instagram"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/apostoliselef",
            icon: "linkedin"
        }
    ],

    skills: [
        {
            name: "React JS",
            logo: "images/React.svg"
        },
        {
            name: "Vue JS",
            logo: "images/vue.svg"
        },
        {
            name: "Astro JS",
            logo: "images/Astro.svg"
        },
        {
            name: "Nuxt JS",
            logo: "images/Nuxt_JS.svg"
        },
        {
            name: "Ionic",
            logo: "images/Ionic.svg"
        },
        {
            name: "Tailwind CSS",
            logo: "images/tailwind.svg"
        },
        {
            name: "Ant Design",
            logo: "images/AntDesign.svg"
        },
        {
            name: "Bootstrap",
            logo: "images/Bootstrap.svg",
            brightnessFilter: true
        },
        {
            name: "Redux",
            logo: "images/Redux.svg"
        },
        {
            name: "Git",
            logo: "images/Git.svg"
        },
    ],

    // bio: [
    //     "I'm 31 years old, my love for computers and technology goes all the way back to when I was 9 years old. That was when I first saw a VT220 (a computer terminal which had only a screen and a keyboard). I was but a little kid stroking the keyboard pretending to be coding. That is my first memory as a child and quite frankly what later in my life proved to be what I actually love doing.",
    //     "Fast forward to 2021, after working in various industries, I decided to improve my life by embarking on a journey with a curriculum called The Odin Project. Through this program, I enhanced my problem-solving skills and learned programming concepts, changing how I think and approach problems. As a fast learner, I quickly grasped these concepts. I am committed to this never-ending journey of knowledge and strive to improve myself and my skills every day.",
    //     "I am deeply thankful for all the opportunities I've been given, and for the incredible support and guidance from so many great people.",
    //     "I've learned and utilized all these amazing technologies along the way, to make software that grows and scales bussinesses, that in turn brings revenue and recogintion in their field.",
    //     "And as my story continues, I am living my dream of being a Software Developer..."
    // ],

    bio: [
        "My story with tech started when I was nine, thanks to a chunky VT220 terminal. I’d just tap its keyboard, pretending to code, not really knowing what I was doing, but i was completely hooked. That quiet, early spark ended up telling my whole story.",
        "After exploring different paths, I decided in 2021 it was time for a real change. That’s when I found The Odin Project. It didn’t just teach me to code—it rewired how I solve problems. I loved the challenge, picked things up quickly, and realized this was the start of a lifelong learning journey I’m still on today.",
        "None of this would be possible without the incredible people who’ve supported me. I’m so grateful for every opportunity, every bit of guidance, and every moment of belief from mentors and teammates along the way.",
        "Now, I get to use all these amazing technologies to build things that matter—software that helps businesses grow, scale, and stand out. And honestly? Pinch-me moment: I’m actually living my dream as a Frontend Engineer.",
    ],

    projects: [
        {
            id: 1,
            title: "Movie App",
            description: "This project showcases a movie search application built with ReactJS and Tailwind, leveraging The Movie Database API for movie data. Users can search for movies, view detailed information about each film, and save their favorite movies locally for quick access. The application features infinite scrolling to enhance user experience, allowing users to browse through a vast collection of movies seamlessly. It also features a fully custom modal to display movie details and filtering on bookmarks to easily find saved movies.",
            sourceCode: "https://github.com/Apostolos-Eleftheriou/react-movies",
            liveDemo: "https://movie-me-react.netlify.app/",
            featured: true,
            technologies: ["react", "tailwind"]
        },
        {
            id: 2,
            title: "Music Player",
            description: "I made this fun little project for my baby son with great care, love and attention to detail so he can listen to his favorite songs without ads or delays.",
            sourceCode: "https://github.com/Apostolos-Eleftheriou/jason_music",
            liveDemo: "https://apostolos-eleftheriou.github.io/jason_music/",
            featured: true,
            technologies: ["JavaScript"]
        },
        {
            id: 3,
            title: "Task APP",
            description: "This project demonstrates data fetching from an API and CRUD operations using Vue JS, Tailwind and Pinia for state management. It also has filtering and local storage utilization to simulate a database and preserve Tasks on page reload.",
            sourceCode: "https://github.com/Apostolos-Eleftheriou/pinia-first-project/tree/main/pinia-tasks",
            liveDemo: "https://pinia-crud.netlify.app/",
            featured: false,
            technologies: ["vue", "tailwind"]
        },
        {
            id: 4,
            title: "Demo Shop",
            description: "This project demonstrates dynamic routing and navigation, data fetching from a mock store API in a fully responive store using Nuxt JS and Tailwind.",
            sourceCode: "https://github.com/Apostolos-Eleftheriou/nuxt-store-app",
            liveDemo: "https://nuxtstoredemo.netlify.app/",
            featured: false,
            technologies: ["Nuxt_JS", "tailwind"]
        },
        {
            id: 5,
            title: "Weather APP",
            description: "This project showcases a weather application built with VueJS and Tailwind, leveraging the Open Meteo API for weather forecasts and OpenStreetMap for location services. Users can search and select locations, view detailed hourly and daily weather forecasts — including temperature, wind speed, and direction — and save their favorite locations locally for quick access even after page reloads. The application features extensive data manipulation to combine and display information from both APIs properly and effectively to the user.",
            sourceCode: "https://github.com/Apostolos-Eleftheriou/Vue-Weather-APP/tree/main/Vue-weather-app",
            liveDemo: "https://weather-vue-demo.netlify.app/",
            featured: true,
            technologies: ["vue", "tailwind"]
        },
        {
            id: 6,
            title: "Rock Paper Scissors",
            description: "Play against the computer! Trying to win gets addicting after a while.",
            sourceCode: "https://github.com/Apostolos-Eleftheriou/rock-paper-scissors",
            liveDemo: "https://apostolos-eleftheriou.github.io/rock-paper-scissors/",
            featured: false,
            technologies: ["JavaScript"]
        },
        {
            id: 7,
            title: "Etch-A-Sketch",
            description: "This project demonstrates my DOM manipulation skills, written in plain JavaScript. Try drawing something!",
            sourceCode: "https://github.com/Apostolos-Eleftheriou/etch-a-sketch",
            liveDemo: "https://apostolos-eleftheriou.github.io/etch-a-sketch/",
            featured: false,
            technologies: ["JavaScript"]
        },
        {
            id: 8,
            title: "Datatable",
            description: "This project demonstrates data sorting in a datatable using Vue JS.",
            sourceCode: "https://github.com/Apostolos-Eleftheriou/Vue-Learning",
            liveDemo: "https://apostolos-eleftheriou.github.io/Vue-Learning/",
            featured: false,
            technologies: ["vue", "tailwind"]
        },
    ],

    theme: {
        colors: [
            { name: "green", value: "#67b77d" },
            { name: "purple", value: "#7d67b7" },
            { name: "blue", value: "#677db7" },
            { name: "yellow", value: "#ffdf67" },
            { name: "default", value: "#f85f73" }
        ]
    }
};
