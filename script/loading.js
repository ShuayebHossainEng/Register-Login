const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const recoverButton = document.getElementById('recoverIDButton');
const backToSignInButton = document.getElementById('backToSignIn');

const sendRecoveryLinkButton = document.getElementById('sendRecoveryLink');
const verifyCodeBtn = document.getElementById('verifyCodeBtn');
const backToRecover = document.getElementById('backToRecover');
const backToSignInFromReset = document.getElementById('backToSignInFromReset');

const signUpContainer = document.getElementById('signup');
const signInContainer = document.getElementById('signin');
const recoverContainer = document.getElementById('recover');
const verifyContainer = document.getElementById('verify');
const resetContainer = document.getElementById('reset');

// Navigation helpers
function hideAll() {
  signUpContainer.style.display = 'none';
  signInContainer.style.display = 'none';
  recoverContainer.style.display = 'none';
  verifyContainer.style.display = 'none';
  resetContainer.style.display = 'none';
}

// Auth navigation
signUpButton.addEventListener('click', () => {
  hideAll();
  signUpContainer.style.display = 'block';
});

signInButton.addEventListener('click', () => {
  hideAll();
  signInContainer.style.display = 'block';
});

recoverButton.addEventListener('click', () => {
  hideAll();
  recoverContainer.style.display = 'block';
});

backToSignInButton.addEventListener('click', () => {
  hideAll();
  signInContainer.style.display = 'block';
});

// Recovery flow

// Step 1: Email submitted → ask for verification code
sendRecoveryLinkButton.addEventListener('click', () => {
  hideAll();
  verifyContainer.style.display = 'block';
});

// Step 2: Verification code → reset password screen
verifyCodeBtn.addEventListener('click', () => {
  const code = document.getElementById('verificationCode').value.trim();

  // temporary demo validation
  if (code === '') {
    alert('Please enter the verification code');
    return;
  }

  hideAll();
  resetContainer.style.display = 'block';
});

// Go back from verification → recover email
backToRecover.addEventListener('click', () => {
  hideAll();
  recoverContainer.style.display = 'block';
});

// Final step → back to sign in
backToSignInFromReset.addEventListener('click', () => {
  hideAll();
  signInContainer.style.display = 'block';
});