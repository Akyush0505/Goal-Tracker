# Goal-Tracker
A minimal daily goal tracker I built while practicing vanilla JavaScript. The idea is simple — every day you set 3 goals, check them off as you finish, and the app keeps track of your progress. No accounts, no backend, just you and your goals.
Why I built this
I wanted a project that actually felt useful, not just another to-do list tutorial. So I added a progress bar, persistent storage with localStorage, and some motivational quotes that change depending on how many goals you've completed. Small things, but they made the project feel alive.

Features

Set 3 daily goals and check them off one by one
Progress bar that fills up as you complete goals (with a smooth animation)
Motivational quote that updates based on your progress
Goals are saved in localStorage — refresh the page and everything is still there
Completed goals get a strikethrough so you can visually feel the progress
Rotating sun icon because why not 🌞
Responsive — works fine on mobile too


Tech used

HTML
CSS (with a bit of animation)
Vanilla JavaScript
localStorage for persistence
Google Fonts (Poppins)


What I learned

How to use localStorage to save and load data between sessions
Working with querySelectorAll and iterating over NodeLists
Dynamically updating the DOM (progress bar width, text content, classes)
Toggling CSS classes to handle UI state (completed vs not completed)
Writing cleaner event listener logic


Run it locally
bashgit clone https://github.com/your-username/focus-on-today.git
cd focus-on-today
# open index.html in your browser
No installs needed. Just open and use.


"Move one step ahead, today!"

Made with ❤️ by Ayush Jaiswal
