const CheckValidData = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!emailRegex.test(email)) {
    return { valid: false, message: 'Invalid email format' };
  }

  if (!passwordRegex.test(password)) {
    return {
      valid: false,
      message:
        'Password must be at least 8 characters long and contain both letters and numbers',
    };
  }
  return { valid: true };
};
