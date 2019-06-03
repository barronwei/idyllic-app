## 0.0.1

- Completed add task section for minimum viable product

### Bugs

- Currently you can click submit on the add task section multiple times in a row

### Todo

- Add form verification and erasure on completion for the add task section
- Build general modal component for errors and confirmation
- Start writing algorithm for task sorting

### Misc

- Rewriting highest component using hooks required too much repetitive code

## 0.0.2

- Completed form verification system in logic directory
- Functional but perhaps not optimal reading of Firestore tasks
- Functional offline
- Form for add task clears after sucessful submission

### Bugs

- Lacking complete form verification for add task section

### Todo

- Add section headers to the list
- Add top tabs to main home page
- Add details of each task to the list
- Add functionality for editing and removing tasks in the list
- Review list props specifically keys
- Complete form verification for the add task section
- Build general modal component for errors and confirmation
- Start writing algorithm for task sorting

### Misc

- Fantastic that Firebase supports offline persistence

## 0.0.3

- Removed persistence settings due to redundance with default settings
- Removed uuid package because Firebase offers keys
- Added basic popup modal

### Bugs

- Basic popup modal text is not centered beyond one line
- Basic popup modal has no exit button

### Todo

- Fix popup modal
- Pass props through tab navigators
- Previous tasks

### Misc

- Still trying to figure out how to pass props through tab navigators

## 0.0.4

- Removed pose package
- Fixed popup modal for abstraction among error and success messages
- Popup should prevent people from repeatedly submitting tasks
- Completed form verification for add task section
- Abstraction upon popup modal to accept positive and negative prompts
- Started popup modal for confirmation of removal of tasks
- Move sign out button to settings page

### Bugs

- Basic popup modal text is not centered beyond one line

### Todo

- Write deletion of tasks after confirmation from popup modal
- Write logic for determining order of tasks
- Previous tasks

### Misc

- User experience sucks for the add task section
- Reconsider if personal or settings view should be first
- Finishing the main focus view will result in minimium viable product

## 0.0.5

- Removed react native hooks
- Replaced all alerts with popup modals
- Added swipe functionality to each item in the section list
- Added completion and deletion of tasks
- Swipe functionality should fit all screens
- Abstracted colors for accept and decline to configuration
- Using native directory of styled components
- Ordered imports
- Renamed certain functions

### Bugs

- Previous bugs

### Todo

- Need to modify completion of tasks functionality to incorporate metrics
- Need to abstract tasks list for perhaps a completed tasks list
- Need to add closing functionality for rejection after swipeable
- Previous tasks

### Misc

- Fortunately, one view only needs one popup modal due to abstraction
- Storing the initial state for hooks in a variable allows for easy erasure
