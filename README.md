# 🎵 Songkick Concert Finder

A Next.js application to search for artists and view their upcoming concerts using the Songkick API.

## 🚧 Current Status

**Update [September 2024]:** Songkick is currently not issuing new API keys due to ongoing improvements to their API. This has temporarily paused the full implementation of the concert search functionality in this project. I am closely monitoring the situation and will integrate the API as soon as it becomes available.

## 📌 Project Overview

Despite the API limitation, the foundational work of the application has been set up, demonstrating my expertise in building scalable and maintainable web applications.

### **Implemented Features:**

- **Project Setup:**
  - Initialized a Next.js 14 project with TypeScript and Tailwind CSS.
  - Configured ESLint and Prettier for code quality and consistency.
- **Component Development:**
  - Built the `EventList`, `EventCard` and `ArtistSearch` components to display events.
  - Established routing and navigation structure.
- **API Integration Preparation:**
  - Created the API route handler in `src/app/api/search/route.ts` for future integration with Songkick API.

## 🛠 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **Linting & Formatting:** ESLint, Prettier

## 🚀 Planned Features

- **Artist Search Functionality:** Allow users to search for artists.
- **Upcoming Events Display:** Show a list of upcoming concerts and events for selected artists.
- **Responsive Design:** Ensure optimal viewing experience across devices.
- **User Authentication:** Implement sign-in/sign-up features for personalized experiences.

## 📈 Future Enhancements

- **Unit and Integration Testing:** Using Jest and React Testing Library to ensure robustness.
- **Continuous Integration/Continuous Deployment (CI/CD):** Set up pipelines with GitHub Actions.
- **Error Handling and Loading States:** Improve user experience during data fetching.
