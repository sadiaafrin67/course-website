# Course Registration 

## Features

- View Available Courses:
  - Users can view a list of available courses.
  
- Calculate Total Price and Total Credit Hour:
  - Users can select courses from the list and calculate the total price and total credit hours of the selected courses.
  
- Prevent Duplicate Course Selection:
  - Users cannot select the same course more than once, ensuring that they don't accidentally register for the same course multiple times.
 
------------------------------------------------------------------------
# Discussing how I managed the state in my assignment project.

In my assignment project, I used React's 'useState' hook for managing state. Here's how I handled it:

- 'allCourse': Stored the available courses.
- 'selectedCourse': Kept track of user-selected courses.
- 'remainingCredit': Managed the remaining credit hours.
- 'totalCredit' and 'totalPrice': Calculated and displayed the total credit hours and price of selected courses.

I used 'useEffect' to fetch course data and update 'allCourse'. The 'handleSelectCourse' function managed user choices, updating relevant state variables. It also prevented users from selecting the same course twice.

This approach made it easy to track and update user selections, ensuring a smooth registration process.




