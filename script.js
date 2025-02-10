// Set event dates (YYYY, MM (0-based), DD)
const events = {
  "timer-rose": new Date(2025, 1, 7),  // Rose Day - Feb 7
  "timer-propose": new Date(2025, 1, 8),  // Propose Day - Feb 8
  "timer-chocolate": new Date(2025, 1, 9),  // Chocolate Day - Feb 9
  "timer-teddy": new Date(2025, 1, 10),  // Teddy Day - Feb 10
  "timer-promise": new Date(2025, 1, 11),  // Promise Day - Feb 11
  "timer-hug": new Date(2025, 1, 12),  // Hug Day - Feb 12
  "timer-kiss": new Date(2025, 1, 13),  // Kiss Day - Feb 13
  "timer-valentine": new Date(2025, 1, 14)  // Valentine's Day - Feb 14
};

function updateTimers() {
  const now = new Date();

  for (let id in events) {
      const eventDate = events[id];
      const diff = eventDate - now;

      if (diff <= 0) {
          document.getElementById(id).textContent = "Available Now!";
          document.getElementById(id).nextElementSibling.disabled = false;
      } else {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);

          document.getElementById(id).textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
          document.getElementById(id).nextElementSibling.disabled = true;
      }
  }
}

// Update timers every second
setInterval(updateTimers, 1000);
updateTimers();


