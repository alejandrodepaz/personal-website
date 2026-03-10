interface QA_DATA {
    topic: string
    questions: string[]
    response: string
}

export const QA_DATA_LIST: QA_DATA[]  = [
    {
        topic: 'age',
        questions: [
            "How old is Alex?",
            "How old are you?",
            "What is Alejandro's age?",
            "When were you born?",
        ],
        response: 'Alex is currently 27 years old.'
    },
    {
        topic: 'location',
        questions: [
            "Where is Alex currently located?",
            "Where is Alex based?",
            "Where is Alex living?",
            "Current location?",
        ],
        response: 'Alex is currently based in Seattle, WA.'
    },
    {
        topic: 'hobbies',
        questions: [
            "What are Alex's hobbies?",
            "What does Alex do for fun?",
            "What are your interests outside of work?",
            "What do you like to do in your free time?",
        ],
        response: 'Alex loves to play basketball, tennis, chess, travel, make music, and be in nature. Right now his main focus is learning Spanish!'
    },
    {
        topic: 'favorite_programming_language',
        questions: [
            "What is Alex's favorite programming language?",
            "What language does Alex prefer to code in?",
            "What's your go-to language?",
            "What programming language do you enjoy most?",
        ],
        response: 'Alex enjoys working in Python, TypeScript, and Kotlin - but he considers himself language agnostic and mostly cares about building things.'
    },
    {
        topic: 'favorite_project',
        questions: [
            "What is Alex's favorite project he's worked on?",
            "What project are you most proud of?",
            "What has been your most exciting project?",
            "What's the coolest thing you've built?",
        ],
        response: 'Alex likes building fullstack websites the most. He feels that being able to have a tangible product that users can interact with directly is extremely satisfying.'
    },
    {
        topic: 'career_goal',
        questions: [
            "What are Alex's career goals?",
            "What kind of role is Alex looking for?",
            "What does Alex want to do next in his career?",
            "What are you looking for in your next job?",
        ],
        response: "Alex would love to continue growing as a software engineer and sharpening his technical skills by working with new cutting-edge technology in growing technology sectors."
    },
    {
        topic: 'fun_fact',
        questions: [
            "What is a fun fact about Alex?",
            "Tell me something interesting about Alejandro.",
            "What's a surprising thing about you?",
            "What's something most people don't know about Alex?",
        ],
        response: "Alex can solve a Rubiks Cube"
    },
    {
        topic: 'favorite_food',
        questions: [
            "What is Alex's favorite food?",
            "What does Alex like to eat?",
            "What is Alex's go-to dish?",
            "What is Alex's favorite restaurant",
        ],
        response: "Alex loves Asian and Latin cuisine the most - his favorites are Korean BBQ, hong shao rou, carnitas tacos, and jerk chicken."
    },
    {
        topic: 'motivation',
        questions: [
            "Why did Alex become a software engineer?",
            "What inspired Alex to get into programming?",
            "Why did you choose software engineering?",
            "What got you into coding?",
        ],
        response: "Alex has always loved problem solving and building things - software engineering is the perfect profession to enable him to do both of these things."
    },
    {
        topic: 'dream_company',
        questions: [
            "What is Alex's dream company to work for?",
            "Where would Alex love to work?",
            "What type of company are you hoping to join?",
            "What's your ideal workplace?",
        ],
        response: "Alex values team and company culture above all else. He wants to work in a highly collaboritve environment where everybody is a team-player and everybody can succeed together."
    },
    {
        topic: 'book_or_podcast',
        questions: [
            "What books or podcasts does Alex recommend?",
            "What is Alex currently reading?",
            "Do you have any book recommendations?",
            "What podcasts does Alex listen to?",
        ],
        response: "Alex's favorite book is Oryx and Crake by Margaret Atwood. While cooking or driving, he enjoys listening to podcasts in Spanish for practice."
    },
    {
        topic: 'pets',
        questions: [
            "Does Alex have any pets?",
            "Does Alejandro have a dog or cat?",
            "Do you have any animals?",
            "What pets does Alex have?",
        ],
        response: "Alex currently doesn't have any pets, but he would love to have a dog in the near future"
    },
]
