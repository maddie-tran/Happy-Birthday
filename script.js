// Login and password code - only runs on index.html
const loginBtn = document.getElementById("loginBtn");
const passwordScreen = document.getElementById("passwordScreen");

if (loginBtn && passwordScreen) {
  loginBtn.addEventListener("click", () => {
    passwordScreen.classList.remove("hidden");
    loginBtn.classList.add("hidden");
  });
}

const validPassword = "Boofie";
const submitBtn = document.getElementById("submitBtn");
const passwordInput = document.getElementById("password");
const birthdayScreen = document.getElementById("birthdayScreen");
const errorMessage = document.getElementById("errorMessage");

if (submitBtn && passwordInput && birthdayScreen && errorMessage) {
  submitBtn.addEventListener("click", () => {
    const enteredPassword = passwordInput.value;
      if (enteredPassword === validPassword) {
          passwordScreen.classList.add("hidden");
          birthdayScreen.classList.remove("hidden");
          errorMessage.textContent = "";
      } else {
          errorMessage.textContent = "Incorrect password. Please try again.";
      }
  });
}

// Custom cursor - runs on both pages if cursor exists
const cursor = document.querySelector('.custom-cursor');

if (cursor) {
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
  });

  const clickables = document.querySelectorAll('button, #submitBtn');

  clickables.forEach(elem => {
    elem.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
    });
    elem.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  });
}

// Card flip code - only runs on cards.html
if (document.getElementById('cardsGrid')) {
  const cardWrappers = document.querySelectorAll('.card-wrapper');
  const backdrop = document.getElementById('backdrop');

  let activeCard = null;

  // Add click event to each card
  cardWrappers.forEach(cardWrapper => {
      cardWrapper.addEventListener('click', (e) => {
          // If this card is already active and we clicked on the wrapper itself (not the card)
          if (cardWrapper.classList.contains('active') && e.target === cardWrapper) {
              closeCard();
              return;
          }

          // If no card is active, activate this one
          if (!activeCard) {
              openCard(cardWrapper);
          }
      });
  });

  // Add click event to backdrop
  backdrop.addEventListener('click', closeCard);

  // Function to open/activate a card
  function openCard(cardWrapper) {
      activeCard = cardWrapper;
      cardWrapper.classList.add('active');
      backdrop.classList.add('active');
      
      // Prevent body scroll when card is open
      document.body.style.overflow = 'hidden';
  }

  // Function to close the active card
  function closeCard() {
      if (activeCard) {
          activeCard.classList.remove('active');
          backdrop.classList.remove('active');
          activeCard = null;
          
          // Re-enable body scroll
          document.body.style.overflow = '';
      }
  }

  // Close card when pressing Escape key
  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && activeCard) {
          closeCard();
      }
  });

  const surpriseBtn = document.getElementById("surpriseBtn");
  const cardsContainer = document.getElementById("container");
  
  if (surpriseBtn) {
    surpriseBtn.addEventListener("click", () => {
      birthdayScreen.classList.add("hidden");
      cardsContainer.classList.remove("hidden");
    });
  }
}

