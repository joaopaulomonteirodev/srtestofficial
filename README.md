# srtestofficial
A Cool Card Swiper


## These was the requirements:

Intimacy Swiper (build the UI + FE functionality in React Native)

[x] 1. build the instruction pop-up 
[x]2. build the Swiper screen, a user can swipe right for Yes, left for No, up for Maybe, or down to Exit the flow
[x]3. build the Swiper counter on top of the screen which indicates how many swipes are left for the user
[x]4. build the card with detailed information which gets displayed if a user taps on the card on Swiper
[]5. if a user clicks on "See more" display the whole description and let them scroll through it
[x]6. use JSON dummy data for the remaining Swiper cards
[x]7. share the code via GitHub repository

## Some considerations about the requirement 5:
. When we turn the card pressable we can't use the scroll and because of this I could not complete. I'll back to this point anyway later, because I'm interested. But if you tap the card for flip and remove the pressable in debug mode it become scrollable.
. The pressable was necessary for the swipe functions too. So, even trying intercept the touch with onStartShouldSetResponder={() => true} I had no luck because all te flipcard lose the "pressability".
. I think that a possible workaround would be remove the hidden from React DOM, since this way the behavior from one face does not mess with the visible one. Certainly I'll try this approach later. But for now this is what we have.

See you!



