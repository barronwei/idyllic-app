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

- Basic popup modal text is not centered
- Basic popup modal has no exit button

### Todo

- Fix popup modal
- Pass props through tab navigators
- Previous todo tasks

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

-

### Todo

-

### Misc

- User experience sucks for the add task section
- Reconsider if personal or settings page should be first
