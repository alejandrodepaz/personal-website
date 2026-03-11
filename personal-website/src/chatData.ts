interface QA_DATA {
    topic: string
    keywords: string[]
    questions: string[]
    response: string
}

export const QA_DATA_LIST: QA_DATA[]  = [
    {
        topic: 'age',
        keywords: ['age', 'old', 'born', 'years'],
        questions: [
            "How old is Alex?",
            "What is Alex's age?",
            "When was Alex born?",
            "What year was Alex born?",
        ],
        response: 'Alex is currently 27 years old.'
    },
    {
        topic: 'location',
        keywords: ['location', 'based', 'living', 'city', 'where'],
        questions: [
            "Where does Alex live?",
            "Where is Alex based?",
            "What city does Alex live in?",
            "Where is Alex located?",
        ],
        response: 'Alex is currently based in Seattle, WA.'
    },
    {
        topic: 'hobbies',
        keywords: ['hobbies', 'interests', 'fun', 'free time', 'outside work'],
        questions: [
            "What are Alex's hobbies?",
            "How does Alex spend his free time?",
            "What activities does Alex enjoy outside of work?",
            "What does Alex do for fun?",
        ],
        response: 'Alex loves to play basketball, tennis, chess, travel, make music, and be in nature. Right now his main focus is learning Spanish!'
    },
    {
        topic: 'favorite_programming_language',
        keywords: ['programming', 'language', 'coding', 'python', 'typescript', 'kotlin'],
        questions: [
            "What is Alex's favorite programming language?",
            "Which language does Alex prefer to code in?",
            "What programming language does Alex enjoy most?",
            "What tech stack does Alex use?",
        ],
        response: 'Alex enjoys working in Python, TypeScript, and Kotlin - but he considers himself language agnostic and mostly cares about building things.'
    },
    {
        topic: 'favorite_project',
        keywords: ['project', 'built', 'proud', 'exciting', 'coolest'],
        questions: [
            "What is Alex's favorite project?",
            "What project is Alex most proud of?",
            "What has Alex built that stands out?",
            "Which of Alex's projects is the most impressive?",
        ],
        response: 'Alex likes building fullstack websites the most. He feels that being able to have a tangible product that users can interact with directly is extremely satisfying.'
    },
    {
        topic: 'career_goal',
        keywords: ['career', 'goal', 'role', 'job', 'next', 'looking for'],
        questions: [
            "What are Alex's career goals?",
            "What kind of role is Alex looking for?",
            "Where does Alex see his career going?",
            "What type of job does Alex want next?",
        ],
        response: "Alex would love to continue growing as a software engineer and sharpening his technical skills by working with new cutting-edge technology in growing technology sectors."
    },
    {
        topic: 'fun_fact',
        keywords: ['fun fact', 'surprising', 'interesting', 'unusual', 'people don\'t know'],
        questions: [
            "What is a fun fact about Alex?",
            "Tell me something surprising about Alex.",
            "What makes Alex unique?",
            "What is something most people don't know about Alex?",
        ],
        response: "Alex can solve a Rubiks Cube"
    },
    {
        topic: 'favorite_food',
        keywords: ['food', 'eat', 'dish', 'restaurant', 'cuisine', 'favorite food'],
        questions: [
            "What is Alex's favorite food?",
            "What does Alex like to eat?",
            "What cuisine does Alex enjoy most?",
            "What restaurant does Alex like to go to?",
        ],
        response: "Alex loves Asian and Latin cuisine the most - his favorites are Korean BBQ, hong shao rou, carnitas tacos, and jerk chicken."
    },
    {
        topic: 'motivation',
        keywords: ['motivation', 'inspired', 'why', 'chose', 'got into', 'reason'],
        questions: [
            "Why did Alex become a software engineer?",
            "How did Alex get into coding?",
            "What motivated Alex to pursue a career in tech?",
            "Why did Alex choose software engineering as a career?",
        ],
        response: "Alex has always loved problem solving and building things - software engineering is the perfect profession to enable him to do both of these things."
    },
    {
        topic: 'dream_company',
        keywords: ['dream company', 'ideal workplace', 'work for', 'employer', 'culture'],
        questions: [
            "What is Alex's dream company?",
            "Where would Alex most like to work?",
            "What kind of company culture does Alex value?",
            "What type of workplace suits Alex best?",
        ],
        response: "Alex values team and company culture above all else. He wants to work in a highly collaboritve environment where everybody is a team-player and everybody can succeed together."
    },
    {
        topic: 'book_or_podcast',
        keywords: ['book', 'podcast', 'reading', 'listen', 'recommend'],
        questions: [
            "What books does Alex recommend?",
            "What is Alex currently reading?",
            "Which podcasts does Alex listen to?",
            "Does Alex have any reading recommendations?",
        ],
        response: "Alex's favorite book is Oryx and Crake by Margaret Atwood. While cooking or driving, he enjoys listening to podcasts in Spanish for practice."
    },
    {
        topic: 'pets',
        keywords: ['pets', 'dog', 'cat', 'animals', 'own'],
        questions: [
            "Does Alex have any pets?",
            "Does Alex own a dog or cat?",
            "Has Alex ever had a pet?",
            "What animals does Alex own?",
        ],
        response: "Alex currently doesn't have any pets, but he would love to have a dog in the near future"
    },
]

export const CONTRACTIONS: Record<string, string> = {
  "what's": 'what is', "where's": 'where is', "who's": 'who is',
  "how's": 'how is', "he's": 'he is', "she's": 'she is', "it's": 'it is',
  "that's": 'that is', "there's": 'there is', "doesn't": 'does not',
  "don't": 'do not', "didn't": 'did not', "isn't": 'is not',
  "aren't": 'are not', "wasn't": 'was not', "hasn't": 'has not',
  "haven't": 'have not', "can't": 'cannot', "won't": 'will not',
}
