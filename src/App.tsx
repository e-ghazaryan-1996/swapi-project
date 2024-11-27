import { RouterProvider } from "react-router";
import routerConfig from "@/routes/route-config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routerConfig} />;
      </QueryClientProvider>
    </>
  );
}

export default App;
/*
TASK

Develop a mini website using React with polished styling through CSS (preferably with a preprocessor) and a UI kit. Integrate one of the following state management libraries: MobX, Zustand, or Redux. Additionally, implement Google and Facebook authentication.

Data Source: Use the SWAPI API (https://swapi.dev/api/people) to retrieve all character data.

Website Requirements:
The website should have three pages with responsive design for both desktop and mobile:

1. Characters List Page:
• Display all characters in an optimized, scrollable list.
• Include functionality to like/unlike each character.
• Add an optimized autocomplete search input to filter characters by name.
2. Character Info Page:
• Display character details, including name, mass, height, hair color, eye color, homeworld, films, and vehicles.
• Enable editing of the character’s name.
• Include like/unlike functionality.
3. Favorites Page:
• Show a list of all characters marked as favorites.
• Allow users to like/unlike characters from this page as well.

Access Control:
Restrict access to the pages so that users must authenticate via Google or Facebook to proceed.
*/
