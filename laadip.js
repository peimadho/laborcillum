// Get the player's current position
var playerPosition = getPlayerPosition();

// Move the player to the right
executeMove("right");

// Check if the player has moved to the right by comparing the new position directly
if (getPlayerPosition().x > playerPosition.x) {
  // The player has moved to the right
  // Perform actions based on the player's move to the right
}
