# Image Gallery

Purpose  - The purpose of this application is to allow users to view a gallery
of images. Users can either view the three default topic category images, or
they can enter a search term to view galleries for specific topics.

Implementation - This application is a single page application that uses the
React library to render components that display image galleries. It fetches
data from the Flickr API to provide for dynamic image searching. It utilizes
React Router to direct the user to different views of the page depending on
whether the user clicks on one of the default category topic links or searches
for a particular topic. It also provides basic error handling to inform the
user if their search yielded no matching images and whether or not the current
page could be found. The app performs these various functions through the use
of the following components:
1. < App > - This component is the main component of the application which acts
   as a container for the other components. It fetches image data from the
   Flickr API and then renders the Header component and conditionally render
   the Gallery component based on particular routes. It also renders the
   NotFound component if the current URL does not match any routes.
2. < Header > - This component renders the search field via the SearchForm
   component as well as the Nav component and is (along with its child
   components) always visible regardless of which gallery is displayed.
3. < Nav > - This component renders the links to the three default topic
   categories. It does so by passing the category topics (received as props) to
   NavLink components which use them as routes to link to.
4. < SearchForm > - This component renders the search field and its corresponding
   submit button. It maintains its own local state for the user's search term,
   and updates this state whenever the text in the search field is updateed. It
   passes the completed search term to the App component through a
   callback function that it receives as a prop. Additionally, it updates the
   current URL with a nested route containing '/search' to reflect the user's
   search term and request.
5. < Gallery > - This component serves as a display for image data. Checks to
   see if there are any images for the given gallery and renders a GalleryItem
   component for each image if there are. If there are no images, it renders
   the NoItems component.
6. < GalleryItem > - This component renders an image to populate a given gallery.
   Sets the image's source and alt attributes through props received by the
   Gallery component.
7. < NoItems > - This component renders a message to inform the user that there
   are no images that match their search term.
8. < NotFound > - This component renders a 404/not found error message to inform
   the user that the current page could not be found.

Config File - The config file, 'config.js' is a simple JavaScript file that
stores the key for the Flickr API and exports it to the App component. It is
located in the './src' folder.
