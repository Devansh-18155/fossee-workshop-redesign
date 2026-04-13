FOSSEE Workshop Portal - UI/UX Redesign

This is my submission for the FOSSEE Python Screening Task. I redesigned the existing FOSSEE Workshop Booking Portal using React, focusing on making it modern, mobile-friendly, and easy to use for students.

Original Repository
(https://github.com/FOSSEE/workshop_booking)

The workshop_booking folder also contains the before and after screenshots of the ui/ux design.

Prerequisites:

-> Node.js


-> npm

Steps to run locally:

Clone the repository:
1) git clone https://github.com/Devansh-18155/fossee-workshop-redesign


2) Go into the frontend folder:
cd workshop_booking
cd frontend


3) Install dependencies:
npm install


4) Start the development server:
npm run dev


5) Open `http://localhost:5173` in your browser.


Question. What Design Principles Did I Follow?

When I started looking at the original site, the first thing I noticed was that it felt outdated and wasn't comfortable to use on a phone. Since most students access things on mobile, I made that my starting point.

I went with a dark theme because it's easier on the eyes, especially for students who might be browsing late at night. I used purple and blue gradients to keep things consistent and give the site a modern feel without going overboard.



Question. How Did I Make It Responsive?

I built everything mobile-first, meaning I designed for small screens first and then adjusted for bigger ones. I used Tailwind CSS breakpoints throughout things like the navigation menu collapse on mobile, the workshop cards go from 3 columns on desktop to 1 column on phones, and forms stack vertically on small screens.

I also made sure all buttons are large enough to tap comfortably on a touchscreen, which is something the original site struggled with.



Question. What Trade-offs Did I Make?

The biggest trade-off was between visual richness and performance. I wanted the site to look great with glassmorphism effects and animated backgrounds, but I was careful not to go too far. I used CSS-only animations instead of JavaScript-heavy animation libraries, which keeps the bundle small and the site fast.

One honest trade-off the glassmorphism blur effect can be a bit heavy on older Android phones. But since it's purely a visual enhancement, the site still works fine even if that effect doesn't render perfectly.



Question. What Was the Most Challenging Part?

The hardest part was getting the dark theme to apply consistently across all pages. Tailwind CSS applies light-mode base styles by default, so even when I set the background to dark in my CSS, some pages would still flash white or show light-colored form inputs.

Another tricky bit was the Navbar making it transparent on the hero section but adding a blur background when you scroll down took a bit of work with a scroll event listener, but it ended up looking really smooth.


How I approached it:

The most challenging part for me was honestly just getting started the original project is a Django app with HTML templates, and converting that mental model into a React component structure took some thinking.

I began by going through all the HTML template files in the repo one by one to understand what pages existed and what each one was supposed to do. Once I had a clear picture, I mapped each Django template to a React page component and started building them one at a time.


Tech Stack Used:

-> React 18: Component-based UI
-> Vite: Fast development server and bundler
-> Tailwind CSS v3: Utility-first styling
-> React Router DOM v7: Client-side routing


Submission Checklist:

-> [Y] Code is readable and well-structured
-> [Y] Git history shows progressive work
-> [Y] README includes reasoning answers and setup instructions
-> [Y] Screenshots included
-> [Y] Code is documented where necessary
