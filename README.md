# PlantManager - NLW#5


## About this repository

This repo have the App created during the **Next Level Week 5**, a [Rocketseat](https://rocketseat.com.br/) event.

## The Plant Manager

The App will help with plant aid. The main function of the app is schedule the time to next plant watering and return a notification in the time of the watering. Details about the app functions and appearance is on [Figma](https://www.figma.com/file/GV5PsTewZM8FoizN1lUfw3/PlantManager).

## Stack

The app was created with the following tecnologies:

- React Native
- Expo
- Yarn
- VSCode
- TypeScript

## Known issues

After app creation I could see some issues that I will fix before try to create the APK file. Here is the list of all know issues for now.

### No avoid Welcome page

The app creation doesn't include a way to avoid the app welcome page and user creation. Even if you have plants saved, when you open the app is presented the welcome page and requested to include your name.

### No way to upload picture

The app has an option to store the user picture and it is showed, but only the default image. The user has no way to upload and/or change the picture.

### Bad behavior of environment button scroll

The environment buttons has problem in the horizontal scroll, the last button *Sala* is not showed when the user tries to scroll.

### Notification never stops

When a notification start, it never stop. Every 1 minute the notification is presented again.

### The next plant care shows wrong time

In the *Minhas Plantas* the notification of next cary don't consider the next day and shows the time comparing only with the time of the current day, including negative time.

### Is not possible to save a plant with a time to care low to current time.

When the user is saving a new plant, they need to inform the time they want to be notified. This time need to be higher of the actual time. It is not possible to save a plant with a notification on a time before the actual time.

