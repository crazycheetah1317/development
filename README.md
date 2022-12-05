# Development

### Link to Deployed Website
https://crazycheetah1317.github.io/development/

### Goal and Value of the Application
The goal of this application is to let users create a vision board for the vacations they want to go on. Users can use it as a travel planner by adding and removing trips to their wishlist and narrowing down their options based on certain travel packages, continents, price, and the number of guests allowed. 

### Usability Principles Considered
Learnability
- I decided to present the sorting and filtering features as radio buttons so that users could clearly see the options that they can choose from. I also decided to include a reset button instead of allowing users to click and unclick the radio buttons to go back to reset the items because I thought it would showcase the reset feature more clearly. The add and remove buttons are separated for a similar reason, so that users can clearly differentiate between the two.

Memorabiltiy
- There are no intermediary steps that users have to remember in order to achieve the effect they want. If I had chosen to include dropdown menus instead of radio buttons, I think it would've been more confusing to see what filtering/sorting types align with what heading (the text that displays over the collapsed dropdown menu). Onces users know what each button does, it's easy to remember the functionality.

Efficiency
- Similarly, since there are no intermediary steps that users have to take and all buttons are clearly outlined in the UI for users to use directly, the website should be intuitive to use. 

### Organization of Components
I created components for each of the vacation trips (TravelItem). Each component is displayed within its own
cell in a 3x4 grid. The information displayed for each item is contained in the travel-data.json file. 

### How Data is Passed Down Through Components
I used props to get specific attributes for each item, such as name, package, image, price, continent, and people. By
passing props into the TravelItem component, each child (item) of the TravelItem component can access the data that is stored by props. This allows the data for each item to be displayed consistently.

### How the User Triggers State Changes
I created state variables for the following:

- travelItems: an array of all TravelItem components
This is what is displayed on the website at all times. The UI is reactive to all changes of this state.

- cartItems: an array of all TravelItem components that are added to the wishlist
This is what is displayed when users add and/or remove an item.

- sortedData: an array of all TravelItem components that are sorted in ascending order based on the selected type
This is what is displayed when users choose a property to sort the data by.

- packageType: a string that represents the selected package to be filtered
- contType: a string that represents the selected continent to be filtered
These state variables are used to compare that their values match their respective selected types.

- filteredData: an array of TravelItem components that are filtered on sortedData based on package type
- filteredData2: an array of TravelItem components that are filtered on sortedData based on continent type
Both of these state variables are combined to display travelItems onced sorted and filtered.
